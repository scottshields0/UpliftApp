"use client";

import { useEvents } from "@/app/context/eventsContext";
import { useRSVP } from "@/app/context/rsvpContext"; // Import RSVP context
import EventCard from "@/components/eventCard";

export default function Events() {
    const { events } = useEvents(); // Fetch all events
    const { rsvpEvents, addRSVP } = useRSVP(); // RSVP function

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-green-700 text-center mb-6">🌱 Upcoming Events</h1>

            {events.length === 0 ? (
                <p className="mt-4 text-gray-600 text-center">No upcoming events.</p>
            ) : (
                <ul className="space-y-6">
                    {events.map((event) => {
                        const isRSVPed = rsvpEvents.some((e) => e.id === event.id); // Check if event is RSVPed

                        return (
                            <li key={event.id} className="bg-white shadow-lg rounded-lg p-6 border border-green-200">
                                <EventCard 
                                    name={event.name}
                                    description={`🌍 Hosted by ${event.organizationName}`}
                                    date={event.date}
                                />

                                {/* RSVP Button (Only RSVP, No Un-RSVP) */}
                                {!isRSVPed && (
                                    <button
                                        className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-200"
                                        onClick={() => addRSVP(event)}
                                    >
                                        ✅ RSVP Now
                                    </button>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
