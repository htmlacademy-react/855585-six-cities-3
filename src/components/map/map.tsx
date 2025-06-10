import { useRef, useEffect } from 'react';
import { FullOfferType, ShortOfferType } from '../../types/offer.ts';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/use-map.ts';
import leaflet, { LayerGroup } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const.ts';

type MapProps = {
  className?: string;
  offers: ShortOfferType[];
  activeOffer?: ShortOfferType | FullOfferType | null;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 38],
  iconAnchor: [13, 38],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 38],
  iconAnchor: [13, 38],
});

function Map({ className, offers, activeOffer }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const city = offers.length > 0 ? offers[0].city : null;
  const map = useMap(mapRef, city);
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (!map) {
      return;
    }

    if (!map.hasLayer(markerLayer.current)) {
      markerLayer.current.addTo(map);
    }

    markerLayer.current.clearLayers();

    offers.forEach((offer) => {
      const isActive = offer.id === activeOffer?.id;
      const icon = isActive ? currentCustomIcon : defaultCustomIcon;

      leaflet
        .marker(
          {
            lat: Number(offer.location.latitude.toFixed(6)),
            lng: Number(offer.location.longitude.toFixed(6)),
          },
          { icon }
        )
        .addTo(markerLayer.current);
    });
  }, [map, offers, activeOffer?.id]);

  return (
    <section
      className={`map ${className ?? ''}`}
      ref={mapRef}
    />
  );
}

export default Map;
