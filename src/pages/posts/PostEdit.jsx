import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPostById, updatePost } from "../../api/posts";

function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // TODO: Fetch data post berdasarkan `id` saat komponen pertama kali di-render
  // Isi formData dengan data yang sudah ada (title dan body dari API)
  // Handle loading dan error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Implementasi update post
    // Validasi: title dan body tidak boleh kosong
    // Gunakan fungsi updatePost dari api/posts.js dengan parameter (id, formData)
    // Set submitting = true sebelum request, false setelah selesai
    // Setelah berhasil, redirect ke /posts/:id (halaman detail post)
    // Handle error jika request gagal
  };

  if (loading) return <div style={styles.center}>Loading...</div>;
  if (error && !formData.title)
    return <div style={styles.center}>Error: {error}</div>;

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>
        <Link to={`/posts/${id}`} style={styles.breadcrumbLink}>
          ← Kembali ke detail
        </Link>
      </div>

      <div style={styles.card}>
        <h1 style={styles.title}>Edit Post #{id}</h1>

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
            <Link to={`/posts/${id}`} style={styles.btnCancel}>
              Batal
            </Link>
            <button
              type="submit"
              style={styles.btnSubmit}
              disabled={submitting}
            >
              {submitting ? "Menyimpan..." : "Simpan Perubahan"}
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
    backgroundColor: "#a6e3a1",
    color: "#1e1e2e",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "600",
  },
};

export default PostEdit;
