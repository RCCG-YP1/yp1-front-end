import {
	FacebookIcon,
	GlobeIcon,
	InstagramIcon,
	MapIcon,
	TwitterIcon,
	YoutubeIcon,
} from "@/assets/icons";
import Modal from "@/components/modal";
import SocialButton from "@/components/social-btn";

export default function ParishDetailsModal({ isModalOpen, setIsModalOpen }) {
	return (
		<Modal
			isOpen={isModalOpen}
			onClose={() => setIsModalOpen(false)}
			theme="light"
			size="xl"
		>
			<div className="md:pb-10 md:px-10">
				<img
					src="/images/parishes.png"
					alt=""
					className="w-full aspect-video rounded-xl max-h-[240px] object-cover"
				/>
				<p className="text-xl font-medium my-4">RCCG Joseph Palace</p>
				<div className="flex gap-4 flex-wrap">
					<div className="flex-1">
						<p className="title-sm mb-2">Level</p>
						<p>Provincial HQ</p>
					</div>
					<div className="flex-1">
						<p className="title-sm mb-2">Address</p>
						<p>30 Rafiu Babatunde, Apple Junction. Amuwo Odofin. Lagos</p>
					</div>
				</div>

				<div className="mt-4">
					<h3 className="title-sm mb-2">Leadership</h3>
					<div className="flex flex-wrap gap-6">
						{[].map((leader, index) => (
							<p key={index} className="">
								{leader.name} <br />{" "}
								<span className="text-[#4F4F4F] mt-2">{leader.role}</span>
							</p>
						))}
					</div>
				</div>

				{/* Social Media Buttons */}
				<div className="flex flex-wrap mt-10 gap-4 w-full">
					<SocialButton
						Label="Facebook"
						icon={<FacebookIcon />}
						onClick={() => window.open("https://facebook.com", "_blank")}
					/>
					<SocialButton
						Label="Instagram"
						icon={<InstagramIcon />}
						onClick={() => window.open("https://instagram.com", "_blank")}
					/>
					<SocialButton
						Label="Twitter"
						icon={<TwitterIcon />}
						onClick={() => window.open("https://twitter.com", "_blank")}
					/>
					<SocialButton
						Label="Youtube"
						icon={<YoutubeIcon />}
						onClick={() => window.open("https://youtube.com", "_blank")}
					/>
				</div>
				<div className="flex justify-center gap-4 mt-4 w-full">
					<SocialButton
						Label="Website"
						icon={<GlobeIcon />}
						onClick={() => window.open("https://example.com", "_blank")}
						className="w-1/2"
					/>
					<SocialButton
						Label="Map Direction"
						icon={<MapIcon />}
						onClick={() => window.open("https://maps.google.com", "_blank")}
						className="w-1/2"
					/>
				</div>
			</div>
		</Modal>
	);
}
