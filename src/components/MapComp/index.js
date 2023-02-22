import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { FaMapPin } from "react-icons/fa";
import { useLocationContext } from "../../Context/LocatorContext";
import { Alert, AlertTitle } from "@mui/material";
import { toast } from 'react-toastify'

const MapComp = ({ setMap }) => {
  const [zoom, setZoom] = useState(3)
  const { location, assignLocation, assignCurrentLocation } = useLocationContext();

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const getCityAndState = () => {
    fetch(`${process.env.REACT_APP_URL}/getCityByCoordinates`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            latitude: location.lat,
            longitude: location.lng,
          }
        })
      })
      .then((response) => response.json())
      .then((data) => {
        assignLocation({
          latitude: location.lat,
          longitude: location.lng,
          city: data.city,
          state: data.state,
          country: 'India'
        });

        assignCurrentLocation({
          latitude: location.lat,
          longitude: location.lat,
          city: data.city,
          state: data.state,
          country: 'India'
        })
        setMap(false)
      })
      .catch(() => {
        toast.error('Sorry, Something Went Wrong', 2000)
        assignLocation({
          latitude: 23.2454418,
          longitude: 77.4587127,
          city: 'Bhopal',
          state: 'Madhya Pradesh',
          country: 'India'
        });

        assignCurrentLocation({
          latitude: 23.2454418,
          longitude: 77.4587127,
          city: 'Bhopal',
          state: 'Madhya Pradesh',
          country: 'India'
        })

        setMap(false)
      })
  }

  const [defaultC, setDefaultC] = useState({
    lat: 23.2454418,
    lng: 77.4587127,
  })

  useEffect(() => {
    if (location.lat && location.lng) {
      setDefaultC({
        lat: location.lat,
        lng: location.lng
      })
      setZoom(15)
    }
  }, [location])

  const Marker = ({ text }) => (
    <div className="pin">
      <FaMapPin size={30} />
      <p className="pin-text">{text}</p>
    </div>
  );

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDDOhWEH6qIYmon2vqRrbsOmSdS4w-LoAQ" }}
          center={defaultC}
          zoom={zoom}
          onClick={({ lat, lng }) => {
            assignLocation({
              latitude: lat,
              longitude: lng
            })

            assignCurrentLocation({
              latitude: lat,
              longitude: lng
            })

          }}
        // {...(typeof (locationClicked)) && {onClick: locationClicked}}
        >
          <Marker
            lat={location.lat}
            lng={location.lng}
          // text={pointerText}
          />
        </GoogleMapReact>
        <Alert severity="info" sx={{
          position: 'absolute',
          top: '10%',
          width: '20vw'
        }}>
          <AlertTitle>Why Location</AlertTitle>
          Location is very Important — <strong>As It is goint to improve search results and helps you to get accurate information</strong>
        </Alert>
        <div className="d-flex gap-2 w-100 justify-content-center continueButton">
          <div className="btn btn-info btn-lg text-white w-50" onClick={getCityAndState} >
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComp;
