import { useState, useEffect, useCallback } from "react";

const useUserLocation = () => {
	const [city, setCity] = useState(null); //<string | null>
	const [error, setError] = useState(null); //<string | null>

	const handlePositionSuccess = useCallback(position => {
		//position: GeolocationPosition
		const { latitude, longitude } = position.coords;
		fetchCityFromCoordinates(latitude, longitude);
	}, []);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				handlePositionSuccess,
				handlePositionError
			);
		} else {
			setError("Geolocation is not supported by this browser.");
		}
	}, [handlePositionSuccess]);

	const handlePositionError = error => {
		// error: GeolocationPositionError
		setError(`Error getting location: ${error.message}`);
	};

	const fetchCityFromCoordinates = async (latitude, longitude) => {
		const apiKey = import.meta.env.VITE_OPENCAGE_API_KEY;
		const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

		try {
			const response = await fetch(geocodeUrl);
			const data = await response.json();
			const results = data.results;

			if (results.length > 0) {
				const city =
					results[0].components.road ||
					results[0].components.county ||
					results[0].components.state;
				setCity(city || "City not found");
			} else {
				setCity("City not found");
			}
		} catch (error) {
			setError("Error fetching city: " + error.message);
		}
	};

	return { city, error };
};

export default useUserLocation;
