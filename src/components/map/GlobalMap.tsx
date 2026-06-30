import React, { useEffect, useRef, useState } from "react";
import "./map.css";
import locations from "./LocationData.tsx";

interface Location {
    id: string | number;
    city: string;
    country: string;
    label: string;
    agent: string;
    phone: string;
    timezone: string;
    lat: number;
    lng: number;
}

interface ArcData {
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    from: string;
    to: string;
}

// À adapter selon le type réel exporté par ton fichier locations
const typedLocations = locations as Location[];

const locationArcs: ArcData[] = typedLocations.map((location, index) => {
    const nextLocation = typedLocations[(index + 1) % typedLocations.length];

    return {
        startLat: location.lat,
        startLng: location.lng,
        endLat: nextLocation.lat,
        endLng: nextLocation.lng,
        from: location.city,
        to: nextLocation.city,
    };
});

interface Dimensions {
    width: number;
    height: number;
}

export default function GlobeMap(): React.JSX.Element {
    const containerRef = useRef<HTMLDivElement | null>(null);

    interface GlobeControls {
        autoRotate: boolean;
        autoRotateSpeed: number;
        enableDamping: boolean;
        dampingFactor: number;
    }

    interface GlobeInstance {
        controls: () => GlobeControls;
        pointOfView: (
            pov: { lat: number; lng: number; altitude: number },
            transitionMs?: number,
        ) => void;
    }

    const globeRef = useRef<GlobeInstance | null>(null);

    const [Globe, setGlobe] =
        useState<React.ComponentType<Record<string, unknown>> | null>(null);

    const [dimensions, setDimensions] = useState<Dimensions>({
        width: 0,
        height: 500,
    });

    const [selected, setSelected] = useState<Location | null>(
        typedLocations[0] ?? null,
    );

    const [time, setTime] = useState<string>("");

    useEffect(() => {
        let isMounted = true;

        import("react-globe.gl").then((module) => {
            if (isMounted) {
                setGlobe(() => module.default);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const updateDimensions = (): void => {
            if (!containerRef.current) {
                return;
            }

            const rect = containerRef.current.getBoundingClientRect();

            setDimensions({
                width: Math.round(rect.width),
                height: Math.round(rect.height || 500),
            });
        };

        updateDimensions();

        const observer = new ResizeObserver(updateDimensions);
        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (selected) {
                const currentTime = new Date().toLocaleTimeString("fr-FR", {
                    timeZone: selected.timezone,
                });

                setTime(currentTime);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [selected]);

    const handleGlobeReady = (): void => {
        if (!globeRef.current) {
            return;
        }

        const controls = globeRef.current.controls();

        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.12;
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;

        globeRef.current.pointOfView(
            {
                lat: 20,
                lng: 20,
                altitude: 2.2,
            },
            0,
        );
    };

    const setAutoRotate = (enabled: boolean): void => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = enabled;
        }
    };

    const selectLocation = (location: Location): void => {
        setSelected(location);
        setAutoRotate(false);

        if (globeRef.current) {
            globeRef.current.pointOfView(
                {
                    lat: location.lat,
                    lng: location.lng,
                    altitude: 1.45,
                },
                900,
            );
        }
    };

    const createMarker = (location: Location): HTMLButtonElement => {
        const marker = document.createElement("button");

        marker.type = "button";
        marker.className = "globe-marker";
        marker.title = location.city;
        marker.setAttribute("aria-label", `Voir ${location.city}`);

        marker.innerHTML = `<span></span><strong>${location.city}</strong>`;

        marker.addEventListener("click", (event) => {
            event.stopPropagation();
            selectLocation(location);
        });

        marker.addEventListener("mouseenter", () => setAutoRotate(false));

        marker.addEventListener("mouseleave", () => setAutoRotate(true));

        marker.addEventListener("focus", () => setAutoRotate(false));

        marker.addEventListener("blur", () => setAutoRotate(true));

        return marker;
    };

    return (
        <div className="globe-container" ref={containerRef}>
            {Globe && dimensions.width > 0 ? (
                <Globe
                    ref={globeRef}
                    width={dimensions.width}
                    height={dimensions.height}
                    globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                    // backgroundColor="#222424"
                    backgroundImage="linear-gradient(115deg, #2a2d2f 0%, #242729 15%, #1f2224 35%, #1b1e20 55%, #15181a 75%, #0f1215 100%)"
                    onGlobeReady={handleGlobeReady}
                    pointsData={typedLocations}
                    pointLat="lat"
                    pointLng="lng"
                    pointColor={() => "#00ffff"}
                    pointRadius={(point: Location) =>
                        point.id === selected?.id ? 1 : 0.7
                    }
                    pointAltitude={(point: Location) =>
                        point.id === selected?.id ? 0.04 : 0.02
                    }
                    pointResolution={18}
                    htmlElementsData={typedLocations}
                    htmlLat="lat"
                    htmlLng="lng"
                    htmlAltitude={0.05}
                    htmlElement={createMarker}
                    arcsData={locationArcs}
                    arcColor={() => ["#00ffff", "#ffffff"]}
                    arcDashLength={0.5}
                    arcDashGap={0.2}
                    arcDashAnimateTime={2000}
                    onPointHover={(point: Location | null) => setAutoRotate(!point)}
                    onPointClick={selectLocation}
                />
            ) : (
                <div className="globe-loading">Chargement du globe...</div>
            )}

            {selected && (
                <div className="card">
                    <div className="card-header">
                        <h2>{selected.city}</h2>

                        <div className="time">{time}</div>
                    </div>

                    <p className="country">{selected.country}</p>

                    <div className="badge">{selected.label}</div>

                    <div className="agent">
                        <span>AGENT LOCAL</span>
                        <strong>{selected.agent}</strong>
                        <p>{selected.phone}</p>
                    </div>
                </div>
            )}
        </div>
    );
}