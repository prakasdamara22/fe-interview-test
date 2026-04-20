import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.heading}>
          Frontend Interview Test 🚀
        </h1>
        <p style={styles.subtitle}>
          Selamat datang! Selesaikan tantangan CRUD Posts menggunakan React,
          React Router v6, dan Axios.
        </p>
        <Link to="/posts" style={styles.cta}>
          Mulai → Lihat Posts
        </Link>
      </div>

      <div style={styles.cards}>
        <div style={styles.infoCard}>
          <span style={styles.icon}>📋</span>
          <h3 style={styles.cardTitle}>List Posts</h3>
          <p style={styles.cardDesc}>Tampilkan semua posts dengan opsi delete per item.</p>
        </div>
        <div style={styles.infoCard}>
          <span style={styles.icon}>🔍</span>
          <h3 style={styles.cardTitle}>Detail Post</h3>
          <p style={styles.cardDesc}>Halaman detail lengkap tiap post.</p>
        </div>
        <div style={styles.infoCard}>
          <span style={styles.icon}>✏️</span>
          <h3 style={styles.cardTitle}>Create & Edit</h3>
          <p style={styles.cardDesc}>Form untuk membuat dan mengubah data post.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 24px",
  },
  hero: {
    textAlign: "center",
    marginBottom: "60px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#cdd6f4",
    margin: "0 0 16px 0",
    letterSpacing: "-0.03em",
  },
  subtitle: {
    color: "#a6adc8",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "32px",
    maxWidth: "500px",
    margin: "0 auto 32px",
  },
  cta: {
    display: "inline-block",
    backgroundColor: "#89b4fa",
    color: "#1e1e2e",
    padding: "12px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "1rem",
    transition: "opacity 0.2s",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
  },
  infoCard: {
    backgroundColor: "#181825",
    border: "1px solid #313244",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  icon: { fontSize: "1.8rem" },
  cardTitle: {
    color: "#cdd6f4",
    margin: 0,
    fontSize: "1rem",
    fontWeight: "600",
  },
  cardDesc: {
    color: "#6c7086",
    margin: 0,
    fontSize: "0.875rem",
    lineHeight: "1.5",
  },
};

export default Home;
