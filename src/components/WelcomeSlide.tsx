import { memo } from 'react';
import { Slide } from './Slide';

export const WelcomeSlide = memo(() => (
    <Slide>
        <h2 className="text-4xl font-extrabold text-green-700 dark:text-green-400 mb-4">Hello, World!</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
            We are a student-led organization focused on developing our skills, building our community, and making cool robots!
        </p>
    </Slide>
));