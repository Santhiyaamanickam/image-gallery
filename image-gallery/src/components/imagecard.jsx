function ImageCard({ image, title, description }) {
  return (
    <div className="image-card">
      <img src={image} alt={title} />

      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;