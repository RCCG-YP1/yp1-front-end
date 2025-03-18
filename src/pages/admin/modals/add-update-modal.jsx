import SendIcon from "@/assets/icons/send-icon";
import Button from "@/components/button";
import Input from "@/components/forms/input";
import Modal from "@/components/modal";
import { useState } from "react";

import QuillEditor from "@/components/QuillEditor";

export default function AddUpdateModal({ isModalOpen, setIsModalOpen }) {
	const [title, setTitle] = useState("");
	const [editorState, setEditorState] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		try {
			const payload = {
				title: title.trim(),
				content: editorState, // This will be the serialized HTML from Lexical
			};

			console.log(payload);
			// Construct payload with title and content

			// setIsModalOpen(false);
			// setTitle("");
			// setEditorState(null);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Modal
			isOpen={isModalOpen}
			onClose={() => setIsModalOpen(false)}
			title="Add Update"
			theme="light"
			size="2xl"
		>
			<form onSubmit={handleSubmit} className="space-y-6">
				{error && <div className="text-red-500 text-sm">{error}</div>}

				<Input
					label="Subject"
					placeholder="Post title"
					theme="light"
					value={title}
					onChange={e => setTitle(e.target.value)}
					required
				/>
				<QuillEditor
					placeholder="Message body..."
					onChange={html => setEditorState(html)}
					value={editorState}
				/>

				<div className="flex gap-4 mt-4">
					<Button
						type="button"
						color="black"
						onClick={() => setIsModalOpen(false)}
						disabled={isSubmitting}
					>
						Cancel
					</Button>
					<Button type="submit" color="secondary" disabled={isSubmitting}>
						<SendIcon /> {isSubmitting ? "Sending..." : "Send post"}
					</Button>
				</div>
			</form>
		</Modal>
	);
}
