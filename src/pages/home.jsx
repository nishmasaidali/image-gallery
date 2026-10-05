import { useEffect, useState } from "react";
import api from "../services/api";
import ImageForm from "../components/ImageForm";
import ImageCard from "../components/ImageCard";
import "./Home.css";
function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await api.get("/images");
      setImages(response.data);
    };

    getImages();
  }, []);

  const addImage = (newImage) => {
    setImages((previousImages) => [
      ...previousImages,
      newImage
    ]);
  };

  return (
    <div>
      <h1>Image Gallery</h1>

      <ImageForm onImageAdded={addImage} />

      <div>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;