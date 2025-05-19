import SaveIcon from "@/assets/icons/save-icon";
import Button from "@/components/button";
import ControlledInput from "@/components/forms/controlled-input";
import ControlledSelect from "@/components/forms/controlled-select";
import ControlledFileInput from "@/components/forms/controlled-file-input";
import Modal from "@/components/modal";
import { useAddPastorMutation } from "@/services/admin.api";
import { Loader2 } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

const media_fields = [
	"YouTube",
	"Instagram",
	"Twitter",
	"Facebook",
	"Spotify",
	"X",
];
export default function AddPastorModal({ isModalOpen, setIsModalOpen }) {
	const methods = useForm();
	const [addPastor, { isLoading }] = useAddPastorMutation();

	const onSubmit = async body => {
		try {
			const formData = new FormData();

			if (body.profile_picture?.[0]) {
				formData.append("profile_picture", body.profile_picture[0]);
			}
			Object.entries(body).forEach(([key, value]) => {
				if (key === "profile_picture") return;
				if (value) {
					formData.append(key, value);
				}
			});
			const res = await addPastor(formData);
			if (res?.data?.success) {
				methods.reset();
				toast.success("Pastor added successfully");
				setIsModalOpen(false);
			}
		} catch (error) {
			toast.error(error.message || "Failed to add pastor");
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

						<div className="flex items-center gap-4">
							<ControlledFileInput name="profile_picture" size="md" />
							<ControlledInput
								theme="light"
								name="name"
								label="Pastor Name"
								placeholder="Name"
								className="flex-1"
							/>
						</div>

						<div className="grid xl:grid-cols-2 gap-4">
							<ControlledSelect
								options={[{ label: "Hello", value: "20" }]}
								theme="light"
								name={"church_id"}
								label="Church"
								placeholder="Select"
							/>
							<ControlledSelect
								options={[{ label: "See", value: "1" }]}
								theme="light"
								name={"pastor_level"}
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
									required={false}
									theme="light"
									name={el.toLowerCase() + "_link"}
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
						<Button disabled={isLoading} type="submit" color="secondary">
							{isLoading ? <Loader2 className="animate-spin" /> : <SaveIcon />}Save
							Pastor
						</Button>
					</div>
				</form>
			</FormProvider>
		</Modal>
	);
}
