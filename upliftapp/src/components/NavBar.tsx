import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="mb-6 flex justify-center items-center w-full p-5 bg-white shadow-lg border-b border-gray-200">
            <div className="flex space-x-8 text-xl font-bold">
                <Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-200">
                    Home
                </Link>
                <Link href="/organizations" className="text-blue-600 hover:text-blue-800 transition duration-200">
                    Organizations
                </Link>
                <span className="text-4xl font-extrabold text-green-700 tracking-wide">
                    UPLIFT
                </span>
                <Link href="/events" className="text-blue-600 hover:text-blue-800 transition duration-200">
                    Events
                </Link>
                <Link href="/calendar" className="text-blue-600 hover:text-blue-800 transition duration-200">
                    Calendar
                </Link>
            </div>
        </nav>
    );
}

