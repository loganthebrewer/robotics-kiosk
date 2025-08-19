import { memo } from 'react';
import { Slide } from './Slide';

export const JoinSlide = memo(() => (
    <Slide>
        <h2 className="text-4xl font-extrabold text-green-700 dark:text-green-400 mb-4">Get Involved!</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            The best way to join is to just show up! Attend our <strong>meetings every other Wednesday</strong> to meet the team and find a project that interests you.
        </p>
    </Slide>
));
