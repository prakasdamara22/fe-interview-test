import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts, deletePost } from "../../api/posts";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: Fetch posts saat komponen pertama kali di-render menggunakan useEffect
  // Gunakan fungsi getPosts dari api/posts.js
  // Handle loading state dan error state dengan benar

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus post ini?")) return;

    // TODO: Implementasi delete post
    // Gunakan fungsi deletePost dari api/posts.js
    // Setelah berhasil, hapus post dari state posts (filter)
    // Handle error jika gagal
  };

  if (loading) return <div style={styles.center}>Loading posts...</div>;
  if (error) return <div style={styles.center}>Error: {error}</div>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>All Posts</h1>
        <Link to="/posts/create" style={styles.createBtn}>
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p style={styles.empty}>Belum ada post.</p>
      ) : (
        <div style={styles.grid}>
          {posts.map((post) => (
            <div key={post.id} style={styles.card}>
              <span style={styles.badge}>#{post.id}</span>
              <h3 style={styles.cardTitle}>{post.title}</h3>
              <p style={styles.cardBody}>{post.body}</p>
              <div style={styles.actions}>
                <Link to={`/posts/${post.id}`} style={styles.btnDetail}>
                  Detail
                </Link>
                <Link to={`/posts/${post.id}/edit`} style={styles.btnEdit}>
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  style={styles.btnDelete}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "32px 24px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#cdd6f4",
    margin: 0,
  },
  createBtn: {
    backgroundColor: "#89b4fa",
    color: "#1e1e2e",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "0.9rem",
    transition: "opacity 0.2s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "16px",
  },
  card: {
    backgroundColor: "#181825",
    border: "1px solid #313244",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    transition: "border-color 0.2s",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#313244",
    color: "#a6adc8",
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "0.75rem",
    width: "fit-content",
  },
  cardTitle: {
    color: "#cdd6f4",
    margin: 0,
    fontSize: "1rem",
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: "1.4",
  },
  cardBody: {
    color: "#6c7086",
    fontSize: "0.85rem",
    lineHeight: "1.5",
    margin: 0,
    flex: 1,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
  actions: {
    display: "flex",
    gap: "8px",
    marginTop: "4px",
  },
  btnDetail: {
    padding: "6px 12px",
    backgroundColor: "#313244",
    color: "#cdd6f4",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "0.8rem",
    fontWeight: "500",
  },
  btnEdit: {
    padding: "6px 12px",
    backgroundColor: "#a6e3a1",
    color: "#1e1e2e",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "0.8rem",
    fontWeight: "500",
  },
  btnDelete: {
    padding: "6px 12px",
    backgroundColor: "#f38ba8",
    color: "#1e1e2e",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "0.8rem",
    fontWeight: "500",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
    color: "#a6adc8",
    fontSize: "1rem",
  },
  empty: {
    color: "#6c7086",
    textAlign: "center",
    marginTop: "60px",
  },
};

export default PostList;
