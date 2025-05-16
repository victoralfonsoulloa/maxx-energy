import { useState } from "react";

export default function DataPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white-900 text-center">MAXX Energy Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white p-6 rounded shadow text-black">
          <img 
            src="/images/Plantation BI (1)_page_1.jpg" 
            alt="Chart 1" 
            className="w-full h-auto rounded cursor-zoom-in"
            onClick={() => handleImageClick("/images/Plantation BI (1)_page_1.jpg")}
          />
        </div>
        <div className="bg-white p-6 rounded shadow text-black">
          <img 
            src="/images/Plantation BI (2)_page_1.jpg" 
            alt="Chart 2" 
            className="w-full h-auto rounded cursor-zoom-in"
            onClick={() => handleImageClick("/images/Plantation BI (2)_page_1.jpg")}
          />
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-[90vw] max-h-[90vh] rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
