"use client";

export default function Home() {
  const openCamara = () => {
    navigator.mediaDevices.getUserMedia({
      video: true,
    });
  };
  return (
    <div className="flex h-full flex-col items-center justify-center gap-40">
      <div className="flex flex-col text-center gap-2 mt-[45%] md:mt-[15%]">
        <h1>Photo Verifier</h1>
        <button onClick={openCamara}>Take Photo</button>
      </div>
    </div>
  );
}
