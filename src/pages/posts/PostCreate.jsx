import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createPost } from "../../api/posts";

function PostCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError(null);

  // validasi
  if (!formData.title.trim() || !formData.body.trim()) {
    setError("Judul dan konten tidak boleh kosong");
    return;
  }

  try {
    setLoading(true);

    await createPost(formData);

    navigate("/posts");
  } catch (err) {
    setError(err.response?.data?.message || "Gagal membuat post");
  } finally {
    setLoading(false);
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>
        <Link to="/posts" style={styles.breadcrumbLink}>
          ← Kembali ke daftar
        </Link>
      </div>

      <div style={styles.card}>
        <h1 style={styles.title}>Buat Post Baru</h1>

        {error && <div style={styles.errorBox}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label} htmlFor="title">
              Judul <span style={styles.required}>*</span>
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Masukkan judul post..."
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label} htmlFor="body">
              Konten <span style={styles.required}>*</span>
            </label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              placeholder="Tuliskan isi post di sini..."
              rows={6}
              style={{ ...styles.input, ...styles.textarea }}
            />
          </div>

          <div style={styles.footer}>
            <Link to="/posts" style={styles.btnCancel}>
              Batal
            </Link>
            <button type="submit" style={styles.btnSubmit} disabled={loading}>
              {loading ? "Menyimpan..." : "Simpan Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "680px",
    margin: "0 auto",
    padding: "32px 24px",
  },
  breadcrumb: { marginBottom: "24px" },
  breadcrumbLink: {
    color: "#89b4fa",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
  card: {
    backgroundColor: "#181825",
    border: "1px solid #313244",
    borderRadius: "16px",
    padding: "32px",
  },
  title: {
    color: "#cdd6f4",
    fontSize: "1.5rem",
    fontWeight: "700",
    margin: "0 0 28px 0",
  },
  errorBox: {
    backgroundColor: "#2d1b1b",
    border: "1px solid #f38ba8",
    color: "#f38ba8",
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "20px",
    fontSize: "0.875rem",
  },
  form: { display: "flex", flexDirection: "column", gap: "20px" },
  field: { display: "flex", flexDirection: "column", gap: "8px" },
  label: { color: "#a6adc8", fontSize: "0.875rem", fontWeight: "500" },
  required: { color: "#f38ba8" },
  input: {
    backgroundColor: "#11111b",
    border: "1px solid #313244",
    borderRadius: "8px",
    padding: "10px 14px",
    color: "#cdd6f4",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: { resize: "vertical", minHeight: "120px" },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "8px",
  },
  btnCancel: {
    padding: "10px 20px",
    backgroundColor: "#313244",
    color: "#cdd6f4",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
  btnSubmit: {
    padding: "10px 24px",
    backgroundColor: "#89b4fa",
    color: "#1e1e2e",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "600",
    transition: "opacity 0.2s",
  },
};

export default PostCreate;
