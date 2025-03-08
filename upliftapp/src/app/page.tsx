"use client";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
            {/* Main Content (Moved Higher) */}
            <div className="text-center max-w-3xl">
                <h1 className="text-5xl font-extrabold text-gray-900">
                    Welcome to <span className="text-green-600">Uplift!</span>
                </h1>
                <p className="mt-4 text-xl text-gray-700 leading-relaxed">
                    We're here to help you connect with local <span className="font-semibold text-green-700">non-profits</span>, 
                    <span className="font-semibold text-green-700"> charities</span>, and <span className="font-semibold text-green-700">events</span>!
                    Follow organizations you like, RSVP for events you want to attend, track your events in the calendar, 
                    and message organizations with any questions you have!
                </p>

                {/* Call to Action Buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    <a href="/events" className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-full shadow-md hover:bg-green-700 transition">
                        🌟 Explore Events
                    </a>
                    <a href="/organizations" className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-700 transition">
                        🏢 Explore Organizations
                    </a>
                    <a href="/calendar" className="px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-full shadow-md hover:bg-purple-700 transition">
                        📅 Explore Calendar
                    </a>
                </div>
            </div>
        </div>
    );
}
