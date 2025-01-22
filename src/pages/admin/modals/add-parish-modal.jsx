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
export default function AddParishModal({ isModalOpen, setIsModalOpen }) {
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
			title="Add new parish"
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
							label="Parish Name"
							placeholder="Name"
						/>
						<div className="grid xl:grid-cols-2 gap-4">
							<ControlledSelect
								options={[{ label: "See", value: "see" }]}
								theme="light"
								name={"zone"}
								label="Zone"
								placeholder="Select"
							/>
							<ControlledSelect
								options={[{ label: "See", value: "see" }]}
								theme="light"
								name={"area"}
								label="Area"
								placeholder="Select"
							/>
						</div>
						<ControlledInput
							theme="light"
							name={"address"}
							label="Church address"
							placeholder="Address"
						/>
						<div className="grid xl:grid-cols-2 gap-4">
							<ControlledSelect
								options={[{ label: "See", value: "see" }]}
								theme="light"
								name={"state"}
								label="State"
								placeholder="Select"
							/>
							<ControlledSelect
								options={[{ label: "See", value: "see" }]}
								theme="light"
								name={"city"}
								label="City"
								placeholder="Select"
							/>
						</div>
						<ControlledInput
							theme="light"
							name={"map_link"}
							label="Map link"
							placeholder="https://maps.app.goo.gl/"
						/>
					</section>

					<section className="space-y-4">
						<p className="uppercase text-[10px] -mb-2 text-[#4F4F4F] font-semibold">
							leadership
						</p>
						<div className="grid xl:grid-cols-3 gap-4">
							<ControlledInput
								theme="light"
								name={"pastor"}
								label="Pastor-in-Charge"
								placeholder="Name"
							/>
							<ControlledInput
								theme="light"
								name={"assistant_pastor"}
								label="Assistant Pastor-in-Charge"
								placeholder="Name"
							/>
							<ControlledInput
								theme="light"
								name={"associate_pastor"}
								label="Associate Pastor"
								placeholder="Name"
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
						<ControlledInput
							theme="light"
							name={"website"}
							label="Website"
							placeholder="https://www.website.com"
						/>
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
