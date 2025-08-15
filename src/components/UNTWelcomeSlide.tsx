import { memo } from 'react';
import { Slide } from './Slide';

export const UNTWelcomeSlide = memo(() => (
    <Slide>
        <h2 className="text-4xl font-extrabold text-green-700 dark:text-green-400 mb-4">Welcome to UNT Robotics</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            We are a student-led organization at the University of North Texas focused on developing our community, our skills, and epic robots.
        </p>
    </Slide>
));