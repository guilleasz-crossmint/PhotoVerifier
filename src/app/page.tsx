"use client";  

import React, { useState } from 'react';
import { createWallet } from './signup/actions'; 
export default function Home() {
  const [email, setEmail] = useState('');

  const openCamera = () => {
    navigator.mediaDevices.getUserMedia({
      video: true,
    }).then(stream => {
    }).catch(err => {
      console.error("Error accessing the camera: ", err);
    });
  };

  const handleCreateWallet = () => {
    createWallet(email);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-20">
      <div className="flex flex-col text-center gap-2 mt-[45%] md:mt-[15%]">
        <h1>Photo Verifier</h1>
        <button onClick={openCamera}>Take Photo</button>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mt-4"
        />
        <button onClick={handleCreateWallet}>Create Wallet</button>
      </div>
    </div>
  );
}
