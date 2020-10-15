import L from 'leaflet';

import mapMakerImg from '../img/2.svg';

const mapIcon = L.icon({
    iconUrl: mapMakerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [165, 0]
  })

  export default mapIcon;