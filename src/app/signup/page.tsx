"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function signupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("SignUp success", response.data);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
      console.log("SignUp failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <hr />

      <label htmlFor="username">UserName</label>
      <input
        type="text"
        name=""
        placeholder="username"
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        placeholder="email"
        type="text"
        name=""
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        placeholder="password"
        type="password"
        name=""
        className="p-2 border text-black border-gray-300 color-white rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button
        type="submit"
        className="p-2 border-gray-200 rounded-lg mb-4 focus:outline:none focus:border-green-600"
        onClick={onSignup}
      >
        {buttonDisabled ? "No signUp" : "SignUp"}
      </button>
      <br />

      <Link href="/login">Visit Login page</Link>
    </div>
  );
}
