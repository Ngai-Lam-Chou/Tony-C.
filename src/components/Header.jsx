import { User, Code, Folder, Mail } from "lucide-react";

function Header({ activeTab, handleTabClick }) {
    return (
        <header className="bg-gray-950 shadow-lg py-3 px-6 text-white flex justify-center items-center h-16 w-full font-semibold text-2xl select-none sticky top-0 z-10">
            <div className="flex items-center justify-between max-w-6xl w-full mx-auto">
                <div className="font-bold text-3xl select-none">
                    <a
                        href="#"
                        onClick={() => handleTabClick("home")}
                        className="hover:text-blue-400 transition-all duration-200"
                    >
                        Tony C.
                    </a>
                </div>
                <nav>
                    <ol className="flex space-x-6">
                        {[
                            { label: "About Me", icon: <User />, id: "about" },
                            { label: "Skills", icon: <Code />, id: "skills" },
                            { label: "Portfolio", icon: <Folder />, id: "portfolio" },
                            { label: "Contact", icon: <Mail />, id: "contact" },
                        ].map(({ label, icon, id }) => (
                            <li key={id}>
                                <a
                                    href="#"
                                    onClick={() => handleTabClick(id)}
                                    className={`flex items-center transition-all duration-200 hover:text-blue-400 ${
                                        activeTab === id ? "text-blue-400 text-2xl" : ""
                                    }`}
                                >
                                    {icon}
                                    <span className="align-middle ml-1">{label}</span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </header>
    );
}

export default Header;
