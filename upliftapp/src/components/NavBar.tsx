import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="mb-4 flex justify-center items-center w-full p-4 bg-gray-100 shadow-md">
            <div className="flex space-x-4">
                <Link href="/" className="text-blue-500 text-lg font-medium hover:text-blue-700">Home</Link>
                <Link href="/organizations" className="text-blue-500 text-lg font-medium hover:text-blue-700">Organizations</Link>
                <span className="text-3xl font-semibold text-green-600">UPLIFT</span>
                <Link href="/events" className="text-blue-500 text-lg font-medium hover:text-blue-700">Events</Link>
                <Link href="/calendar" className="text-blue-500 text-lg font-medium hover:text-blue-700">Calendar</Link>
            </div>
        </nav>
    );
}
