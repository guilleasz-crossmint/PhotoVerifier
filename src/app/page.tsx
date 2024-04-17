import Link from "next/link";

import React, { useState } from "react";
import { createWallet } from "./signup/actions";
import { mintNFT } from "./export/mint";
import { getNFTFromWallet } from './nfts/get-nft';

export default function Home() {
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCreateWallet = () => {
    createWallet(email);
  };

  const handleMintNFT = () => {
    mintNFT(email, imageUrl);
  };

  const handleGetNFTFromNFT = () => {
    // this needs to be dynamic but with this structure: polygon:walletId
    getNFTFromWallet("polygon:0x970c4f6EcDecada4875744e3E52154cB208Fe508");
  }

  
  return (
    <div className="flex h-full flex-col items-center justify-center gap-20">
      <div className="flex flex-col text-center gap-2 mt-[45%] md:mt-[15%]">
        <h1>Photo Verifier</h1>
        <Link href="/camara">Take photo</Link>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mt-4"
        />
        <button onClick={handleCreateWallet}>Create Wallet</button>
        <button onClick={handleMintNFT} className="mt-4">Mint NFT</button>
        <button onClick={handleGetNFTFromNFT} className="mt-4">Get NFT from wallet</button>
      </div>
    </div>
  );
}
