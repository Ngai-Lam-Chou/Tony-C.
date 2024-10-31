import React from "react";
import Skill from "./Skill";

const skills = [
    { 
        label: "Python", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        isGoodAt: true,
        category: "Programming Languages" 
    },

    { 
        label: "JavaScript", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        isGoodAt: true,
        category: "Programming Languages"
    },
    { 
        label: "C", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        isGoodAt: false,
        category: "Programming Languages" 
    },
    { 
        label: "C++", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        isGoodAt: false,
        category: "Programming Languages" 
    },
    { 
        label: "Java", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        isGoodAt: false,
        category: "Programming Languages" 
    },
    { 
        label: "TypeScript", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        isGoodAt: false,
        category: "Programming Languages" 
    },
    { 
        label: "React", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        isGoodAt: true,
        category: "Frontend/Web Development"
    },
    { 
        label: "HTML5", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        isGoodAt: false,
        category: "Frontend/Web Development"
    },
    { 
        label: "CSS3", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        isGoodAt: false,
        category: "Frontend/Web Development"
    },
    { 
        label: "Django", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        isGoodAt: false,
        category: "Backend Development"
    },
    { 
        label: "Tailwindcss", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        isGoodAt: true,
        category: "Frontend/Web Development"
    },
    { 
        label: "Node.js", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        isGoodAt: true,
        category: "Backend Development"
    },
    { 
        label: "Flask", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        isGoodAt: true,
        category: "Backend Development"
    },
    { 
        label: "Express.js", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        isGoodAt: true,
        category: "Backend Development"
    },
    { 
        label: "MySQL", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        isGoodAt: true,
        category: "Database"
    },
    { 
        label: "MongoDB", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        isGoodAt: true,
        category: "Database"
    },
    { 
        label: "PostgreSQL", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        isGoodAt: false,
        category: "Database"
    },
    { 
        label: "Pytest", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg",
        isGoodAt: true,
        category: "Software Testing"
    },
    { 
        label: "Docker", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        isGoodAt: false,
        category: "DevOps and Infra-Architecture"
    },
    { 
        label: "Jenkins", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
        isGoodAt: false,
        category: "DevOps and Infra-Architecture"
    },
    { 
        label: "Github Actions", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        isGoodAt: false,
        category: "DevOps and Infra-Architecture"
    },
    { 
        label: "Git", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        isGoodAt: true,
        category: "Software Development"
    },
    { 
        label: "Github", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        isGoodAt: false,
        category: "Software Development"
    },
    { 
        label: "Linux", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        isGoodAt: true,
        category: "Software Development"
    },
    { 
        label: "Bash", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
        isGoodAt: true,
        category: "Software Development"
    },
    { 
        label: "Powershell", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg",
        isGoodAt: true,
        category: "Software Development"
    },
    { 
        label: "Pytorch", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
        isGoodAt: false,
        category: "Machine Learning"
    },
    { 
        label: "Tensorflow", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
        isGoodAt: false,
        category: "Machine Learning"
    },
    { 
        label: "R", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
        isGoodAt: false,
        category: "Data analysis"
    },
    { 
        label: "Pandas", 
        svgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
        isGoodAt: false,
        category: "Data analysis"
    },
];

const categories = [
    "Programming Languages",
    "Frontend/Web Development",
    "Backend Development",
    "Database",
    "Software Testing",
    "DevOps and Infra-Architecture",
    "Software Development",
    "Machine Learning",
    "Data analysis"
];

const SkillsSection = () => {
    return (
        <div className="p-4 overflow-hidden"> {/* Adjusted to prevent overflow */}
            {categories.map((category) => (
                <div key={category} className="mb-6">
                    <h2 className="text-2xl font-bold mb-3 text-gray-200">
                        {category}
                    </h2>
                    <div className="grid grid-cols-8 gap-2"> {/* Remove overflow-hidden here */}
                        {skills
                            .filter(skill => skill.category === category)
                            .map((skill) => (
                                <Skill
                                    key={skill.label}
                                    {...skill}
                                    backgroundColor="#FFFFFF"
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};



export default SkillsSection;