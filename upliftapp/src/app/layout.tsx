import { ReactNode } from "react";
import { RSVPProvider } from "@/app/context/rsvpContext";
import { EventsProvider } from "@/app/context/eventsContext";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Adding Google Font link for "Inter" */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter p-6">
        <EventsProvider>
          <RSVPProvider>
            <NavBar />
            {children}
          </RSVPProvider>
        </EventsProvider>
      </body>
    </html>
  );
}
