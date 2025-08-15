import React, { memo } from 'react';
import { EventList } from './EventList';


export const Sidebar = memo(() => {
    const logoUrl = "/unt-robotics-brand-logo-white.svg";
    const qrCodeUrl = "/qrcode.jpg";


    return (
        <aside className="w-64 md:w-80 bg-white dark:bg-gray-800 flex flex-col shadow-lg">
            <div className="bg-green-700 dark:bg-green-800 p-4 sm:p-6 flex flex-col items-center text-center">
                <img
                    src={logoUrl}
                    alt="UNT Robotics Logo"
                    className="w-28 h-28 mb-4"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src='https://placehold.co/112x112/eeeeee/333333?text=Logo';
                    }}
                />
                <h1 className="text-2xl font-bold text-white dark:text-gray-100">UNT Robotics</h1>
            </div>


            <div className="p-4 sm:p-6 space-y-4 flex-1">
                <EventList />
            </div>


            <div className="p-4 sm:p-6">
                <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Join Us on Discord</h2>
                <img
                        src={qrCodeUrl}
                        alt="Discord QR Code"
                        className="w-42 h-42 mx-auto rounded-md shadow-md"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src='/qrcode.png';
                        }}
                />

                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">Scan to join!</p>
            </div>
        </aside>
    );
});
