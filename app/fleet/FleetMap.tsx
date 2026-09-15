"use client";

import {
  CircleMarker,
  MapContainer,
  Polyline,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

type Location = {
  name: string;
  position: [number, number];
};

const locations: Location[] = [
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
    name: "Kuwait City",
    position: [29.3759, 47.9774],
  },
  {
    name: "Doha",
    position: [25.2854, 51.531],
  },
  {
    name: "Dubai",
    position: [25.2048, 55.2708],
  },
  {
    name: "Muscat",
    position: [23.588, 58.3829],
  },
];

const routes: [number, number][][] = [
  [
    [24.7136, 46.6753],
    [21.5433, 39.1728],
  ],
  [
    [24.7136, 46.6753],
    [26.4207, 50.0888],
  ],
  [
    [24.7136, 46.6753],
    [29.3759, 47.9774],
  ],
  [
    [24.7136, 46.6753],
    [25.2854, 51.531],
  ],
  [
    [24.7136, 46.6753],
    [25.2048, 55.2708],
  ],
  [
    [25.2048, 55.2708],
    [23.588, 58.3829],
  ],
];

const MapZoom = () => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  }, [map]);

  return null;
};

const PlaneIcon = L.divIcon({
  className: "custom-plane",
  html: `
    <div class="plane-marker">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 16L13 13.5V5.5C13 4.67 12.33 4 11.5 4C10.67 4 10 4.67 10 5.5V13.5L3 16V18L10 16.5V20L8 21V22L11.5 21L15 22V21L13 20V16.5L21 18V16Z"
          fill="#FFBB00"
        />
      </svg>
    </div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const FleetMap = () => {
  return (
    <div className="fleet-map relative h-full w-full overflow-hidden">
      <MapContainer
        center={[24.2, 48.5]}
        zoom={4.5}
        minZoom={3.5}
        maxZoom={7}
        scrollWheelZoom={false}
        dragging={true}
        doubleClickZoom={false}
        zoomControl={false}
        attributionControl={false}
        className="!h-full !w-full"
      >
        {/* Actual Map */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap &copy; CARTO"
          subdomains={["a", "b", "c", "d"]}
        />

        <MapZoom />

        {/* Routes */}
        {routes.map((route, index) => (
          <Polyline
            key={index}
            positions={route}
            pathOptions={{
              color: "#FFBB00",
              weight: 1.3,
              opacity: 0.65,
              dashArray: "4 7",
              lineCap: "round",
            }}
          />
        ))}

        {/* Location points */}
        {locations.map((location) => (
          <CircleMarker
            key={location.name}
            center={location.position}
            radius={4}
            pathOptions={{
              color: "#FFBB00",
              fillColor: "#FFBB00",
              fillOpacity: 1,
              weight: 1,
            }}
          />
        ))}

        {/* Plane */}
        <CircleMarker
          center={[25.8, 48.7]}
          radius={0}
          pathOptions={{
            opacity: 0,
          }}
        />

        <PlaneMarker />
      </MapContainer>
    </div>
  );
};

const PlaneMarker = () => {
  const map = useMap();

  useEffect(() => {
    const marker = L.marker([25.8, 48.7], {
      icon: PlaneIcon,
      interactive: false,
    }).addTo(map);

    return () => {
      marker.remove();
    };
  }, [map]);

  return null;
};

export default FleetMap;
