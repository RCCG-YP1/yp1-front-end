import { Toaster } from "sonner";
import AllRoutes from "./Routes";
import useUserLocation from "./hooks/useGetLocation";
import ConfirmationsProvider from "./providers/ConfirmationsProvider";

function App() {
	useUserLocation(); // This will initialize the location fetching

	return (
		<>
			<ConfirmationsProvider>
				<Toaster position="top-right" richColors />
				<AllRoutes />
			</ConfirmationsProvider>
		</>
	);
}

export default App;
