import { motion } from "framer-motion"

const projects = [
  {
    title: "Full Stack Personal Portfolio",
    duration: "Jul 2025",
    org: "Guru Gobind Singh Indraprastha University",
    description:
      "Developed a full-stack personal portfolio featuring a contact form with MongoDB integration and an admin dashboard to manage and view user messages.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Web Development & Designing",
    duration: "Apr 2024 – Jul 2025",
    org: "Oasis Infobyte",
    description:
      "Designed multiple responsive web projects including portfolio websites, landing pages, and utility tools like a temperature converter. Focused on UI/UX, responsiveness, and clean design principles.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    title: "Online Reservation System (Java)",
    duration: "Apr 2024 – Jun 2025",
    org: "Oasis Infobyte",
    description:
      "Built a Java-based train reservation system with user authentication, booking, and cancellation features. Implemented database-driven operations to manage PNR details securely.",
    tech: ["Java", "OOP", "SQL", "Data Structures"],
  },
  {
    title: "Smart Duster for Buses",
    duration: "Jun 2024 – Jun 2025",
    org: "AICTE Idea Lab, GGSIPU",
    description:
      "Developed an IoT-based automated dust collection system for buses using sensors and vacuum mechanisms. Focused on energy efficiency, sustainability, and reduced manual cleaning.",
    tech: ["C", "Python", "IoT", "Sensors", "Fusion 360"],
  },
  {
    title: "Hospital Management System",
    duration: "Dec 2024 – May 2025",
    org: "Guru Gobind Singh Indraprastha University",
    description:
      "Created a complete hospital management system including patient records, appointments, billing, role-based login, and admin analytics dashboard.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MongoDB"],
  },
  {
    title: "Food Management Web App",
    duration: "Jan 2025",
    org: "Personal Project",
    description:
      "Built a responsive food management web application with modern UI, interactive JavaScript features, and clean UX optimized for all devices.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "IBM SkillsBuild Data Analytics Capstone",
    duration: "Jun 2024 – Aug 2024",
    org: "IBM SkillsBuild & CSRBOX",
    description:
      "Completed a 6-week data analytics internship involving dataset analysis, visualization, and insight generation using industry-standard tools.",
    tech: ["Data Analysis", "Excel", "Python", "Visualization"],
  },
  {
    title: "Animated Login Form (HeartBeat)",
    duration: "Jun 2024",
    org: "GGSIPU",
    description:
      "Designed an animated and interactive login form using HTML, CSS animations, and JavaScript to enhance user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "LoginWeb",
    duration: "Jan 2024 – Feb 2024",
    org: "Personal Project",
    description:
      "Created a responsive login page with a minimal UI, optimized for mobile and desktop devices, and hosted on GitHub Pages.",
    tech: ["HTML", "CSS"],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>Projects & Experience</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h3 style={{ color: "#38bdf8" }}>{project.title}</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                {project.org} • {project.duration}
              </p>

              <p style={{ marginTop: "12px" }}>{project.description}</p>

              <div style={{ marginTop: "15px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      background: "rgba(56,189,248,0.15)",
                      color: "#38bdf8",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
