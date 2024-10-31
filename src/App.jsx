import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import HomeContent from "./sections/HomeContent";
import About from "./sections/About";
import SkillsSection from "./sections/SkillsSection";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import './index.css'; // Import your CSS file

function App() {
    const [activeTab, setActiveTab] = useState("home");
    const [showGreeting, setShowGreeting] = useState(true);
    const [greetingText, setGreetingText] = useState("");
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [fadeClass, setFadeClass] = useState(""); // For managing fade classes
    const fullGreeting = "  Welcome";

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullGreeting.length - 1) {
                setGreetingText((prev) => prev + fullGreeting[index]);
                index++;
            } else {
                clearInterval(typingInterval);
                setIsFadingOut(true);
                setTimeout(() => setShowGreeting(false), 1000);
            }
        }, 100);
        return () => clearInterval(typingInterval);
    }, []);

    const sections = {
        home: <HomeContent />,
        about: <About />,
        skills: <SkillsSection />,
        portfolio: <Portfolio />,
        contact: <Contact />
    };

    const handleTabClick = (tab) => {
        // Start the fade-out animation
        setFadeClass("fade-out");

        // Wait for fade-out to complete before changing the tab
        setTimeout(() => {
            setActiveTab(tab);
            setFadeClass("fade-in");
        }, 500); // Match this duration with your fade-out animation duration
    };

    return (
        <div className="bg-gray-950 min-h-screen flex flex-col text-gray-300 font-sans select-none overflow-hidden">
            <Header activeTab={activeTab} handleTabClick={handleTabClick} />
            <main className="flex-grow flex flex-col items-center justify-center">
                {showGreeting ? (
                    <Greeting greetingText={greetingText} isFadingOut={isFadingOut} />
                ) : (
                    <div className={`w-full max-w-6xl mx-auto px-4 py-8 flex-grow ${fadeClass}`}>
                        {sections[activeTab]}
                    </div>
                )}
            </main>
            <Footer className="mt-auto" />
        </div>
    );
}

export default App;
