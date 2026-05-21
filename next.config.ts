import type { NextConfig } from "next";

/**
 * GitHub Pages: leave NEXT_PUBLIC_BASE_PATH empty for custom domain (samiolavuo.com).
 * For project sites use e.g. NEXT_PUBLIC_BASE_PATH=/website
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPrefix = basePath ? `${basePath}/` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix,
  images: { unoptimized: true },
};

export default nextConfig;
