export function initializePortfolioData() {
  if (!localStorage.getItem("portfolio")) {
    const initialData = {
      about: "Hello! I am a frontend developer...",
      skills: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 90 },
      ],
      projects: [
        {
          title: "Portfolio Website",
          description: "A personal portfolio built with React",
          techStack: "React, Bootstrap",
          image: "https://via.placeholder.com/150",
        },
      ],
    };
    localStorage.setItem("portfolio", JSON.stringify(initialData));
    console.log("LocalStorage initialized"); // Debug
  }
}
