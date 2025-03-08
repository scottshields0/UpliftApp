"use client";

import { useRSVP } from "@/app/context/rsvpContext";

export default function CalendarPage() {
    const { rsvpEvents } = useRSVP();

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">My Calendar</h1>

            {rsvpEvents.length === 0 ? (
                <p className="mt-4 text-gray-600">No RSVPed events yet.</p>
            ) : (
                <ul className="mt-4">
                    {rsvpEvents.map((event) => (
                        <li key={event.id} className="p-2 bg-gray-100 rounded-md mt-2">
                            {event.name} - {event.date} ({event.location})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
