import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RMapbox, { Marker } from 'react-mapbox-gl';
import { Tooltip } from '@material-ui/core';
import MarkerIcon from '@material-ui/icons/PersonPinCircle';

import { setActiveMapCandidate } from '../../Redux/Actions/Map';


const Map = ({ list, interactive }) => {
  const dispatch = useDispatch()
  const { activeCandidate: active, mapOpts: opts } = useSelector(state => state.map);

  const RMap = useMemo(() => RMapbox({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    attributionControl: false,
    interactive
  }), [interactive]);

  const handleClickMarker = (active) => () => dispatch(setActiveMapCandidate(active));

  return (
    <RMap
      style={`mapbox://styles/mapbox/streets-v9`}
      center={active.coords.length === 0
        ? opts.coords
        : active.coords
      }
      containerStyle={{ width: '100%', height: '100%' }}
      zoom={active.zoom.length === 0
        ? opts.zoom
        : active.zoom
      }
    >
      {
        list.length > 0
        &&
        list.map(cand => (
          <Marker
            key={cand._id}
            coordinates={[cand.location.coords.lng, cand.location.coords.lat]}
            anchor='bottom'
            onClick={handleClickMarker({
              id: cand._id,
              coords: [cand.location.coords.lng, cand.location.coords.lat],
              zoom: [14]
            })}
          >
            <Tooltip title={cand.name} placement='top'>
              <a href={`#${cand.cellphone}`} onClick={(e) => e.currentTarget.scrollIntoView({
                behavior: 'smooth'
              })}>
                <MarkerIcon style={{ color: 'red', fontSize: '2.5rem', cursor: 'pointer' }} />
              </a>
            </Tooltip>
          </Marker>
        ))
      }
    </RMap>
  )
}

export default Map
