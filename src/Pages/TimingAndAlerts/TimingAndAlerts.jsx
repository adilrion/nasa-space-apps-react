import React from "react";
import { MapContainer, Polygon, ScaleControl, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { statesData } from "./data";

var center = [39.85469173654045, -101.29976334521231];

export const TimingAndAlerts = () => {


  return (
    <div className="max-w-screen-xl mx-auto">

      <header className="pt-10 py-6">
        <h1 className="underline decoration-wavy underline-offset-4">Timing And Alerts</h1>
      </header>

      <section className="z-50 relative">

        <MapContainer
          center={[39.85469173654045, -101.29976334521231]}
          zoom={13}
          style={{ width: '100%', height: '100%', zIndex: 100 }}
        >

          <TileLayer
            
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=xB4gUAy4lpRWHG1IW2t4"
          />

          {statesData?.features?.map((data, index) => {
            // Ensure that the transformation matches the coordinate format of your data
            const coordinates = data.geometry.coordinates[0]?.map((item) => [item[1], item[0]]) || [];

            return (
              <Polygon
                key={index}
                pathOptions={{
                  fillColor: '#FD8D36',
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  dashArray: 3,
                  color: 'white',
                }}
                positions={coordinates}
              />
            );
          })}

          
          <ScaleControl />
        </MapContainer>

      </section>

    </div>
  );
};
