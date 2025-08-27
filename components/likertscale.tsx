import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface LikertScaleProps {
    label?: string;
    register: UseFormRegisterReturn<string>;
    errors?: string;
}

const LikertScale: React.FC<LikertScaleProps> = ({ label, register, errors }) => {
    const options = [
        { label: "Strongly disagree", value: 1 },
        { label: "Disagree", value: 2 },
        { label: "Neutral", value: 3 },
        { label: "Agree", value: 4 },
        { label: "Strongly agree", value: 5 },
    ];

    return (
        <div className="mb-4">
            {label && <label className="block font-medium mb-2">{label}</label>}
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2 pl-14 pr-14">
            {options.map((option, index) => (
                <React.Fragment key={option.value}>
                    <label className="flex flex-col items-center">
                        <input
                            type="radio"
                            value={option.value}
                            {...register}
                            className="form-radio"
                        />
                        <span className="text-xs mt-1">{option.label}</span>
                    </label>
                    {index < options.length - 1 && <hr className="w-px h-6 bg-gray-400 mx-2" />}
                </React.Fragment>
            ))}
            </div>
            {errors && <span className="text-sm text-destructive">{errors}</span>}
        </div>
    );
};

export default LikertScale;