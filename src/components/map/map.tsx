import { useRef, useEffect } from 'react';
import { TOffer } from '../../types/toffer.ts';
import 'leaflet/dist/leaflet.css';
import { useMap } from './useMap.ts';
import leaflet, { LayerGroup } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const.ts';

type MapProps = {
  className?: string;
  offers: TOffer[];
  activeOffer?: TOffer | null;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ className, offers, activeOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = offers.length > 0 ? offers[0].city : null;
  const map = useMap(mapRef, city);
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  // Добавляем слой маркеров в карту (один раз)
  useEffect(() => {
    if (map) {
      markerLayer.current.addTo(map);
    }
  }, [map]);

  // Обновляем центр карты при смене города
  useEffect(() => {
    if (map && city) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [map, city]);

  // Обновляем маркеры
  useEffect(() => {
    if (map) {
      markerLayer.current.clearLayers();

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === activeOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(markerLayer.current);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section
      className={`map ${className ?? ''}`}
      ref={mapRef}
    />
  );
}

export default Map;
