import { memo, type ReactNode } from 'react';

interface SlideProps {
    children: ReactNode;
}

export const Slide = memo(({ children }: SlideProps) => (
    <div className="text-center p-8">
        {children}
    </div>
));