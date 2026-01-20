import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "C / C++", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 65 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    title: "Web & Full Stack Development",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "React.js", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 65 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    title: "Java & Backend Technologies",
    skills: [
      { name: "Core Java", level: 85 },
      { name: "Java Swing", level: 70 },
      { name: "OOP Concepts", level: 85 },
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Relational Databases", level: 70 },
    ],
  },
  {
    title: "Data, AI & Analytics",
    skills: [
      { name: "Data Analysis", level: 75 },
      { name: "Artificial Intelligence", level: 65 },
      { name: "Machine Learning (Basics)", level: 60 },
      { name: "IBM SkillsBuild Analytics", level: 75 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "Autodesk Fusion 360", level: 70 },
      { name: "AutoCAD", level: 65 },
      { name: "3D Printing", level: 70 },
      { name: "IoT Systems", level: 65 },
      { name: "Code::Blocks / Dev C++", level: 70 },
    ],
  },
  {
    title: "Soft Skills & Leadership",
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Team Leadership", level: 80 },
      { name: "Event Planning", level: 75 },
      { name: "Cultural Awareness", level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h3 style={{ color: "#38bdf8", marginBottom: "15px" }}>
                {group.title}
              </h3>

              {group.skills.map((skill, i) => (
                <div key={i} style={{ marginBottom: "14px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div
                    style={{
                      height: "8px",
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: "6px",
                      overflow: "hidden",
                      marginTop: "6px",
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: "100%",
                        background:
                          "linear-gradient(135deg, #38bdf8, #2563eb)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
