import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaJava, FaNodeJs, FaGithub, FaDocker, FaCode, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTableau, SiJupyter } from "react-icons/si"; // Corrected import

// Skills data with icons
const skills = [
  { name: "HTML", level: "Expert", icon: <FaHtml5 size={24} className="text-oliveGreen" /> },
  { name: "CSS", level: "Expert", icon: <FaCss3Alt size={24} className="text-oliveGreen" /> },
  { name: "JavaScript", level: "Advanced", icon: <FaJsSquare size={24} className="text-oliveGreen" /> },
  { name: "React", level: "Advanced", icon: <FaReact size={24} className="text-oliveGreen" /> },
  { name: "Python", level: "Advanced", icon: <FaPython size={24} className="text-oliveGreen" /> },
  { name: "Java", level: "Intermediate", icon: <FaJava size={24} className="text-oliveGreen" /> },
  { name: "Node.js", level: "Advanced", icon: <FaNodeJs size={24} className="text-oliveGreen" /> },
  { name: "MongoDB", level: "Intermediate", icon: <SiMongodb size={24} className="text-oliveGreen" /> },
  { name: "Tableau", level: "Intermediate", icon: <SiTableau size={24} className="text-oliveGreen" /> },
];

// Tools data with icons
const tools = [
  { name: "VS Code", icon: <FaCode size={24} className="text-oliveGreen" /> },
  { name: "Git", icon: <FaGitAlt size={24} className="text-oliveGreen" /> },
  { name: "Jupyter Notebook", icon: <SiJupyter size={24} className="text-oliveGreen" /> },
  { name: "Docker", icon: <FaDocker size={24} className="text-oliveGreen" /> },
  { name: "GitHub", icon: <FaGithub size={24} className="text-oliveGreen" /> },
];

const Skills = () => (
  <div>
    {/* Skills Section */}
    <section className="py-20 bg-darkNavy text-offWhite" id="skills">
      <h3 className="text-3xl font-serif text-center text-oliveGreen mb-8">Skills</h3>
      {/* Technical Skills (Skill Bars) */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        {skills.map((skill, idx) => (
          <div key={idx} className="mb-6 flex items-center space-x-4">
            <div>{skill.icon}</div>
            <div>
              <h4 className="text-lg text-oliveGreen">{skill.name}</h4>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className={`bg-oliveGreen h-2 rounded-full`}
                  style={{
                    width:
                      skill.level === "Expert"
                        ? "100%"
                        : skill.level === "Advanced"
                        ? "75%"
                        : "50%",
                  }}
                ></div>
              </div>
              <p className="text-mutedGray">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Tools Section */}
    <section className="py-20 bg-darkNavy text-offWhite" id="tools">
      <h3 className="text-3xl font-serif text-center text-oliveGreen mb-8">Tools</h3>
      {/* Tools List with Icons */}
      <div className="text-center">
        <div className="flex justify-center space-x-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <div>{tool.icon}</div>
              <p className="text-mutedGray">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Skills;
