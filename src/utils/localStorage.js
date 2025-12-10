// src/utils/localStorage.js
export const LS_KEY = "portfolioData";
export const LEGACY_KEY = "store"; // your older key some components used

export function readData() {
  try {
    // try the canonical key first
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);

    // fallback to legacy key if present, and migrate it
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      const parsed = JSON.parse(legacy);
      // convert legacy shape to canonical if needed
      const converted = migrateLegacy(parsed);
      // persist converted under canonical key
      writeData(converted);
      return converted;
    }

    // nothing found -> return defaults
    return getDefaultData();
  } catch (e) {
    console.error("readData error", e);
    return getDefaultData();
  }
}

export function writeData(newData) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(newData));
  } catch (e) {
    console.error("writeData error", e);
  }
}

// If legacy shape used "about.stats" or "about.counters" we normalize to counters
function migrateLegacy(raw) {
  try {
    const out = { ...getDefaultData(), ...raw };

    if (raw.about) {
      out.about = { ...getDefaultData().about, ...raw.about };

      // legacy might call it stats — normalize to counters
      if (raw.about.counters) out.about.counters = raw.about.counters;
      else if (raw.about.stats) out.about.counters = raw.about.stats;
      // otherwise default counters from getDefaultData() already present
    }
    return out;
  } catch (e) {
    console.error("migrateLegacy error", e);
    return getDefaultData();
  }
}

// ----------------------------------------------------------------------
// DEFAULT DATA
// ----------------------------------------------------------------------
export function getDefaultData() {
  return {
    about: {
      title: "MERN Stack Developer",
      description: "I am a passionate MERN Stack developer.",
      // canonical key: counters
      counters: [
        { title: "Projects Completed", value: 10 },
        { title: "Years Experience", value: 1 },
        { title: "Happy Clients", value: 5 },
        { title: "Technologies mastered", value: 20 },
      ],
      email: "hello@samiksha.com",
    },

    // skills, projects, contact as before...
    skills: [
      { id: "s1", name: "HTML", level: 95 },
      { id: "s2", name: "CSS", level: 90 },
      { id: "s9", name: "Bootstrap", level: 80 },
      { id: "s3", name: "JavaScript", level: 85 },
      { id: "s4", name: "React", level: 80 },
      { id: "s5", name: "Java", level: 75 },
      { id: "s6", name: "Hibernate", level: 70 },
      { id: "s7", name: "Spring Boot", level: 70 },
      { id: "s8", name: "Git & GitHub", level: 85 },
      { id: "s10", name: "Spring", level: 75 },
    ],

    projects: [
      // ...keep your project objects


  {
    id: "p1",
    title: "Tech Solution Website",
    desc: "We help businesses transform ideas into powerful digital experiences through modern web development, cloud solutions, automation and custom software. Let’s build your next big thing—together.",
    tech: "HTML, CSS",
    image: "/project-1.png",
    demo: "/project/first_practice/index.html",
  },
  {
    id: "p2",
    title: "Plumbing Website",
    desc: "We understand how stressful plumbing issues can be. That’s why we provide same-day service, honest pricing, and quality workmanship Whether it’s pipeline leakage, broken taps, drainage, bathroom installation or water heater repair—our team handles it all.",
    tech: "HTML, CSS, Bootstrap, Javascript",
    image: "/project-2.png",
    demo: "/project/Bootstrap_task/index.html",
  },

  {
    id: "p3",
    title: "Repair Service Website",
    desc: "We provide fast, affordable, and trusted repair solutions for all major home appliances and electronic devices. From AC breakdowns to smartphone issues — we fix everything so you don’t have to worry.",
    tech: "HTML, CSS, Bootstrap, Javascript",
    image: "/project-3.png",
    demo: "/project/type 3 speed booster samiksha gajbhiye/index.html",
  },
  {
    id: "p4",
    title: "Glow Looks Hair Solution",
    desc: "Confidence Begins With Healthy Hair Get advanced, non-surgical and medically-approved hair treatments designed to restore your natural hair growth and boost your confidence again.",
    tech: "HTML, CSS, Bootstrap, Javascript",
    image: "/project-4.png",
    demo: "/project/samiksha/index.html",
  },

  {
    id: "p5",
    title: "DermaGlow Website",
    desc: "Dermaglow is a modern dermatology and aesthetic clinic focused on scientifically proven treatments for skin, acne, pigmentation, hair fall and beauty enhancement. We combine medical expertise with advanced technology to deliver safe, customized and effective results.",
    tech: "HTML, CSS, Bootstrap, Javascript",
    image: "/project-5.png",
    demo: "/project/samiksha gajbhiye/index.html",
  },
  {
    id: "p6",
    title: "Plumbing Website",
    desc: "We understand how stressful plumbing issues can be. That’s why we provide same-day service, honest pricing, and quality workmanship Whether it’s pipeline leakage, broken taps, drainage, bathroom installation or water heater repair—our team handles it all.",
    tech: "HTML, CSS, Bootstrap, Javascript",
    image: "/project-2.png",
    demo: "/project/Bootstrap_task/index.html",
  }

  
],

  

    contact: {
      email: "your@email.com",
      phone: "1234567890",
      address: "Your City, Country",
    },
  };
}
