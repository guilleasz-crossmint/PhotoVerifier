import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Gallery from "./components/Gallery";
import { getPhotos } from "../actions/photos";
import Image from "next/image";
import { getNFTFromWallet } from "./nfts/get-nft";

export default async function Home() {
  const cookieStore = cookies();
  const email = cookieStore.get("email")?.value;
  const walletAddress = cookieStore.get("walletAddress")?.value;
  if (!email) {
    redirect("/signup");
  }

  const photos = await getPhotos();
  const nfts = await getNFTFromWallet(walletAddress);
  console.log(nfts);
  return (
    <>
      <Image
        className="mt-1.5 mx-auto"
        src="/logo.svg"
        alt="logo"
        width={34}
        height={30}
      />
      <Gallery
        initialPhotos={photos}
        initialNFTs={nfts}
        email={email}
        walletAddress={walletAddress}
      />
    </>
  );
}
