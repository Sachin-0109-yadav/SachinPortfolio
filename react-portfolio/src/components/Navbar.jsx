export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      width: "100%",
      top: 0,
      backdropFilter: "blur(15px)",
      background: "rgba(15,23,42,0.7)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      zIndex: 100
    }}>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "18px 0"
      }}>
        <strong style={{ color: "#38bdf8" }}>Sachin</strong>
        <div>
          <a href="#about" style={{ margin: "0 10px", color: "#e5e7eb" }}>About</a>
          <a href="#skills" style={{ margin: "0 10px", color: "#e5e7eb" }}>Skills</a>
          <a href="#projects" style={{ margin: "0 10px", color: "#e5e7eb" }}>Projects</a>
          <a href="#contact" style={{ margin: "0 10px", color: "#e5e7eb" }}>Contact</a>
        </div>
      </div>
    </nav>
  )
}
