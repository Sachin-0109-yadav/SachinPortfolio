import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import profile from "../assets/profile.jpg"

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Sachin Yadav</h1>
          <p>Software Developer | React | Angular | Java</p>
          <p>
            I build modern, high-performance web applications with clean UI and scalable architecture.
          </p>

          <a href="/Sachin.Resume.3108.pdf" download className="btn">
            Resume
          </a>

          <div className="socials">
            <a href="https://github.com/" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/" target="_blank"><FaLinkedin /></a>
          </div>
        </motion.div>

        <div className="hero-img">
          <img src={profile} alt="Sachin" />
        </div>

      </div>
    </section>
  )
}
