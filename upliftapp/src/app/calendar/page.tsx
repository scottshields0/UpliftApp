"use client";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "react-modal";
import { useEvents } from "@/app/context/eventsContext"; // Fetch public events
import { useRSVP } from "@/app/context/rsvpContext"; // Fetch & update RSVPed events

export default function CalendarPage() {
  const { events } = useEvents(); // Public events
  const { rsvpEvents, addRSVP } = useRSVP(); // RSVPed events
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // ✅ Fix: Ensure Modal only sets app element after the component mounts
  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  // Merge RSVPed and Public Events dynamically
  const allEvents = [...events, ...rsvpEvents];

  // Open Modal when clicking an event
  const openModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  // RSVP to an Event
  const handleRSVP = () => {
    if (!selectedEvent) return;
    addRSVP(selectedEvent); // Corrected RSVP function call
    closeModal();
  };

  return (
    <div className="flex justify-center items-start mt-10 space-x-10">
      {/* Calendar Section */}
      <div className="bg-white shadow-lg rounded-lg w-96">
        <h1 className="text-white text-center text-2xl font-bold bg-green-600 py-3 rounded-t-lg">
          My Calendar
        </h1>
        <div className="p-4 bg-gray-100 rounded-b-lg">
          <Calendar
            onChange={(newDate) => setDate(newDate)}
            value={date}
            locale="en-US"
            formatShortWeekday={(locale, date) =>
              ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
            }
            tileContent={({ date, view }) => {
              const formattedDate = date.toISOString().split("T")[0];
              const event = allEvents.find((e) => e.date === formattedDate);

              if (event) {
                return (
                  <span
                    className={`block text-sm font-semibold underline cursor-pointer ${
                      rsvpEvents.includes(event) ? "text-green-700" : "text-blue-600"
                    } hover:text-gray-900 transition`}
                    title={`Event: ${event.name}`}
                    onClick={() => openModal(event)}
                  >
                    {event.name}
                  </span>
                );
              }
              return null;
            }}
            className="rounded-lg border-none shadow-md"
          />
        </div>
      </div>

      {/* RSVP Events Section */}
      <div className="w-96">
        <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
          My RSVP Events
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-4">
          {rsvpEvents.length === 0 ? (
            <p className="text-gray-500 text-center">No RSVPed events yet.</p>
          ) : (
            <ul className="space-y-2">
              {rsvpEvents.map((event) => (
                <li
                  key={event.id}
                  className="p-3 bg-green-100 rounded-lg shadow cursor-pointer hover:bg-green-200 transition"
                  onClick={() => openModal(event)}
                >
                  <p className="text-lg font-semibold text-green-800">{event.name}</p>
                  <p className="text-gray-600">{event.date}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Event Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 rounded-lg shadow-lg w-96 mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex justify-center items-center"
      >
        {selectedEvent && (
          <div className="text-center">
            <h2
              className={`text-2xl font-bold ${
                rsvpEvents.includes(selectedEvent) ? "text-green-700" : "text-blue-700"
              }`}
            >
              {selectedEvent.name}
            </h2>
            <p className="text-gray-600 text-lg">{selectedEvent.date}</p>
            <p className="mt-4 text-gray-700">
              {rsvpEvents.includes(selectedEvent)
                ? "You have already RSVPed for this event!"
                : "This is a public event. Would you like to RSVP?"}
            </p>

            {!rsvpEvents.includes(selectedEvent) && (
              <button
                className="mt-4 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition shadow-md"
                onClick={handleRSVP}
              >
                RSVP Now
              </button>
            )}

            <button
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition shadow-md ml-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

