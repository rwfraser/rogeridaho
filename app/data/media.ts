export interface SongTrack {
  id: string;
  filename: string;
  title: string;
  audioUrl: string;
}

export interface VideoTrack {
  id: string;
  videoFilename: string;
  thumbnailFilename: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}
// Defaults are same-domain paths. If you host media in blob/object storage,
// set these environment variables to your blob base URLs instead.
const AUDIO_BASE_URL = process.env.NEXT_PUBLIC_AUDIO_BASE_URL ?? "https://www.rogeridaho.com/songs";
const VIDEO_BASE_URL = process.env.NEXT_PUBLIC_VIDEO_BASE_URL ?? "https://www.rogeridaho.com/videos";
const VIDEO_THUMBNAIL_BASE_URL =
  process.env.NEXT_PUBLIC_VIDEO_THUMBNAIL_BASE_URL ?? "https://www.rogeridaho.com/videos/thumbnails";

function buildAssetUrl(baseUrl: string, filename: string): string {
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, "");
  return `${normalizedBaseUrl}/${encodeURIComponent(filename)}`;
}

function cleanTitleFromFilename(filename: string): string {
  const romanNumeralPattern = /^(i|ii|iii|iv|v|vi|vii|viii|ix|x)$/i;

  const name = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return name
    .split(" ")
    .map((word) => {
      const lower = word.toLowerCase();
      if (lower === "im") return "I'm";
      if (romanNumeralPattern.test(lower)) return lower.toUpperCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

const audioFileNames = [
  "awhile-with-intro.wav",
  "blood-sweat-and-screw-the-tears.mp3",
  "chosen.mp3",
  "cowboy-lament.wav",
  "dear-friends.wav",
  "donald-j-trumpsacunt.mp3",
  "dr-philw-voice-over.wav",
  "execution-song.mp3",
  "f-big-beard-mc-quarries-sea-chanty.wav",
  "fresh-round-of-pain.mp3",
  "hurts-baby.wav",
  "i-am-saved.mp3",
  "i-need-a-woman-iii.wav",
  "im-gonna-be-there.wav",
  "in-your-town.wav",
  "my-monica.wav",
  "no-fear.mp3",
  "on-you.wav",
  "our-god-is-a-great-god.mp3",
  "place-of-worship.wav",
  "salut.mp3",
  "silent-way-ii.wav",
  "skyline.mp3",
  "slightly-wrong.mp3",
  "spokane-river.mp3",
  "steal-your-heart-away.mp3",
  "string-of-broken-hearts.mp3",
  "this-deal-is-done.mp3",
  "through.mp3",
  "vagabond-song.wav",
  "victims-forgotten.mp3",
  "watch-it-grow.mp3",
  "when-i-lay-my-eyes-upon-you.mp3",
  "you-are-my-lady.mp3",
] as const;

const videoAssets = [
  {
    videoFilename: "dr-philw-voice-over.mp4",
    thumbnailFilename: "dr-philw-voice-over.jpg",
  },
  {
    videoFilename: "no-fear.mp4",
    thumbnailFilename: "no-fear.jpg",
  },
] as const;

export const songs: SongTrack[] = audioFileNames.map((filename, index) => {
  const id = `song-${String(index + 1).padStart(2, "0")}`;
  return {
    id,
    filename,
    title: cleanTitleFromFilename(filename),
    audioUrl: buildAssetUrl(AUDIO_BASE_URL, filename),
  };
});

export const videos: VideoTrack[] = videoAssets.map((asset, index) => {
  const id = `video-${String(index + 1).padStart(2, "0")}`;
  return {
    id,
    videoFilename: asset.videoFilename,
    thumbnailFilename: asset.thumbnailFilename,
    title: cleanTitleFromFilename(asset.videoFilename),
    videoUrl: buildAssetUrl(VIDEO_BASE_URL, asset.videoFilename),
    thumbnailUrl: buildAssetUrl(VIDEO_THUMBNAIL_BASE_URL, asset.thumbnailFilename),
  };
});
