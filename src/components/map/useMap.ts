import { useEffect, useState, useRef } from 'react';
import leaflet from 'leaflet';
import { City } from '../../types/toffer';

function useMap(mapRef: React.RefObject<HTMLElement>, city: City | null) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);//защита от повторной инициалзации карты

  //Создание карты
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
          'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}{r}.png?apikey=c9c9438681aa453782e223338dae957c',
          {
            attribution:  '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export { useMap };
