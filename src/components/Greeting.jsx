import { useEffect } from "react";

function Greeting({ greetingText, isFadingOut, setShowGreeting, setShowHomeContent }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGreeting(false);
            setShowHomeContent(true);
        }, 3200);
        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);
    

    return (
        <div
            className={`fixed inset-0 bg-gray-950 flex justify-center items-center text-white text-6xl transition-opacity duration-1000 z-20 ${
                isFadingOut ? "opacity-0" : "opacity-100"
            }`}
        >
            <h1>{greetingText}</h1>
        </div>
    );
}

export default Greeting;
