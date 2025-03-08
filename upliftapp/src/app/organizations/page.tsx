import { useEffect, useState } from "react";

type Organization = {
    id: number;
    name: string;
    location: string;
};

export default function Organizations() {
    const [organizations, setOrganizations] = useState<Organization[]>([]);

    useEffect(() => {
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
                {org.name} - {org.location}
                </li>
            ))}
            </ul>
            </div>
            );
}
