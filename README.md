This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Media hosting for songs and videos
The songs and videos pages (`/songs`, `/videos`) use `app/data/media.ts` for filenames and derive media URLs from environment variables:

- `NEXT_PUBLIC_AUDIO_BASE_URL`
- `NEXT_PUBLIC_VIDEO_BASE_URL`
- `NEXT_PUBLIC_VIDEO_THUMBNAIL_BASE_URL`

Media files are hosted in **Vercel Blob** (not committed to git).

### Upload media to Vercel Blob (CLI)
Upload local files from `assets/`:

```bash
set -a
source .env.local
set +a
STORE_ID=store_yYgvbZmuUQJCwV8H
SCOPE=roger-frasers-projects

for file in assets/audio/*; do
  name=$(basename "$file")
  vercel blob put "$file" \
    --access public \
    --pathname "songs/$name" \
    --allow-overwrite true \
    --oidc-token "$VERCEL_OIDC_TOKEN" \
    --store-id "$STORE_ID" \
    --scope "$SCOPE"
done

for file in assets/video/*.mp4; do
  name=$(basename "$file")
  vercel blob put "$file" \
    --access public \
    --pathname "videos/$name" \
    --allow-overwrite true \
    --oidc-token "$VERCEL_OIDC_TOKEN" \
    --store-id "$STORE_ID" \
    --scope "$SCOPE"
done

for file in assets/video/thumbnails/*; do
  name=$(basename "$file")
  vercel blob put "$file" \
    --access public \
    --pathname "videos/thumbnails/$name" \
    --allow-overwrite true \
    --oidc-token "$VERCEL_OIDC_TOKEN" \
    --store-id "$STORE_ID" \
    --scope "$SCOPE"
done
```

### Configure environment variables
Set these in Vercel for production/preview/development:

- `NEXT_PUBLIC_AUDIO_BASE_URL=https://yygvbzmuuqjcwv8h.public.blob.vercel-storage.com/songs`
- `NEXT_PUBLIC_VIDEO_BASE_URL=https://yygvbzmuuqjcwv8h.public.blob.vercel-storage.com/videos`
- `NEXT_PUBLIC_VIDEO_THUMBNAIL_BASE_URL=https://yygvbzmuuqjcwv8h.public.blob.vercel-storage.com/videos/thumbnails`
