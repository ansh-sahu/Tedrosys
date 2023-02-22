import "./App.css";
import { useState, useEffect } from "react";
import { useLocationContext } from "./Context/LocatorContext";
import { toast } from "react-toastify";
import MapComp from "./components/MapComp";
import "react-toastify/dist/ReactToastify.css";
import { positions } from "@mui/system";
import Model from "./components/Model";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Routes from "./Routes";
import { useUserContext } from "./Context/UserContext";

function App({ children }) {
  const { assignLocation, assignCurrentLocation } = useLocationContext();
  const [map, setMap] = useState(false)
  const { user, handleLogin } = useUserContext()

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        Showposition,
        Showerror,
        options
      );
    } else {
      fetch("https://ipapi.co/json")
        .then((response) => response.json())
        .then((data) => {
          assignLocation({
            latitude: data.latitude,
            longitude: data.longitude,
            city: data.city,
            state: data.region,
            country: data.country_name
          });

          assignCurrentLocation({
            latitude: data.latitude,
            longitude: data.longitude,
            city: data.city,
            state: data.region,
            country: data.country_name
          })
        })
        .catch(() => {
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
        })
      toast.error("Geoloaction is not supported by this browser.");
    }
  };

  const Showposition = (position) => {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        console.log(result)
      } else if (result.state === 'prompt') {
        console.log(result)
      }
      // Don't do anything if the permission was denied.
    });

    fetch(`${process.env.REACT_APP_URL}/getCityByCoordinates`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        })
      })
      .then((response) => response.json())
      .then((data) => {
        assignLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          city: data.city,
          state: data.region,
          country: 'India'
        });

        assignCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          city: data.city,
          state: data.region,
          country: 'India'
        })
      })
      .catch(() => {
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
      })
  };

  const Showerror = (error) => {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        console.log(result)
      } else if (result.state === 'prompt') {
        console.log(result)
      }
      console.log(result)
      // Don't do anything if the permission was denied.
    });

    switch (error.code) {
      case error.PERMISSION_DENIED:
        // alert("please allow the location");
        toast.error("Please Allow location to get accurate results, continuing with approximate location", 2000)
        break;
      case error.POSITION_UNAVAILABLE:
        toast.error("Location information is unavailable, continuing with approximate location", 2000);
        break;
      case error.TIMEOUT:
        toast.error("The request to get user location time out, continuing with approximate location", 2000);
        break;
      case error.UNKNOWN_ERROR:
        toast.error("An unknown error occurred, continuing with approximate location", 2000);
        break;
      default:
        toast.error("An unknown error occurred,continuing with approximate location", 2000);
    }

    fetch("https://ipapi.co/json")
      .then((response) => response.json())
      .then((data) => {
        assignLocation({
          latitude: data.latitude,
          longitude: data.longitude,
        });
      })
      .catch(() => {
        assignLocation({
          latitude: 23.2454418,
          longitude: 77.4587127,
        });
      })
  };

  useEffect(() => {
    if (!localStorage.getItem('Location')) {
      setMap(true)
      getUserLocation();
    } else {
      getUserLocation();
    }
  }, []);

  useEffect(() => {
    if (!user && localStorage.getItem('_id') && localStorage.getItem('token')) {
      fetch(`${process.env.REACT_APP_URL}/user/${localStorage.getItem('_id')}`)
        .then(async response => {
          if (response.ok) return response.json()
          else throw await response.json()
        })
        .then(result => handleLogin({ user: result, _id: result._id }))
        .catch(err => toast.error(err.error || err.err || err, 2000))
    }
  }, [user])

  return <>
    {map ? <MapComp setMap={setMap} /> : children}
  </>
}
//ternary operator?
export default App;
