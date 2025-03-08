"use client";

import { useParams, useRouter } from "next/navigation";
import { useEvents } from "@/app/context/eventsContext";
import { useRSVP } from "@/app/context/rsvpContext";

const organizations = [
    { id: 1, name: "Local Food Bank", location: "Downtown", about: "Helping those in need." },
    { id: 2, name: "Animal Shelter Volunteers", location: "Uptown", about: "Caring for abandoned pets." }
];

export default function OrganizationPage() {
    const { id } = useParams();
    const router = useRouter();
    const { events } = useEvents();
    const { addRSVP } = useRSVP();

    const org = organizations.find((o) => o.id === Number(id));
    if (!org) return <p>Organization not found</p>;

    const orgEvents = events.filter((event) => event.organizationId === org.id);

    return (
        <div className="p-4">
            <button onClick={() => router.back()} className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                ← Back to Organizations
            </button>
            <h1 className="text-3xl font-bold">{org.name}</h1>
            <p className="mt-2">{org.about}</p>

            <h2 className="text-xl font-semibold mt-4">Upcoming Events</h2>
            {orgEvents.length === 0 ? (
                <p className="text-gray-600 mt-2">No upcoming events.</p>
            ) : (
                <ul className="mt-2">
                    {orgEvents.map((event) => (
                        <li key={event.id} className="p-2 bg-gray-100 rounded-md mt-2 flex justify-between">
                            <span>{event.name} - {event.date}</span>
                            <button 
                                onClick={() => addRSVP(event)}
                                className="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                RSVP
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

