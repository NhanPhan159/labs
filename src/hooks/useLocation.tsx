import { useEffect, useState } from "react";

const useLocation = () => {
  const [latLng, setLatLng] = useState<{ lat: number; lng: number } | null>();
  const [error, setError] = useState<string | null>(null);
  const handleError = () => {
    setError("No GPS available");
  };
  useEffect(() => {
    let watchID = 0;
    if ("geolocation" in navigator) {
      watchID = navigator.geolocation.watchPosition((position) => {
        setLatLng({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }, handleError);
    } else {
      setError("Your browser does not support GPS");
    }
    return () => navigator.geolocation.clearWatch(watchID);
  }, []);
  return { latLng, error };
};
export default useLocation;
