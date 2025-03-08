import Link from "next/link";

export default function NavBar() {
    return (
    <nav className="mb-4 justify-center items-center w-full space-x-4 p-4 bg-gray-100 shadow-md">
        <Link href="/" className="text-blue-500">Home</Link>
        <Link href="/organizations" className="text-blue-500">Organizations</Link>
        <Link href="/events" className="text-blue-500">Events</Link>
        <Link href="/calendar" className="text-blue-500">Calendar</Link>
    </nav>
    );
}