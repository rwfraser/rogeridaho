import { SiteShell } from "../components/site-shell";

export default function Privacy() {
  return (
    <SiteShell currentPath="/privacy" centerContent>
      <div className="max-w-2xl text-center">
        <h2 className="mb-6 text-4xl font-light tracking-widest uppercase text-gray-700 md:text-5xl">
          Privacy Policy
        </h2>
        <p className="text-lg text-gray-500">Our privacy policy will be available here soon.</p>
      </div>
    </SiteShell>
  );
}
