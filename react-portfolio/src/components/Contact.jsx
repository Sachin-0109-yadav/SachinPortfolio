import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>Contact Me</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {/* CONTACT DETAILS */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ color: "#38bdf8", marginBottom: "15px" }}>
              Let’s Connect 🤝
            </h3>

            <p style={{ marginBottom: "15px" }}>
              Feel free to reach out for internships, collaborations, or
              professional opportunities. I’m always open to meaningful
              discussions and learning experiences.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <Mail size={18} />
              <a href="mailto:sachin01092004yadav@gmail.com">
                sachin01092004yadav@gmail.com
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <MapPin size={18} />
              <span>India</span>
            </div>

            <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
              <a
                href="https://www.linkedin.com/in/sachin-31y08/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Linkedin size={20} /> LinkedIn
              </a>

              <a
                href="https://github.com/Sachin-0109-yadav"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </motion.div>

          {/* MAP */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d219.0575250063662!2d77.01397991836907!3d28.607640114905333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1768879531238!5m2!1sen!2sin"
              width="100%"
              height="280"
              style={{
                border: 0,
                borderRadius: "12px",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
