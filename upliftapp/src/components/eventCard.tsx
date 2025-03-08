type EventProps = {
    name: string;
    description: string;
    date: string;
};

export default function EventCard({ name, description, date }: EventProps) {
    return (
    <div className="p-4 bg-gray-100 rounded-md mt-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500">📅 {date}</p>
        </div>
    );
}