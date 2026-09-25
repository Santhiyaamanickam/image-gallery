function ImageCard({ image, title, description }) {
  return (
    <div className="image-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ImageCard;