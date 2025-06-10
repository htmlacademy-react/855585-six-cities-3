import { useEffect, useState, useRef } from 'react';
import leaflet from 'leaflet';
import { City } from '../types/offer';

function useMap(mapRef: React.RefObject<HTMLElement>, city: City | null) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false); // защита от повторной инициализации карты

  useEffect(() => {
    if (mapRef.current !== null && city !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  // Эффект для обновления центра карты при смене города (если карта уже создана)
  useEffect(() => {
    if (map && city) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [map, city]);

  return map;
}

export { useMap };
