import { twMerge } from 'tailwind-merge';
import { memo, type ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
}

export const Slide = memo(({ children, className }: SlideProps) => (
    <div
        className={twMerge(
            // flex parent ensures horizontal + vertical centering
            "flex flex-col items-center justify-center w-full h-full text-center",
            className
        )}
    >
      {children}
    </div>
));
