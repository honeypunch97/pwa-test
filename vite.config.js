import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        icons: [
          {
            src: "/image/icon-48x48.png",
            type: "image/png",
            sizes: "48x48",
          },
          {
            src: "/image/icon-72x72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "/image/icon-96x96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "/image/icon-128x128.png",
            type: "image/png",
            sizes: "128x128",
          },
          {
            src: "/image/icon-144x144.png",
            type: "image/png",
            sizes: "144x144",
          },
          {
            src: "/image/icon-152x152.png",
            type: "image/png",
            sizes: "152x152",
          },
          {
            src: "/image/icon-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/image/icon-384x384.png",
            type: "image/png",
            sizes: "384x384",
          },
          {
            src: "/image/icon-512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
      },
    }),
  ],
});
