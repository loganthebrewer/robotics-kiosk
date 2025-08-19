import { memo } from 'react';
import { Slide } from './Slide';

export const ProjectsSlide = memo(() => (
    <Slide>
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">Projects & Competitions</h2>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300">Scrapp-E</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Help build our new robotic best friend!</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300">Robomaster NA</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">A yearly FPS-style competition. Build a robot and pilot it with a keyboard and mouse!</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300">NASA Open-Source Rover</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Program and move a NASA-designed rover!</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-300">Botathon</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Our yearly in-house competition. Build a bot and put it to work!</p>
            </div>
        </div>
    </Slide>
));