import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>
        📝 PostManager
      </Link>
      <div style={styles.links}>
        <NavLink
          to="/posts"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
          Posts
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 32px",
    backgroundColor: "#1e1e2e",
    borderBottom: "1px solid #313244",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  brand: {
    color: "#cdd6f4",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "1.2rem",
    letterSpacing: "-0.02em",
  },
  links: {
    display: "flex",
    gap: "8px",
  },
  link: {
    color: "#a6adc8",
    textDecoration: "none",
    padding: "6px 14px",
    borderRadius: "6px",
    fontSize: "0.9rem",
    transition: "all 0.2s",
  },
  activeLink: {
    backgroundColor: "#313244",
    color: "#cdd6f4",
  },
};

export default Navbar;
