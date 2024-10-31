import { useState } from "react";

function HomeContent() {
    const [hasWaved, setHasWaved] = useState(false);

    return (
        <div className="text-gray-400 mt-16 flex flex-col transition-opacity duration-1000 opacity-100">
            <div className="flex flex-col items-center mt-16">
                <h1 className="text-5xl font-bold text-gray-200 flex justify-center">
                    Hello, I&apos;m Tony
                    <span
                        className={`${!hasWaved ? "swing-once" : ""}`}
                        onAnimationEnd={() => setHasWaved(true)}
                    >
                        👋
                    </span>
                </h1>
                <h2 className="text-lg font-semibold text-gray-300">
                    Computer Science Student At British Columbia Institute of Technology
                </h2>
            </div>
        </div>
    );
}

export default HomeContent;
