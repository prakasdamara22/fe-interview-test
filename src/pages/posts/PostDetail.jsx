import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPostById, deletePost } from "../../api/posts";
import { useLocation } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: Fetch single post berdasarkan `id` dari useParams()
  // Gunakan fungsi getPostById dari api/posts.js
  // Handle loading dan error state
  useEffect(() => {
  const fetchPost = async () => {
    try {
      setLoading(true);
      const data = await getPostById(id);
      setPost(data);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mengambil data post");
    } finally {
      setLoading(false);
    }
  };

  fetchPost();
}, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Yakin ingin menghapus post ini?")) return;
     // TODO: Implementasi delete post berdasarkan id
    // Setelah berhasil, redirect ke /posts menggunakan navigate
    // Handle error jika gagal
    try {
  await deletePost(id);
  alert("Post berhasil dihapus");
  navigate("/posts");
} catch (err) {
  setError(err.response?.data?.message || "Gagal menghapus post");
}

   
    
  };

  if (loading) return <div style={styles.center}>Loading...</div>;
  if (error) return <div style={styles.center}>Error: {error}</div>;
  if (!post) return <div style={styles.center}>Post tidak ditemukan.</div>;

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>
        <Link to="/posts" style={styles.breadcrumbLink}>
          ← Kembali ke daftar
        </Link>
      </div>

      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <span style={styles.badge}>Post #{post.id}</span>
          <div style={styles.actions}>
            <Link to={`/posts/${post.id}/edit`} style={styles.btnEdit}>
              Edit
            </Link>
            <button onClick={handleDelete} style={styles.btnDelete}>
              Hapus
            </button>
          </div>
        </div>

        <h1 style={styles.title}>{post.title}</h1>
        <p style={styles.body}>{post.body}</p>

        <div style={styles.meta}>
          <span style={styles.metaItem}>User ID: {post.userId}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "32px 24px",
  },
  breadcrumb: {
    marginBottom: "24px",
  },
  breadcrumbLink: {
    color: "#89b4fa",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "opacity 0.2s",
  },
  card: {
    backgroundColor: "#181825",
    border: "1px solid #313244",
    borderRadius: "16px",
    padding: "32px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  badge: {
    backgroundColor: "#313244",
    color: "#a6adc8",
    padding: "4px 12px",
    borderRadius: "6px",
    fontSize: "0.8rem",
  },
  actions: {
    display: "flex",
    gap: "8px",
  },
  title: {
    color: "#cdd6f4",
    fontSize: "1.6rem",
    fontWeight: "700",
    margin: "0 0 16px 0",
    textTransform: "capitalize",
    lineHeight: "1.35",
  },
  body: {
    color: "#a6adc8",
    lineHeight: "1.7",
    fontSize: "1rem",
    margin: "0 0 24px 0",
  },
  meta: {
    borderTop: "1px solid #313244",
    paddingTop: "16px",
    display: "flex",
    gap: "16px",
  },
  metaItem: {
    color: "#6c7086",
    fontSize: "0.85rem",
  },
  btnEdit: {
    padding: "8px 16px",
    backgroundColor: "#a6e3a1",
    color: "#1e1e2e",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: "600",
  },
  btnDelete: {
    padding: "8px 16px",
    backgroundColor: "#f38ba8",
    color: "#1e1e2e",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "0.85rem",
    fontWeight: "600",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
    color: "#a6adc8",
  },
};

export default PostDetail;
