"use client";

import { createContext, useContext, useState } from "react";

type Event = {
    id: number;
    name: string;
    date: string;
    location: string;
};

type RSVPContextType = {
    rsvpEvents: Event[];
    addRSVP: (event: Event) => void;
};

const RSVPContext = createContext<RSVPContextType | undefined>(undefined);

export function RSVPProvider({ children }: { children: React.ReactNode }) {
    const [rsvpEvents, setRsvpEvents] = useState<Event[]>([]);

    const addRSVP = (event: Event) => {
        setRsvpEvents((prev) => {
            if (prev.some((e) => e.id === event.id)) return prev;
            return [...prev, event];
        });
    };

    return (
        <RSVPContext.Provider value={{ rsvpEvents, addRSVP }}>
            {children}
        </RSVPContext.Provider>
    );
}

export function useRSVP() {
    const context = useContext(RSVPContext);
    if (!context) throw new Error("useRSVP must be used within an RSVPProvider");
    return context;
}
