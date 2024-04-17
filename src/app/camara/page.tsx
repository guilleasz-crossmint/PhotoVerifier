"use client";

import { savePhoto } from "../../actions/photos";
import { useRouter } from "next/navigation";

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

const Camera = () => {
  const router = useRouter();
  const handleCameraChange = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    await savePhoto(base64);
    router.replace("/gallery");
  };
  return (
    <label>
      Open Camera
      <input
        onChange={handleCameraChange}
        type="file"
        accept="image/*"
        capture="camera"
        id="camera"
        hidden
      />
    </label>
  );
};

export default Camera;
