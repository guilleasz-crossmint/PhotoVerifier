"use client";
import { PropsWithChildren, useState } from "react";
import classnames from "../../utils/classnames";
import Image from "next/image";
import { mintNFT } from "../actions";
import { getNFTFromWallet } from "../nfts/get-nft";

const Tab = ({
  children,
  active,
  onClick,
}: PropsWithChildren<{
  active: boolean;
  onClick: () => void;
}>) => {
  return (
    <div
      className={classnames(
        "text-base font-normal text-white/60 cursor-pointer w-1/2 text-center p-3.5 border-b-2 border-b-white/10",
        { "text-white font-semibold border-b-white": active }
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default function Gallery({
  email,
  initialPhotos,
  initialNFTs,
  walletAddress,
}) {
  const [activeTab, setActiveTab] = useState<"verified" | "unverified">(
    "verified"
  );
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [photos, setPhotos] = useState(initialPhotos);
  const [nfts, setNFTs] = useState(initialNFTs);

  const handleMintNFT = async () => {
    await mintNFT(email, activePhoto);
    setNFTs(await getNFTFromWallet(walletAddress));
    setActivePhoto(null);
  };
  return (
    <div className="flex justify-center flex-col">
      <div className="w-[361px] bg-white/5 h-[154px] rounded-3xl text-center flex flex-col justify-center gap-2 mt-5">
        <div className="text-5xl font-semibold">{photos.length}</div>
        <div className="text-base opacity-40">verified photos</div>
      </div>
      <div className="flex">
        <Tab
          active={activeTab === "verified"}
          onClick={() => setActiveTab("verified")}
        >
          Verified
        </Tab>
        <Tab
          active={activeTab === "unverified"}
          onClick={() => setActiveTab("unverified")}
        >
          Unverifed
        </Tab>
      </div>
      <div className="flex">
        {activeTab === "verified"
          ? nfts.map((nft) => {
              return (
                <Image
                  width={200}
                  height={200}
                  src={nft.image}
                  key={nft.image}
                  alt={nft.image}
                  onClick={() => setActivePhoto(nft.photo)}
                />
              );
            })
          : photos.map((photo) => {
              return (
                <Image
                  width={200}
                  height={200}
                  src={`/gallery/${photo}`}
                  key={photo}
                  alt={photo}
                  onClick={() => setActivePhoto(photo)}
                />
              );
            })}
      </div>
      {activePhoto && (
        <div className="fixed w-full h-full top-3 left-0 bg-[#0F172A]">
          <div
            onClick={() => setActivePhoto(null)}
            className="rounded-full	h-[30px] w-[30px] text-[#EBEBF599] bg-[#282E3F] fixed right-2 top-5 text-center pt-[3px] cursor-pointer"
          >
            X
          </div>
          <Image
            height={174}
            width={174}
            src={`/gallery/${activePhoto}`}
            alt={activePhoto}
            className="mx-auto mt-2 rounded"
          />
          <button
            onClick={handleMintNFT}
            className="w-full bg-white text-[#09090B] p-2 text-center fixed bottom-10 font-semibold"
          >
            Mint NFT
          </button>
        </div>
      )}
    </div>
  );
}
