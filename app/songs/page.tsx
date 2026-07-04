import { SiteShell } from "../components/site-shell";
import { songs } from "../data/media";

export default function SongsPage() {
  return (
    <SiteShell currentPath="/songs">
      <section className="mx-auto w-full max-w-5xl">
        <h2 className="mb-2 text-center text-4xl font-light tracking-widest uppercase text-gray-700 md:text-5xl">
          Original Songs
        </h2>
        <p className="mb-8 text-center text-sm tracking-wide uppercase text-gray-500">
          {songs.length} tracks
        </p>

        <ul className="grid gap-4 md:grid-cols-2">
          {songs.map((song) => (
            <li key={song.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-lg font-medium tracking-wide uppercase text-gray-800">
                {song.title}
              </h3>
              <audio controls preload="none" className="w-full">
                <source src={song.audioUrl} />
                Your browser does not support the audio element.{" "}
                <a href={song.audioUrl} className="underline">
                  Download {song.title}
                </a>
                .
              </audio>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
