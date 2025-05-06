import {useRef, useEffect} from 'react';
import { TOffer } from '../../types/toffer.ts';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useMap} from './useMap.ts';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const.ts';

type MapProps = {
  className?: string;
  offers: TOffer[];
  activeOffer?: TOffer | null;
}

function Map({className, offers, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = offers.length > 0 ? offers[0].city : null; // берем первую точку как "город"
  const map = useMap(mapRef, city);

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

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({//1м параметром принимает объект с координатами точки, куда нужно поставить маркер
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: (offer.id === activeOffer?.id)
              ? currentCustomIcon
              : defaultCustomIcon,// 2й параметр — опциональный, для указания вида маркера (пропустим - маркер будет стандарной иконкой).
          })
          .addTo(map);//указывает на какую карту добавить маркер
      });
    }
  }, [activeOffer, map, offers]);

  return(
    <section
      className={`map ${className}`}
      ref={mapRef}
    >
    </section>
  );
}
export default Map;
