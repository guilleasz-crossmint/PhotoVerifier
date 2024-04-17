"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    document.cookie = `email=${email}`;
    router.replace("/");
  };
  return (
    <div>
      <input placeholder="email" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
