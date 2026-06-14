import Navbar from "@/app/component/navbar/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F7]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#112D4E]">
            GameUp
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Are you up for a game?
            Create a lobby, invite your friends, and
            play fun social games together.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-[#3F72AF] px-8 py-4 font-semibold text-white transition hover:opacity-90">
              Create Lobby
            </button>

            <button className="rounded-xl border border-[#3F72AF] px-8 py-4 font-semibold text-[#3F72AF] transition hover:bg-[#DBE2EF]">
              Browse Games
            </button>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-lg rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-center text-2xl font-bold text-[#112D4E]">
            Join Lobby
          </h2>

          <div className="flex gap-3">
            <input
              placeholder="Enter Code"
              className="flex-1 rounded-xl border p-4 uppercase outline-none focus:border-[#3F72AF] text-[#112D4E] "
            />

            <button className="rounded-xl bg-[#3F72AF] px-6 text-white">
              Join
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#112D4E]">
          Featured Games
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <div className="text-4xl">🎥</div>

            <h3 className="mt-4 text-xl font-bold">
              Wrong Clip
            </h3>

            <p className="mt-2 text-slate-600">
              Everyone watches a video.
              One player gets a different clip.
              Find the imposter.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <div className="text-4xl">😂</div>

            <h3 className="mt-4 text-xl font-bold">
              Meme Detective
            </h3>

            <p className="mt-2 text-slate-600">
              Guess the hidden meme and fool your friends.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <div className="text-4xl">🎵</div>

            <h3 className="mt-4 text-xl font-bold">
              Song Faker
            </h3>

            <p className="mt-2 text-slate-600">
              Spot who got the different song.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}