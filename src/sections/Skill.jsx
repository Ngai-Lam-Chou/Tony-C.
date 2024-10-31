import React from "react";
import { Star } from "lucide-react";

const Skill = ({ svgUrl, label, isGoodAt }) => {
    return (
        <div className="flex flex-col items-center pt-4 pl-4">
            <div className="relative">
                {isGoodAt && (
                    <div className="absolute -top-2 -left-2">
                        <Star
                            size={24}
                            className="text-yellow-400 fill-yellow-400"
                        />
                    </div>
                )}
                <div className="w-20 h-20 rounded-md bg-white overflow-hidden flex items-center justify-center"> {/* Added flex centering */}
                    <img
                        src={svgUrl}
                        alt={`${label} icon`}
                        className="w-12 h-12 object-contain" // Changed to object-contain and removed unnecessary classes
                    />
                </div>
            </div>
            <span className="text-sm mt-2 font-semibold">
                {label}
            </span>
        </div>
    );
};

export default Skill;