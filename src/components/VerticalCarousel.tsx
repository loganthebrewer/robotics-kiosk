import { memo } from "react";

interface VerticalCarouselProps {
    images: string[];
    speed?: number; // seconds for one loop
}

export const VerticalCarousel = memo(({ images, speed = 10 }: VerticalCarouselProps) => {
    return (
        <div
            className="relative w-64 h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        >
            <div
                className="flex flex-col animate-scroll-vertical"
                style={{ animationDuration: `${speed}s` }}
            >
                {[...images, ...images].map((src, idx) => (
                    <div key={idx} className="flex-shrink-0 h-64 w-full py-1"> {/* each image cell */}
                        <img
                            src={src}
                            alt={`carousel-${idx}`}
                            className="object-cover w-full h-full rounded-lg shadow"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
});