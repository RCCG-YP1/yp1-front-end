import SaveIcon from "@/assets/icons/save-icon";
import Button from "@/components/button";
import ControlledInput from "@/components/forms/controlled-input";
import ControlledSelect from "@/components/forms/controlled-select";
import Modal from "@/components/modal";
import { FormProvider, useForm } from "react-hook-form";

const media_fields = [
	"YouTube",
	"Instagram",
	"Twitter",
	"Facebook",
	"Spotify",
	"TikTok",
];
export default function AddPastorModal({ isModalOpen, setIsModalOpen }) {
	const methods = useForm();
	const onSubmit = async body => {
		try {
			console.log(body);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Modal
			isOpen={isModalOpen}
			onClose={() => setIsModalOpen(false)}
			title="Add Pastor"
			theme="light"
			size="2xl"
		>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8 p-4">
					<section className="space-y-4">
						<p className="uppercase text-[10px] -mb-2 text-[#4F4F4F] font-semibold">
							details
						</p>
						<ControlledInput
							theme="light"
							name={"name"}
							label="Pastor Name"
							placeholder="Name"
						/>

						<div className="grid xl:grid-cols-2 gap-4">
							<ControlledSelect
								options={[{ label: "See", value: "see" }]}
								theme="light"
								name={"church"}
								label="Church"
								placeholder="Select"
							/>
							<ControlledSelect
								options={[{ label: "See", value: "see" }]}
								theme="light"
								name={"level"}
								label="Level"
								placeholder="Select"
							/>
						</div>
					</section>

					<section className="space-y-4">
						<p className="uppercase text-[10px] -mb-2 text-[#4F4F4F] font-semibold">
							Social media
						</p>
						<div className="grid xl:grid-cols-3 gap-4">
							{media_fields.map(el => (
								<ControlledInput
									key={el}
									theme="light"
									name={el.toLowerCase()}
									label={el}
									placeholder={`https://${el.toLowerCase()}.com/`}
								/>
							))}
						</div>
					</section>

					<div className="flex gap-4">
						<Button type="reset" color="black">
							Cancel
						</Button>
						<Button type="submit" color="secondary">
							<SaveIcon /> Save Parish
						</Button>
					</div>
				</form>
			</FormProvider>
		</Modal>
	);
}
