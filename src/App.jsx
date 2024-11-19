import { useState } from "react";
import "./App.css";
import Button from "@/components/button";
import Input from "@/components/forms/input";
import Search from "@/components/forms/search";
import Avatar from "@/components/avatar";
import Chip from "./components/chip";
import Modal from "./components/modal";

function App() {
	const [count, setCount] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleDelete = () => alert("Delete clicked!");
	const suggestions = ["Magodo phase 1", "Magodo phase 2", "Shangisha Magodo"];

	const handleSearch = query => {
		console.log("Search query:", query);
	};

	return (
		<div className="mx-auto">
			<Avatar size="lg" alt={"Hello"} /> <h1>Vite + React</h1>
			<div className="flex gap-4">
				<Button
					color="primary"
					variant="contained"
					className="mb-4"
					onClick={() => setCount(count => count + 1)}
				>
					count is {count}
				</Button>
				<Button
					color="white"
					variant="outlined"
					className="mb-4"
					onClick={() => setCount(count => count + 1)}
				>
					count is {count}
				</Button>
				<Button
					color="secondary"
					variant="text"
					className="mb-4"
					onClick={() => setCount(count => count + 1)}
				>
					count is {count}
				</Button>
			</div>
			<div className="flex gap-4 py-4">
				{/* Basic Chip */}
				<Chip label="Default Chip" />

				{/* Outlined Chip */}
				<Chip label="Outlined Chip" color="success" variant="outlined" />

				{/* Clickable Chip */}
				<Chip
					label="Clickable Chip"
					color="primary"
					onClick={() => setIsModalOpen(true)}
				/>

				{/* Chip with Delete */}
				<Chip label="Deletable Chip" color="warning" onDelete={handleDelete} />
			</div>
			<Input placeholder="Enter Text" />
			<Search onSearch={handleSearch} suggestions={suggestions} />
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title="Example Modal"
			>
				<p className="text-left">
					Youth Province 1 welcomes her new PICP on the 8th of September 2024. Pastor
					Oluwagbemileke Adeboye was welcomed to the Province in a power packed
					service featuring anointed men of God
				</p>
			</Modal>
		</div>
	);
}

export default App;
