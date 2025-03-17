import {
	FacebookIcon,
	InstagramIcon,
	TwitterIcon,
	YoutubeIcon,
} from "@/assets/icons";
import Avatar from "@/components/avatar";
import Modal from "@/components/modal";
import SocialButton from "@/components/social-btn";

const mock_pastor = {
	name: "Pst. Oluwagbemileke Adeboye",
	level: "Pastor-in-charge of Province",
	parish: "Joseph Palace",
	address: "30 Rafiu Babatunde, Apple Junction. Amuwo Odofin. Lagos",
	facebook_link: "",
	instagram_link: "",
	tiktok_link: "",
	youtube_link: "",
	x_link: "",
};

export default function PastorModal({
	isModalOpen,
	setIsModalOpen,
	pastor = mock_pastor,
}) {
	return (
		<Modal
			isOpen={isModalOpen}
			onClose={() => setIsModalOpen(false)}
			theme="light"
			size="xl"
		>
			<div className="px-4 pb-4 md:px-10 md:pb-10">
				<div className="flex flex-col md:flex-row gap-6 ">
					<Avatar src={""} variant="rounded" size="140px" />
					<div>
						<p className="text-xl font-medium">{pastor.name}</p>
						<div className="flex gap-4 flex-wrap mt-6">
							<div className="flex-1">
								<p className="title-sm mb-2 uppercase">LEVEL</p>
								<p>{pastor.level}</p>
							</div>
							<div className="flex-1">
								<p className="title-sm mb-2 uppercase">Parish</p>
								<p>{pastor.parish}</p>
							</div>
						</div>
						<div className="mt-6">
							<p className="title-sm mb-2 uppercase">Parish</p>
							<p>{pastor.address}</p>
						</div>
					</div>
				</div>
				<div className="flex gap-4 flex-wrap mt-10">
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
			</div>
		</Modal>
	);
}
