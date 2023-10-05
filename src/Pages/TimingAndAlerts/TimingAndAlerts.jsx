import React from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { statesData } from "./data";



export const TimingAndAlerts = () => {

  const center = [40.63463151377654, -97.89969605983609]; // Set to a specific location

  return (
    <div className="max-w-screen-xl mx-auto">
      <header className="pt-10 py-6">
        <h1 className="underline decoration-wavy underline-offset-4">Timing And Alerts</h1>
      </header>
      <section className="">
        <MapContainer
          center={center}
          zoom={10}
          style={{ width: '100%', height: '500px'}}
        >
          <TileLayer
            url={`https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=AQ2fhr4c49NuzXXS86KJ`}
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          {statesData.features?.map((data, index) => {
            const coordinates = data.geometry.coordinates[0]?.map((item) => [item[1], item[0]]) || [];
            return (
              <Polygon
                pathOptions={{
                  fillColor: '#FD8D3C',
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  dashArray: 3,
                  color: 'white'
                }}
                positions={coordinates}
                eventHandlers={{
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      dashArray: "",
                      fillColor: "#BD0026",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      color: "white",
                    })
                  },
                  mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 2,
                      dashArray: "3",
                      color: 'white',
                      fillColor: '#FD8D3C'
                    });
                  },
                  click: (e) => {

                  }
                }}
              />
            );
          })}
        </MapContainer>
      </section>
    </div>
  );
};
