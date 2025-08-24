import L from 'leaflet';
import marker from "../marker.svg"

const iconPerson = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    iconAnchor: [9, 26],
    popupAnchor: [0, -26],
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: new L.Point(18, 26),
    className: 'leaflet-div-icon'
});

export { iconPerson };