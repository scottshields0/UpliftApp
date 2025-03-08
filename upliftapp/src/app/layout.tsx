import { ReactNode } from "react";
import { RSVPProvider } from "@/app/context/rsvpContext";
import { EventsProvider } from "@/app/context/eventsContext";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="p-6">
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