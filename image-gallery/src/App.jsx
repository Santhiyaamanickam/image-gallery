import ImageCard from "./components/ImageCard";
import "./App.css";

function App() {
  const images = [
    {
      id: 1,
      image: "https://picsum.photos/400/300?random=1",
      title: "Nature",
      description: "Beautiful nature scenery",
    },
    {
      id: 2,
      image: "https://picsum.photos/400/300?random=2",
      title: "Mountain",
      description: "Amazing mountain view",
    },
    {
      id: 3,
      image: "https://picsum.photos/400/300?random=3",
      title: "Travel",
      description: "Explore beautiful places",
    },
    {
      id: 4,
      image: "https://picsum.photos/400/300?random=4",
      title: "Adventure",
      description: "Enjoy every adventure",
    },
    {
      id: 5,
      image: "https://picsum.photos/400/300?random=5",
      title: "Peace",
      description: "A peaceful and relaxing view",
    },
    {
      id: 6,
      image: "https://picsum.photos/400/300?random=6",
      title: "Beauty",
      description: "Discover the beauty around you",
    },
  ];

  return (
    <>
      <h1>Image Gallery</h1>

      <div className="gallery">
        {images.map((item) => (
          <ImageCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;