import Image from "next/image";
import { getPhotos } from "../../actions/photos";

export default async function Gallery() {
  const photos = await getPhotos();
  console.log("photos", photos);
  return (
    <div className="flex h-full flex-col items-center justify-center gap-40">
      <div className="flex flex-col text-center gap-2 mt-[45%] md:mt-[15%]">
        <h1>Gallery</h1>
        {photos.map((photo) => (
          <Image
            width={500}
            height={500}
            key={photo}
            src={`/gallery/${photo}`}
            alt={photo}
          />
        ))}
      </div>
    </div>
  );
}
