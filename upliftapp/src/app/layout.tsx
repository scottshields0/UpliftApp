import { ReactNode } from "react";
import { RSVPProvider } from "@/context/rsvpContext";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="p-6">
      <RSVPProvider>
          <NavBar />
          {children}
        </RSVPProvider>
      </body>
    </html>
  );
}