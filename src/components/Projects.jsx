import React from "react";

const webDevelopmentProjects = [
  {
    title: "Fullstack Real Estate Listing Website",
    description: "A dynamic web app for listing real estate properties, built with the MERN stack and Firebase for user authentication.",
    tech: "HTML, CSS, Tailwind CSS, JS, React, Node.js, Express.js, Redux, MongoDB, JWT, Firebase, Render",
    github: "https://github.com/your-github/repo-link"
  }
];

const aiMlProjects = [
  {
    title: "Travel Management Software",
    description: "A comprehensive solution for managing travel bookings and itineraries, built with Java and Spring Boot.",
    tech: "Java, Spring Boot",
    github: "https://github.com/your-github/repo-link"
  },
  {
    title: "Exploratory Data Analysis of Geolocational Data",
    description: "An analytical project using Python and machine learning libraries to explore geographic data trends and insights.",
    tech: "Python, Numpy, Pandas, Keras, Scikit Learn, Restful APIs, Seaborn, Matplotlib",
    github: "https://github.com/your-github/repo-link"
  },
  {
    title: "Image Forgery Detection Model",
    description: "A machine learning model developed to detect forged images, utilizing deep learning techniques and data visualization.",
    tech: "Python, Seaborn, Matplotlib, Keras",
    github: "https://github.com/your-github/repo-link"
  },
  {
    title: "Sudoku Solver using Backtracking",
    description: "A C++ program implementing backtracking algorithms to solve Sudoku puzzles efficiently.",
    tech: "C++",
    github: "https://github.com/your-github/repo-link"
  },
  {
    title: "Detection of Parkinson’s Disease",
    description: "A machine learning model built to predict Parkinson’s disease based on clinical data, using Scikit-learn and Pickle.",
    tech: "Python, NumPy, pandas, pandas profiling, Matplotlib, Seaborn, Scikit-learn, Pickle",
    github: "https://github.com/your-github/repo-link"
  },
  {
    title: "Movie Recommendation",
    description: "A recommendation system designed to suggest movies to users, built with Python, Surprise library, and Scikit-learn.",
    tech: "Python, NumPy, Pandas, Surprise Library, Scikit-learn",
    github: "https://github.com/your-github/repo-link"
  },
  {
    title: "Car Price Prediction",
    description: "A regression model to predict car prices based on various features, developed using Python, Scikit-learn, and data visualization tools like Matplotlib.",
    tech: "Python, Numpy, Pandas, Scikit-learn, Matplotlib",
    github: "https://github.com/your-github/repo-link"
  }
];

const Projects = () => (
  <section className="py-20 bg-darkNavy text-offWhite" id="projects">
    <h3 className="text-3xl font-serif text-center text-oliveGreen mb-8">Projects</h3>

    {/* Web Development Projects */}
    <div>
      <h4 className="text-2xl font-semibold text-oliveGreen mb-4">Web Development</h4>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {webDevelopmentProjects.map((project, idx) => (
          <div key={idx} className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl">
            <h4 className="text-xl font-semibold text-oliveGreen mb-2">{project.title}</h4>
            <p className="text-mutedGray mb-4">{project.description}</p>
            <p className="text-mutedGray mb-4">{project.tech}</p>
            {project.github && (
              <a href={project.github} className="text-oliveGreen hover:underline">View on GitHub</a>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* AI/ML Projects */}
    <div className="mt-12">
      <h4 className="text-2xl font-semibold text-oliveGreen mb-4">AI/ML Projects</h4>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {aiMlProjects.map((project, idx) => (
          <div key={idx} className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl">
            <h4 className="text-xl font-semibold text-oliveGreen mb-2">{project.title}</h4>
            <p className="text-mutedGray mb-4">{project.description}</p>
            <p className="text-mutedGray mb-4">{project.tech}</p>
            {project.github && (
              <a href={project.github} className="text-oliveGreen hover:underline">View on GitHub</a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
