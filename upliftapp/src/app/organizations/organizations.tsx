"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Organization = {
    id: number;
    name: string;
    location: string;
};

export default function Organizations() {
    const [organizations, setOrganizations] = useState<Organization[]>([]);

    useEffect(() => {
        // Replace this with an actual API call
        setOrganizations([
            { id: 1, name: "Local Food Bank", location: "Downtown" },
            { id: 2, name: "Animal Shelter Volunteers", location: "Uptown" },
        ]);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Organizations</h1>
            <ul className="mt-4">
                {organizations.map((org) => (
                    <li key={org.id} className="p-2 bg-gray-100 rounded-md mt-2">
                        <Link href={`/organizations/${org.id}`} className="text-blue-600 hover:underline">
                            {org.name} - {org.location}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
