// components/ImageUploadButton.js

import React, { useState } from "react";

const ImageUploadButton = () => {
  const [selectedImage, setSelectedImage] = useState<string>();
  const [imageName, setImageName] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create a URL for the selected image
      setImageName(file.name); // Set the name of the uploaded file
    } else {
      setImageName(""); // Reset name if no file is selected
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="cursor-pointer">
        <span className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200">
          Upload Image
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden" // Hide the default file input
        />
      </label>

      {selectedImage && (
        <div className="mt-4">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-32 h-32 object-cover rounded-md"
          />
          <p className="mt-2 text-sm text-gray-600">{imageName}</p> {/* Display the image name */}
        </div>
      )}
    </div>
  );
};

export default ImageUploadButton;