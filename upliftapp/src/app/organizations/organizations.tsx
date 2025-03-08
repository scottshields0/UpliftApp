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
        <div className="p-6 max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Organizations</h1>
            
            {/* Organization List */}
            <div className="grid gap-4">
                {organizations.map((org) => (
                    <Link key={org.id} href={`/organizations/${org.id}`} className="block">
                        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
                            <h2 className="text-xl font-semibold text-green-700">{org.name}</h2>
                            <p className="text-gray-600">{org.location}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
