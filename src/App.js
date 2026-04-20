import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostList from "./pages/posts/PostList";
import PostDetail from "./pages/posts/PostDetail";
import PostCreate from "./pages/posts/PostCreate";
import PostEdit from "./pages/posts/PostEdit";

function App() {
  return (
    <BrowserRouter>
      <div style={styles.app}>
        <Navbar />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/create" element={<PostCreate />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/:id/edit" element={<PostEdit />} />
            {/* Redirect semua route yang tidak dikenali ke home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    backgroundColor: "#1e1e2e",
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
  },
  main: {
    minHeight: "calc(100vh - 57px)",
  },
};

export default App;
