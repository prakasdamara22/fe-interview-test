import axiosInstance from "./axiosInstance";

// TODO: Implementasi fungsi-fungsi berikut

export const getPosts = async () => {
  // TODO: Fetch semua posts dari endpoint /posts
  // Kembalikan response.data
  const response = await axiosInstance.get("/posts");
  return response.data;
};

export const getPostById = async (id) => {
  // TODO: Fetch single post berdasarkan id dari endpoint /posts/:id
  // Kembalikan response.data
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (data) => {
  // TODO: Buat post baru dengan method POST ke endpoint /posts
  // Kembalikan response.data
  const response = await axiosInstance.post("/posts", data);
  return response.data;
};

export const updatePost = async (id, data) => {
  // TODO: Update post berdasarkan id dengan method PUT ke endpoint /posts/:id
  // Kembalikan response.data
  const response = await axiosInstance.put(`/posts/${id}`, data);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axiosInstance.delete(`/posts/${id}`);
  return response.data;
  // TODO: Hapus post berdasarkan id dengan method DELETE ke endpoint /posts/:id
  // Kembalikan response.data
};
