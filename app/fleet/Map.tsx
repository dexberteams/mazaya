"use client";

import L from "leaflet";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";

const locations = [
  {
    name: "Riyadh",
    position: [24.7136, 46.6753],
  },
  {
    name: "Jeddah",
    position: [21.5433, 39.1728],
  },
  {
    name: "Dammam",
    position: [26.4207, 50.0888],
  },
  {
    name: "Dubai",
    position: [25.2048, 55.2708],
  },
  {
    name: "Doha",
    position: [25.2854, 51.531],
  },
  {
    name: "Kuwait",
    position: [29.3759, 47.9774],
  },
  {
    name: "Muscat",
    position: [23.588, 58.3829],
  },
] satisfies {
  name: string;
  position: [number, number];
}[];

const routes = [
  [
    [21.5433, 39.1728],
    [23.2, 42.5],
    [24.7136, 46.6753],
  ],
  [
    [24.7136, 46.6753],
    [25.5, 48.5],
    [26.4207, 50.0888],
  ],
  [
    [24.7136, 46.6753],
    [25.1, 51],
    [25.2048, 55.2708],
  ],
  [
    [29.3759, 47.9774],
    [27.2, 47.2],
    [24.7136, 46.6753],
  ],
  [
    [25.2854, 51.531],
    [25.3, 53.2],
    [25.2048, 55.2708],
  ],
] satisfies [number, number][][];

const goldIcon = L.divIcon({
  className: "gold-marker",
  html: `
    <div class="gold-marker-wrapper">
      <div class="gold-marker-glow"></div>
      <div class="gold-marker-dot"></div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

export default function FleetMap() {
  return (
    <MapContainer
      center={[25.3, 48]}
      zoom={5}
      minZoom={4}
      maxZoom={7}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      doubleClickZoom={false}
      touchZoom={false}
      attributionControl={false}
      className="h-full w-full"
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

      {routes.map((route, index) => (
        <Polyline
          key={index}
          positions={route}
          pathOptions={{
            color: "#D6B85A",
            weight: 1.5,
            opacity: 0.8,
            dashArray: "4 6",
          }}
        />
      ))}

      {locations.map((location) => (
        <Marker
          key={location.name}
          position={location.position}
          icon={goldIcon}
        />
      ))}
    </MapContainer>
  );
}
