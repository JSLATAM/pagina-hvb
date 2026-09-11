import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/pagina-hvb" : "",
  },
  ...(isGitHubPages
    ? {
        basePath: "/pagina-hvb",
      }
    : {}),
};

export default nextConfig;
