"use client";

import EventCard from "@/components/eventCard";

export default function Events() {
    return (
    <div className="p-4">
        <h1 className="text-2xl font-bold">Upcoming Events</h1>
        <EventCard 
        name="Community Cleanup"
        description="Join us to clean up the park this Saturday!"
        date="March 15, 2025"
        />
    </div>
    );
}