import Link from "next/link";
import { createClient } from "@/app/utils/supabase/server";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("USER:", user);

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold text-[#112D4E]"
        >
          GameUp
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/games"
            className="text-sm font-medium hover:opacity-70 text-[#112D4E]"
          >
            Games
          </Link>

          {user ? (
            <Link
              href="/profile"
              className="rounded-lg bg-[#3F72AF] px-4 py-2 text-white"
            >
              Profile
            </Link>
          ) : (
            <Link
              href="/auth"
              className="rounded-lg bg-[#3F72AF] px-4 py-2 text-white"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}