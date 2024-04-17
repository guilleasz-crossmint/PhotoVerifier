import Link from "next/link";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Gallery from "./components/Gallery";
import { getPhotos } from "../actions/photos";
import Image from "next/image";

export default async function Home() {
  const cookieStore = cookies();
  const email = cookieStore.get("email");
  if (!email) {
    redirect("/signup");
  }

  const photos = await getPhotos();

  return (
    <>
      <Image
        className="mt-1.5 mx-auto"
        src="/logo.svg"
        alt="logo"
        width={34}
        height={30}
      />
      <Gallery photos={photos} />
    </>
  );
}
