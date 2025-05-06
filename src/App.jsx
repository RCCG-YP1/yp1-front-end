import { Toaster } from "sonner";
import AllRoutes from "./Routes";

function App() {
	return (
		<>
			<Toaster position="top-right" richColors />
			<AllRoutes />
		</>
	);
}

export default App;
