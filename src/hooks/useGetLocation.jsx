import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setError, setLoading } from "../store/slices/locationSlice";

const useUserLocation = () => {
	const dispatch = useDispatch();
	const { city, error, isLoading } = useSelector(state => state.location);

	const fetchCityFromCoordinates = useCallback(
		async (latitude, longitude) => {
			try {
				const apiKey = import.meta.env.VITE_OPENCAGE_API_KEY;
				const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

				const response = await fetch(geocodeUrl);
				const data = await response.json();
				if (data.results && data.results.length > 0) {
					const city =
						data.results[0].components.county || data.results[0].components.state;
					dispatch(setCity(city || "City not found"));
				} else {
					dispatch(setCity("City not found"));
				}
			} catch (error) {
				dispatch(setError("Error fetching city: " + error.message));
			}
		},
		[dispatch]
	);

	const getLocation = useCallback(() => {
		dispatch(setLoading());

		if (!navigator.geolocation) {
			dispatch(setError("Geolocation is not supported by this browser."));
			return;
		}

		navigator.geolocation.getCurrentPosition(
			position => {
				const { latitude, longitude } = position.coords;
				fetchCityFromCoordinates(latitude, longitude);
			},
			error => {
				dispatch(setError(`Error getting location: ${error.message}`));
			}
		);
	}, [dispatch, fetchCityFromCoordinates]);

	useEffect(() => {
		getLocation();
	}, [getLocation]);

	return { city, error, isLoading };
};

export default useUserLocation;
