import { SiteShell } from "../components/site-shell";
import { videos } from "../data/media";

export default function VideosPage() {
  return (
    <SiteShell currentPath="/videos">
      <section className="mx-auto w-full max-w-5xl">
        <h2 className="mb-2 text-center text-4xl font-light tracking-widest uppercase text-gray-700 md:text-5xl">
          Music Videos
        </h2>
        <p className="mb-8 text-center text-sm tracking-wide uppercase text-gray-500">
          {videos.length} videos
        </p>

        <ul className="grid gap-8">
          {videos.map((video) => (
            <li key={video.id} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-xl font-medium tracking-wide uppercase text-gray-800">
                {video.title}
              </h3>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={video.thumbnailUrl}
                alt={`${video.title} thumbnail`}
                className="mb-4 aspect-video w-full rounded-md border border-gray-200 object-cover"
                loading="lazy"
              />

              <video controls preload="metadata" poster={video.thumbnailUrl} className="w-full rounded-md bg-black">
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video element.{" "}
                <a href={video.videoUrl} className="underline">
                  Download {video.title}
                </a>
                .
              </video>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
