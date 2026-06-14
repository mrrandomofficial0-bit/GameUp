"use client";

import { useState } from "react";
import { supabase } from "@/app/utils/supabase/client";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          alert(error.message);
          return;
        }

        alert("Logged in!");
      } else {
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
            },
          },
        });

        if (error) {
          alert(error.message);
          return;
        }

        alert(
          "Account created! Check your email if email confirmation is enabled."
        );

        console.log(data);
      }
    } finally {
      setLoading(false);
    }
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      alert(error.message);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F9F7F7] px-6">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#3F72AF]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#3F72AF]/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#112D4E]">
            GameUp
          </h1>

          <p className="mt-2 text-slate-500">
            Join your friends and start playing.
          </p>
        </div>

        <div className="mb-8 flex rounded-xl bg-[#DBE2EF] p-1">
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`flex-1 rounded-lg py-2 font-medium transition ${
              !isLogin
                ? "bg-white text-[#112D4E] shadow"
                : "text-slate-500"
            }`}
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`flex-1 rounded-lg py-2 font-medium transition ${
              isLogin
                ? "bg-white text-[#112D4E] shadow"
                : "text-slate-500"
            }`}
          >
            Login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-slate-200 p-4 text-[#112D4E] outline-none focus:border-[#3F72AF]"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-4 text-[#112D4E] outline-none focus:border-[#3F72AF]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-4 text-[#112D4E] outline-none focus:border-[#3F72AF]"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="w-full rounded-xl border border-slate-200 p-4 text-[#112D4E] outline-none focus:border-[#3F72AF]"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#3F72AF] py-4 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading
              ? "Loading..."
              : isLogin
              ? "Login"
              : "Create Account"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-sm text-slate-400">or</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          onClick={signInWithGoogle}
          className="w-full rounded-xl border border-slate-200 bg-white py-4 font-medium text-slate-700 hover:bg-slate-50"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}