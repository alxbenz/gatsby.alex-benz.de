import React from "react";

interface NuxtProps {
    className?: string;
}

export const Nuxt: React.FC<NuxtProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 61 40"
            className={className}
        >
            <path
                fill="currentColor"
                d="M33.997 39.539h22.528c.715 0 1.418-.183 2.038-.53a4.014 4.014 0 0 0 1.492-1.447 3.861 3.861 0 0 0 .545-1.977 3.86 3.86 0 0 0-.547-1.977L44.923 8.19a4.016 4.016 0 0 0-1.49-1.447 4.172 4.172 0 0 0-2.038-.53c-.716 0-1.418.183-2.038.53a4.016 4.016 0 0 0-1.492 1.447l-3.868 6.504-7.563-12.718A4.018 4.018 0 0 0 24.942.53 4.175 4.175 0 0 0 22.904 0c-.716 0-1.419.183-2.039.53a4.018 4.018 0 0 0-1.492 1.446L.547 33.608A3.861 3.861 0 0 0 0 35.585c0 .694.188 1.376.545 1.977.358.601.873 1.1 1.492 1.447.62.347 1.323.53 2.038.53h14.141c5.603 0 9.735-2.387 12.578-7.044l6.902-11.596 3.698-6.205 11.096 18.64H37.695l-3.699 6.205Zm-16.011-6.212-9.869-.002L22.91 8.474l7.381 12.425-4.942 8.305c-1.888 3.022-4.033 4.123-7.363 4.123Z"
            />
        </svg>
    );
};
