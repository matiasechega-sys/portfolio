import { ImageResponse } from "next/og";
import { OgImageContent } from "./og-image-content";

export const alt = "Matías Echegaray — Desarrollador Full Stack";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgImageContent />, { ...size });
}
