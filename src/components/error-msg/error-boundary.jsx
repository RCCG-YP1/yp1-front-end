import { Component } from "react";
import ErrorMsg from ".";

class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};

	getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error };
	}

	componentDidCatch(error) {
		console.error("Uncaught error:", error.message);
	}

	render() {
		if (this.state.hasError) {
			return <ErrorMsg error={this.state.error?.message} />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
