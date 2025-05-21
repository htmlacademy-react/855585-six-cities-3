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
          'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          {
            attribution:  'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
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
