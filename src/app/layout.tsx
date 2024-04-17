import { Montserrat } from "next/font/google";
import { pwaTrackingListeners } from "../scripts/pwaEventlisteners";
import "./globals.css";
import Providers from "./providers";
import { Metadata } from "next";

const inter = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
});

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  pwaTrackingListeners();
}

export const metadata: Metadata = {
  title: "React PWA Boilerplate",
  description: "A PWA boilerplate/reference application in React",
  manifest: "/manifest.webmanifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#020617] dark">
      <body className={inter.className}>
        <Providers>
          <main>
            <div className="container mx-auto flex-1">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}

if (isBrowser && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service worker registered");
      })
      .catch((err) => {
        console.log("Service worker registration failed", err);
      });
  });
}
