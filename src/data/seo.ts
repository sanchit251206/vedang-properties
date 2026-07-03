const normalizeSiteUrl = (value?: string) => {
  if (!value) {
    return undefined;
  }

  return value.startsWith("http") ? value : `https://${value}`;
};

export const siteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL) ??
  "http://localhost:3000";

export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export const coreSeoKeywords = [
  "Vedang Properties",
  "property consultants in Mohali",
  "property consultant in Mohali",
  "property dealers in Mohali",
  "property dealer Mohali",
  "best property dealers in Mohali",
  "best property dealer in Mohali",
  "real estate consultant in Mohali",
  "real estate agent in Mohali",
  "property dealer in Aerocity Mohali",
  "Aerocity Mohali property consultant",
  "residential property consultant Mohali",
  "commercial property consultant Mohali",
  "plot dealer in Mohali",
  "Kharar property consultant",
  "Zirakpur property consultant",
  "New Chandigarh property consultant",
];
