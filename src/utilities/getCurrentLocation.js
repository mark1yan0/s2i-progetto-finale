function getCurrentLocation(setLocation) {
  navigator.geolocation.getCurrentPosition(location => {
    if (location) {
      const lat = location.coords.latitude;
      const long = location.coords.longitude;
      const userLocation = `${lat}, ${long}`;
      setLocation(userLocation);
    }
  });
}

export default getCurrentLocation;
