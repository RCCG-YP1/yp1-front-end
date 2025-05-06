import { useState } from "react";
import NewsModal from "./NewsModal";

const news = [
  {
    id: 1,
    title: "PICP Welcome Service",
    body: "Youth Province 1 welcomes her new PICP on the 8th of   September 2024. Pastor Oluwagbemileke Adeboye was welcomed to the Province in a power packed service featuring anointed men of God",
    image: "public/images/Rectangle 11.png",
  },
];

export default function News() {
  const [selectedNews, setSelectednews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewsClick = (newItem) => {
    setSelectednews(newItem);
    setIsModalOpen(true);
  };
  return (
    <div className="min-h-screen">
      <div className="text-center my-16 ">
        <p>News and Update</p>
      </div>
      <div>
        <div className="w-full  rounded-lg cursor-pointer py-4 px-7">
          {news?.length > 0 ? (
            news.map((newItem) => (
              <div
                key={newItem.id}
                onClick={() => handleNewsClick(newItem)}
                className="p-4  rounded-md shadow-lg bg-gray-600 "
              >
                <h3 className="text-lg font-semibold">{newItem.title}</h3>
                <p className="text-gray-200">
                  {newItem.body.substring(0, 70) + "..."}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No news available.</p>
          )}
        </div>
        {isModalOpen && (
          <NewsModal
            newItem={selectedNews}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </div>
  );
}
