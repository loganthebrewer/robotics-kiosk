import { memo } from 'react';
import { Slide } from './Slide';
import { VerticalCarousel } from './VerticalCarousel';

export const BotathonSlide = memo(() => (
    <Slide className="h-full self-start w-full">
        <div className="w-full h-full max-w-6xl mx-auto flex flex-row items-center relative">
            {/* Left content */}
            <div className="flex-1 flex flex-col gap-6 pr-8 transform translate-x-1/8">
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
                    Botathon
                </h2>
                <p>
                    Get involved with our annual robotics competition, <strong>Botathon</strong>.
                    <br/>
                    Build a robot with the assistance of our experienced robotics team, <strong>no experience required!</strong>
                </p>
            </div>

            {/* Right content (carousel) */}
            <div className="flex-1 h-full flex justify-center">
                <div className="transform translate-x-1/8">
                    <VerticalCarousel
                        images={[
                            "/twinsbot.jpg",
                            "/trophies.JPG",
                            "/victoryshot.JPG",
                            "/bri-and-kait.JPG",
                            "/street-kitty.jpg"
                        ]}
                        speed={15}
                    />
                </div>
            </div>
        </div>
    </Slide>
));

