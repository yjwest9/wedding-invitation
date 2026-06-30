import SectionTitle from './SectionTitle'
import bouquetImage from '../assets/gallery_bouquet.jpg'
import coupleImage from '../assets/gallery_couple.jpg'
import ringsImage from '../assets/gallery_rings.jpg'
import venueImage from '../assets/gallery_venue.jpg'

const galleryItems = [
  { label: '야외 스냅', src: coupleImage, wide: true },
  { label: '웨딩 소품', src: bouquetImage },
  { label: '반지', src: ringsImage },
  { label: '웨딩홀', src: venueImage, wide: true },
]

function Gallery() {
  return (
    <section className="px-7 py-16">
      <SectionTitle label="GALLERY" title="우리의 순간들" />
      <div className="mt-8 grid grid-cols-2 gap-3">
        {galleryItems.map((item) => (
          <figure
            key={item.label}
            className={`overflow-hidden rounded-md bg-[#ece9dd] shadow-sm ${
              item.wide ? 'col-span-2 h-56' : 'h-36'
            }`}
          >
            <img src={item.src} alt={item.label} className="h-full w-full object-cover" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
