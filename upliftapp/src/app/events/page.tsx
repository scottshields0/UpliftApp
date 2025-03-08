"use client";

import { useEvents } from "@/app/context/eventsContext";
import EventCard from "@/components/eventCard";

export default function Events() {
    const { events } = useEvents();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Upcoming Events</h1>
            
            {events.length === 0 ? (
                <p className="mt-4 text-gray-600">No upcoming events.</p>
            ) : (
                <ul className="mt-4">
                    {events.map((event) => {
                        return (
                            <li key={event.id} className="mb-4">
                                <EventCard 
                                    name={event.name}
                                    description={`Hosted by ${event.organizationName}`}
                                    date={event.date}
                                />
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
