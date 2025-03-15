import React from "react";
import Modal from "../components/modal";
import SocialButton from "@/components/social-btn";
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  MapIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons";

export const parishes = [
  {
    id: "12334",
    name: "RCCG LSC The Bridge",
    level: "Area Headquarters",
    address: "12 Clark Street, Magodo Phase 1, Lagos",
    img_url: "/images/parish-logo.png",
    backdrop_url: "/images/photobg.png",
    church_leaders: [
      { name: "Pastor Oluwafemi Oyewumi", img: "", role: "Area Pastor" },
      { name: "Pastor Shola Oladejo", img: "", role: "Assistant Pastor" },
      { name: "Pastor Bolaji Asifat", img: "", role: "Associate Pastor" },
    ],
    socials: {
      facebook: "https://facebook.com/rccgbridge",
      instagram: "https://instagram.com/rccgbridge",
      twitter: "https://twitter.com/rccgbridge",
      youtube: "https://youtube.com/rccgbridge",
      tiktok: "https://tiktok.com/@rccgbridge",
      spotify: "https://open.spotify.com/rccgbridge",
      website: "https://rccgbridge.org",
    },
  },
  {
    id: "56789",
    name: "RCCG Mount Zion",
    level: "Zonal Headquarters",
    address: "45 Adeola Street, Victoria Island, Lagos",
    img_url: "/images/mount-zion.png",
    backdrop_url: "/images/mount-zion-bg.png",
    church_leaders: [
      { name: "Pastor David Johnson", img: "", role: "Zonal Pastor" },
      { name: "Pastor Mary James", img: "", role: "Assistant Pastor" },
    ],
    socials: {
      facebook: "https://facebook.com/rccgmountzion",
      instagram: "https://instagram.com/rccgmountzion",
      twitter: "https://twitter.com/rccgmountzion",
      youtube: "https://youtube.com/rccgmountzion",
      website: "https://rccgmountzion.org",
    },
  },
];

export default function ParishModal({ isOpen, onClose, parish }) {
  if (!parish) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={parish.name} size="xl">
      <div className="space-y-4">
        {/* Image */}
        <img
          src={parish.img_url || "https://via.placeholder.com/600x200"}
          alt={parish.name}
          className="w-full rounded-md"
        />

        {/* Parish Details */}
        <div className="text-gray-700">
          <p>
            <strong>Level:</strong> {parish.level}
          </p>
          <p>
            <strong>Address:</strong> {parish.address}
          </p>
        </div>

        {/* Leadership */}
        <div className="text-gray-700">
          <h3 className="font-semibold">Leadership</h3>
          <div className="flex">
            {parish.leadership.map((leader, index) => (
              <p key={index} className="">
                {leader.name} - {leader.role}
              </p>
            ))}
          </div>
        </div>

        {/* Social Media Buttons */}
        <div className="grid grid-cols-4 gap-2 w-full justify-around ">
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
          <div className="col-span-4 flex justify-center gap-2 w-full">
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
      </div>
    </Modal>
  );
}
