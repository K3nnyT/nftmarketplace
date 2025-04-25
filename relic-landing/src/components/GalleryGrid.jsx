const images = [
    '/art1.jpg',
    '/art2.jpg',
    '/art3.jpg',
    '/art4.jpg',
    '/art5.jpg',
    '/art6.jpg',
  ]
  
  export default function GalleryGrid() {
    return (
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-offWhite">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Artwork ${i + 1}`}
            className="w-full object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </section>
    )
  }
  