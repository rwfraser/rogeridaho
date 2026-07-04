import { SiteShell } from "./components/site-shell";

export default function Home() {
  return (
    <SiteShell currentPath="/" centerContent>
      <h2 className="text-5xl font-light tracking-widest uppercase text-gray-700 md:text-7xl">
        Coming Soon
      </h2>
    </SiteShell>
  );
}
