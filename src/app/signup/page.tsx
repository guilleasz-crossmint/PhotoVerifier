"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createWallet } from "./actions";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async () => {
    const { publicKey } = await createWallet(email);
    document.cookie = `email=${email}`;
    document.cookie = `walletAddress=${publicKey}`;
    router.replace("/");
  };
  return (
    <div>
      <input placeholder="email" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
