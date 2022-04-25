import React, { useState } from "react";

interface Props {
  onFileAdded: (file: File, urlBase: string) => void;
}

const UploadAndDisplayImage = ({ onFileAdded }: Props) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <div>
      <h1>Upload </h1>
      {selectedImage && (
        <div>
          <img
            alt="not found"
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
          const urlBase = event.target.baseURI;
          if (!file) return;
          console.log(file, "file");
          console.log(event, "URL");
          console.log(urlBase, "base URL");

          setSelectedImage(file);
          onFileAdded(file, urlBase);
        }}
      />
      <br />

      <br />
    </div>
  );
};

export default UploadAndDisplayImage;
