import { useState } from "react";
import api from "../services/api";
import "./ImageForm.css";
function ImageForm({ onImageAdded }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image) {
      alert("Please fill all fields");
      return;
    }

    const response = await api.post("/images", {
      title: title,
      image: image
    });

    onImageAdded(response.data);

    setTitle("");
    setImage("");
  };

  return (
    <form className="image-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit">
        Add Image
      </button>
    </form>
  );
}

export default ImageForm;