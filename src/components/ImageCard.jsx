
import { Link } from "react-router-dom";
import "./ImageCard.css";

function ImageCard({ image }) {
  return (
    <Link to={"/image/" + image.id} className="image-link">
      <div className="image-card">
        <img
          src={image.image}
          alt={image.title}
        />

        <h2>{image.title}</h2>
      </div>
    </Link>
  );
}

export default ImageCard;

