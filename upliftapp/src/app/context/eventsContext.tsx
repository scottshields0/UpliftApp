"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Event = {
    id: number;
    name: string;
    date: string;
    location: string;
    organizationId: number;
    organizationName: string;
};

type EventsContextType = {
    events: Event[];
    setEvents: (events: Event[]) => void;
};

const EventsContext = createContext<EventsContextType | undefined>(undefined);

export function EventsProvider({ children }: { children: React.ReactNode }) {
    const [events, setEvents] = useState<Event[]>([]);

    // Simulating fetching events (replace with API call if using a database)
    useEffect(() => {
        setEvents([
            { id: 101, name: "Food Drive", date: "2025-03-15", location: "Community Hall", organizationId: 1, organizationName: "Local Food Bank" },
            { id: 102, name: "Adoption Day", date: "2025-03-18", location: "Pet Shelter", organizationId: 2, organizationName: "Animal Shelter Volunteers" }
        ]);
    }, []);

    return (
        <EventsContext.Provider value={{ events, setEvents }}>
            {children}
        </EventsContext.Provider>
    );
}

export function useEvents() {
    const context = useContext(EventsContext);
    if (!context) throw new Error("useEvents must be used within an EventsProvider");
    return context;
}
