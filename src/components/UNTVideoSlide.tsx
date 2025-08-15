import { memo } from 'react';

export const UNTVideoSlide = memo(() => {
    const videoId = "DkTTeQijEZk";
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`;

    return (
        <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
            <iframe
                className="max-w-full max-h-full"
                style={{
                    aspectRatio: '9 / 16'
                }}
                src={embedUrl}
                title="UNT Robotics Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
});
