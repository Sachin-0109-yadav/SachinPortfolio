import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>About Me</h2>

        <div className="card">
          <h3 style={{ color: "#38bdf8", marginBottom: "15px" }}>
            B.Tech Computer Science
          </h3>

          <p>
            I am a passionate <strong>Computer Science Engineering student</strong> at
            <strong> Guru Gobind Singh Indraprastha University</strong> with a strong
            interest in building impactful software solutions. I enjoy transforming
            ideas into real-world applications using modern technologies and clean
            development practices.
          </p>

          <p style={{ marginTop: "16px" }}>
            My technical foundation includes <strong>Java</strong>,
            <strong> Full Stack Web Development</strong>, and
            <strong> Data Analytics</strong>. I actively explore emerging technologies,
            frameworks, and tools to continuously improve my problem-solving ability
            and technical expertise.
          </p>

          <p style={{ marginTop: "16px" }}>
            I have hands-on experience across multiple domains including web
            development, database management, data analytics, artificial intelligence,
            IoT systems, and digital fabrication. I am comfortable working with
            technologies such as C/C++, JavaScript, SQL, MySQL, basic PostgreSQL, and
            tools like Autodesk Fusion 360, along with exposure to AI and ML concepts
            through industry-recognized internships.
          </p>

          <p style={{ marginTop: "16px" }}>
            Alongside technical skills, I bring strong soft skills such as
            <strong> analytical thinking</strong>, <strong>team collaboration</strong>,
            and <strong>effective communication</strong>, enabling me to work
            efficiently in collaborative and fast-paced environments.
          </p>

          <h4 style={{ marginTop: "28px", color: "#38bdf8" }}>
            🎯 Career Objective
          </h4>

          <p style={{ marginTop: "10px" }}>
            I am actively seeking <strong>internship</strong> or
            <strong> project-based opportunities</strong> in
            <strong> Software Development</strong>,
            <strong> Java Development</strong>, or
            <strong> Data Analytics</strong>, where I can apply my knowledge, learn from
            experienced mentors, and contribute to innovative, technology-driven
            solutions.
          </p>

          <p style={{ marginTop: "16px" }}>
            I am particularly enthusiastic about building tools and systems that drive
            <strong> positive societal and environmental impact</strong>.
          </p>

          <h4 style={{ marginTop: "28px", color: "#38bdf8" }}>
            🤝 Let’s Connect
          </h4>

          <p style={{ marginTop: "10px" }}>
            I am always open to networking, learning, and collaborating on meaningful
            projects. Feel free to reach out to discuss ideas, internships, or potential
            opportunities — let’s build something impactful together 🚀
          </p>
        </div>
      </motion.div>
    </section>
  )
}
