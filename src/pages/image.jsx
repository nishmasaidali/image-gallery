import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "./Image.css";

function Image() {
  const { id } = useParams();

  const [image, setImage] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      const response = await api.get(`/images/${id}`);
      setImage(response.data);
    };

    getImage();
  }, [id]);

  if (!image) {
    return <p>Loading...</p>;
  }

  return (
    <div className="image-details">
      <img
        src={image.image}
        alt={image.title}
      />

      <h1>{image.title}</h1>
    </div>
  );
}

export default Image;