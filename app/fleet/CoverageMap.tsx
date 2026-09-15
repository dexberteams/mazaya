"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const cities = [
  { name: "Riyadh", lat: 24.7136, lng: 46.6753 },
  { name: "Jeddah", lat: 21.4858, lng: 39.1925 },
  { name: "Dammam", lat: 26.4207, lng: 50.0888 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Abu Dhabi", lat: 24.4539, lng: 54.3773 },
  { name: "Kuwait City", lat: 29.3759, lng: 47.9774 },
  { name: "Manama", lat: 26.2285, lng: 50.586 },
  { name: "Doha", lat: 25.2854, lng: 51.531 },
  { name: "Muscat", lat: 23.588, lng: 58.3829 },
  { name: "Tabuk", lat: 28.3838, lng: 36.555 },
  { name: "Medina", lat: 24.5247, lng: 39.5692 },
];

const routes: [number, number][][] = [
  [
    [24.7136, 46.6753],
    [21.4858, 39.1925],
  ],
  [
    [24.7136, 46.6753],
    [26.4207, 50.0888],
  ],
  [
    [24.7136, 46.6753],
    [25.2048, 55.2708],
  ],
  [
    [24.7136, 46.6753],
    [29.3759, 47.9774],
  ],
  [
    [24.7136, 46.6753],
    [26.2285, 50.586],
  ],
  [
    [24.7136, 46.6753],
    [25.2854, 51.531],
  ],
  [
    [24.7136, 46.6753],
    [23.588, 58.3829],
  ],
  [
    [24.7136, 46.6753],
    [28.3838, 36.555],
  ],
  [
    [24.7136, 46.6753],
    [24.5247, 39.5692],
  ],
  [
    [26.4207, 50.0888],
    [25.2048, 55.2708],
  ],
  [
    [26.4207, 50.0888],
    [29.3759, 47.9774],
  ],
  [
    [25.2048, 55.2708],
    [24.4539, 54.3773],
  ],
  [
    [25.2048, 55.2708],
    [23.588, 58.3829],
  ],
  [
    [29.3759, 47.9774],
    [26.2285, 50.586],
  ],
  [
    [26.2285, 50.586],
    [25.2854, 51.531],
  ],
  [
    [21.4858, 39.1925],
    [24.5247, 39.5692],
  ],
];

// Fix Leaflet default icon
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const markerIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
      <defs>
        <filter id="g" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="12" cy="12" r="6" fill="#F5A623" filter="url(#g)" opacity="0.95"/>
      <circle cx="12" cy="12" r="3.2" fill="#FFD700"/>
    </svg>
  `)}`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

const planeIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#F5A623"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`)}`,
  iconSize: [26, 26],
  iconAnchor: [13, 13],
});

const truckIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#F5A623"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`)}`,
  iconSize: [26, 26],
  iconAnchor: [13, 13],
});

const shipIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#F5A623"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/></svg>`)}`,
  iconSize: [26, 26],
  iconAnchor: [13, 13],
});

export default function CoverageMap() {
  const [mapReady, setMapReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait until the container is actually in the DOM and has size
    if (!containerRef.current) return;

    const checkSize = () => {
      if (containerRef.current && containerRef.current.offsetHeight > 0) {
        setMapReady(true);
      }
    };

    // small delay + check
    const timer = setTimeout(checkSize, 100);

    // also listen to resize just in case
    window.addEventListener("resize", checkSize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[400px] w-full relative bg-[#1a1208]">
      {!mapReady ? (
        <div className="absolute inset-0 flex items-center justify-center text-[#F5A623]">
          Loading map...
        </div>
      ) : (
        <MapContainer
          key="coverage-map" // important for React Strict Mode
          center={[24.6, 48]}
          zoom={5}
          scrollWheelZoom={false}
          zoomControl={false}
          attributionControl={false}
          style={{ height: "100%", width: "100%", background: "#1a1208" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap"
          />

          {routes.map((pos, i) => (
            <Polyline
              key={i}
              positions={pos}
              pathOptions={{ color: "#F5A623", weight: 2, opacity: 0.75 }}
            />
          ))}

          {cities.map((c) => (
            <Marker key={c.name} position={[c.lat, c.lng]} icon={markerIcon}>
              <Popup>
                <b>{c.name}</b>
              </Popup>
            </Marker>
          ))}

          <Marker position={[23.6, 42.8]} icon={planeIcon} />
          <Marker position={[25.9, 48.8]} icon={truckIcon} />
          <Marker position={[24.1, 52.2]} icon={shipIcon} />
        </MapContainer>
      )}

      <style jsx global>{`
        .leaflet-container {
          background: #1a1208 !important;
          height: 100% !important;
          width: 100% !important;
        }
        .leaflet-tile {
          filter: brightness(0.55) invert(1) contrast(3) hue-rotate(200deg)
            saturate(0.25) brightness(0.7);
        }
        .leaflet-popup-content-wrapper {
          background: #1a1a1a !important;
          color: #fff !important;
          border-radius: 8px;
          border: 1px solid rgba(245, 166, 35, 0.3);
        }
        .leaflet-popup-tip {
          background: #1a1a1a !important;
        }
        .leaflet-control-attribution {
          display: none !important;
        }
        .leaflet-interactive {
          filter: drop-shadow(0 0 3px #f5a623);
        }
      `}</style>
    </div>
  );
}
