import React from "react";

interface ToggleProps {
    onChangeHandler: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({ onChangeHandler }) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeHandler}
            />
            <div className="w-11 h-6 bg-slate-200 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-purple-600 peer-checked:bg-yellow-300"></div>
        </label>
    );
};
