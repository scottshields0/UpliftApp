"use client";

import { useParams, useRouter } from "next/navigation";

type Organization = {
    id: number;
    name: string;
    location: string;
    about: string;
    events: string[];
};

const sampleData: Organization[] = [
    { id: 1, name: "Local Food Bank", location: "Downtown", about: "Helping those in need.", events: ["Food Drive - March 15", "Community Kitchen - March 20"] },
    { id: 2, name: "Animal Shelter Volunteers", location: "Uptown", about: "Caring for abandoned pets.", events: ["Adoption Day - March 18", "Pet Walk - March 25"] },
];

export default function OrganizationPage() {
    const { id } = useParams();
    const router = useRouter();
    const org = sampleData.find((o) => o.id === Number(id));

    if (!org) return <p>Organization not found</p>;

    return (
        <div className="p-4">
            <button onClick={() => router.back()} className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                ← Back to Organizations
            </button>
            <h1 className="text-3xl font-bold">{org.name}</h1>
            <p className="mt-2">{org.about}</p>
            <h2 className="text-xl font-semibold mt-4">Upcoming Events</h2>
            <ul className="mt-2">
                {org.events.map((event, index) => (
                    <li key={index} className="p-2 bg-gray-100 rounded-md mt-2">{event}</li>
                ))}
            </ul>
        </div>
    );
}
