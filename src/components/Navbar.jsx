import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link to="/" style={{ color: "white", marginRight: "10px" }}>
        Trang chủ
      </Link>

      <Link to="/about-us" style={{ color: "white", marginRight: "10px" }}>
        Giới thiệu
      </Link>

      <Link to="/contact" style={{ color: "white" }}>
        Liên hệ
      </Link>
    </nav>
  )
}

export default Navbar