import { memo } from 'react';
import { Slide } from './Slide';

export const UNTProjectsSlide = memo(() => (
    <Slide>
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">Projects & Competitions</h2>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300">VEX U</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">College-level robotics competition pushing the limits of design.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300">Combat Robotics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Design, build, and battle remote-controlled fighting robots.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300">IEEE R5</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tackle the annual IEEE robotics challenge against other universities.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300">Botathon</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Our starter competition for newcomers to get hands-on experience.</p>
            </div>
        </div>
    </Slide>
));