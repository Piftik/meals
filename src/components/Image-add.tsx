import React, { useState } from "react";

interface Props {
  onFileAdded: (file: File) => void;
}

const UploadAndDisplayImage = ({ onFileAdded }: Props) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <div>
      <h1>Upload </h1>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          const file = event?.target?.files && event.target.files[0];

          if (!file) return;
          console.log(file, "file");
          setSelectedImage(file);
          onFileAdded(file);
        }}
      />
      <br />

      <br />
    </div>
  );
};

export default UploadAndDisplayImage;
