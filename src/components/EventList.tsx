import { useState, useEffect, memo } from 'react';

// Type for a single calendar event
interface CalendarEvent {
    id: string;
    summary: string;
    description?: string;
    start: {
        date?: string;
        dateTime?: string;
    };
}

export const EventList = memo(() => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            setError(null);

            const apiKey = '';
            const calendarId = '9e81f4c3ea315ce91604ee42366ad1619424923f0fa6b34a535b45f6ffa75ecb@group.calendar.google.com';
            const timeMin = new Date().toISOString();
            const googleApiUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&maxResults=4&singleEvents=true&orderBy=startTime`;

            try {
                const response = await fetch(googleApiUrl);
                if (!response.ok) {
                    if (response.status === 400) {
                        setError('API key is missing or invalid.');
                    } else {
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                    setEvents([]);
                } else {
                    const data = await response.json();
                    setEvents(data.items || []);
                }
            } catch (err) {
                setError('Failed to fetch events.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
        const intervalId = setInterval(fetchEvents, 3 * 60 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (event: CalendarEvent): string => {
        if (!event.start) return 'Date not available';
        const dateStr = event.start.date || event.start.dateTime;
        if (!dateStr) return 'Date not available';

        const date = new Date(dateStr);

        if (event.start.dateTime) {
            const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
            return date.toLocaleString('en-US', options);
        }
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', timeZone: 'UTC' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div>
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Upcoming Events</h2>
            {loading && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Loading events...</p>}
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
            {!loading && !error && (
                <div className="mt-2 space-y-2">
                    {events.length > 0 ? events.map(event => (
                        <div key={event.id} className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded-md text-sm">
                            <p className="font-bold text-gray-800 dark:text-gray-200">{event.summary}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{formatDate(event)}</p>
                            {event.description && (
                                <p className="text-xs text-gray-500 dark:text-gray-400 pt-2 mt-2 border-t border-gray-200 dark:border-gray-600 whitespace-pre-wrap">
                                    {event.description}
                                </p>
                            )}
                        </div>
                    )) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">No upcoming events.</p>
                    )}
                </div>
            )}
        </div>
    );
});