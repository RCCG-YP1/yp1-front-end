import SendIcon from "@/assets/icons/send-icon";
import Button from "@/components/button";
import Input from "@/components/forms/input";
import FileInput from "@/components/forms/file-input";
import Modal from "@/components/modal";
import { useState } from "react";

import QuillEditor from "@/components/QuillEditor";
import { toast } from "sonner";
import Avatar from "@/components/avatar";
import { useAddInformationMutation } from "@/services/admin.api";
import { Loader2 } from "lucide-react";
import { handleApiError } from "@/utils/error-handler";

export default function AddUpdateModal({ isModalOpen, setIsModalOpen }) {
	const [title, setTitle] = useState("");
	const [image, setImage] = useState();
	const [editorState, setEditorState] = useState("");

	const [addInformation, { isLoading }] = useAddInformationMutation();
	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const payload = {
				title: title.trim(),
				body: editorState,
				image,
			};
			const formData = new FormData();
			Object.entries(payload).forEach(([key, value]) => {
				if (value) {
					formData.append(key, value);
				}
			});
			// Construct payload with title and content
			const res = await addInformation(formData).unwrap();
			toast.success(res?.message);
			setIsModalOpen(false);
			setImage(undefined);
			setTitle("");
			setEditorState(null);
		} catch (err) {
			handleApiError(err);
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
				<div className="flex flex-wrap border rounded p-2 items-center gap-4">
					<FileInput
						className="w-auto"
						theme="light"
						btnTitle={image ? "Change Image" : "Choose Image"}
						required={false}
						onChange={e => setImage(e.target.files[0])}
					/>
					{image && (
						<div className="flex gap-2 items-center">
							<Avatar variant="rounded" src={URL.createObjectURL(image)} />
							<p>{image?.name}</p>
						</div>
					)}
				</div>
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
						disabled={isLoading}
					>
						Cancel
					</Button>
					<Button type="submit" color="secondary" disabled={isLoading}>
						{isLoading ? <Loader2 className="animate-spin" /> : <SendIcon />} Send
						post
					</Button>
				</div>
			</form>
		</Modal>
	);
}
