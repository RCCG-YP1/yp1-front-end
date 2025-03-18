import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";

Quill.register("modules/imageResize", ImageResize);

const modules = {
	toolbar: [
		[{ header: "1" }, { header: "2" }, { font: [] }],
		[{ size: [] }],
		["bold", "italic", "underline", "strike", "blockquote"],
		[{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
		["link", "image", "video"],
		["clean"],
	],
	clipboard: {
		matchVisual: false,
	},
	imageResize: {
		parchment: Quill.import("parchment"),
		modules: ["Resize", "DisplaySize"],
	},
};

const formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
	"video",
];

const QuillEditor = ({ placeholder, onChange, value }) => {
	const [editorHtml, setEditorHtml] = useState(value || "");

	const handleChange = html => {
		setEditorHtml(html);
		onChange?.(html);
	};

	return (
		<ReactQuill
			theme="snow"
			onChange={handleChange}
			value={editorHtml}
			modules={modules}
			formats={formats}
			bounds={"#root"}
			placeholder={placeholder}
		/>
	);
};

export default QuillEditor;
