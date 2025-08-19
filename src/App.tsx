import { useState, useEffect, type ComponentType } from 'react';

// Import slide components from their new files
import { WelcomeSlide } from './components/WelcomeSlide.tsx';
import { ProjectsSlide } from './components/ProjectsSlide.tsx';
//import { VideoSlide } from './components/VideoSlide.tsx';
import { JoinSlide } from './components/JoinSlide.tsx';
import { Sidebar } from './components/Sidebar';
import { BotathonSlide } from './components/BotathonSlide.tsx';

// --- Configuration ---
const DEFAULT_SLIDE_DURATION: number = 6000;

// --- Type Definitions ---
export interface SlideConfig {
    component: ComponentType<any>; // Changed from React.FC<any>
    duration?: number;
}

// --- Slides Configuration ---
const slideComponents: SlideConfig[] = [
    { component: WelcomeSlide, duration: 6000 },
    { component: ProjectsSlide, duration: 9000 },
    //{ component: VideoSlide, duration: 30000 },
    { component: JoinSlide, duration: 7000 },
    { component: BotathonSlide, duration: 10000 }
];

// --- Main App Component ---
const App = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // Effect for handling the slide transition timeout
    useEffect(() => {
        const currentSlideDuration = slideComponents[currentSlide].duration || DEFAULT_SLIDE_DURATION;
        const slideTimeout = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slideComponents.length);
        }, currentSlideDuration);
        return () => clearTimeout(slideTimeout);
    }, [currentSlide]);

    // Effect for injecting CSS animation styles
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(1rem); }
                to { opacity: 1; transform: translateY(0); }
            }
            .slide-animation {
                animation: fadeIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            }
        `;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, []);

    const CurrentSlideComponent = slideComponents[currentSlide].component;

    return (
        <div className="bg-green-900 dark:bg-gray-900 font-sans flex h-screen w-screen">
            <Sidebar />
            <main className="flex-1 p-4 sm:p-6 md:p-10 flex flex-col">
                <div className="relative flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 pb-16 overflow-hidden">
                    <div key={currentSlide} className="w-full h-full flex slide-animation">
                        <CurrentSlideComponent />
                    </div>
                    <div className="absolute bottom-6 flex space-x-3">
                        {slideComponents.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-green-500 ${
                                    currentSlide === index ? 'bg-green-600 scale-125' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                                }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;