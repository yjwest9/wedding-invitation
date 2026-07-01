import { timelineItems } from '../data/weddingData'
import SectionTitle from './SectionTitle'
import coupleImage from '../assets/gallery_couple.jpg'
import ringsImage from '../assets/gallery_rings.jpg'
import venueImage from '../assets/gallery_venue.jpg'
import coverImage from '../assets/cover_martinique.jpg'

const timelineImages = {
  couple: coupleImage,
  rings: ringsImage,
  shadow: venueImage,
  wedding: coverImage,
}

function Timeline() {
  return (
    <section className="bg-[#fffef9] px-6 py-16">
      <SectionTitle label="OUR TIMELINE" title="" />
      <div className="mt-8 text-center">
        <p className="text-sm text-[#34392f]">저희 연애의 타임라인입니다</p>
        <p className="mt-4 text-sm text-[#8d9587]">서로에게 참 소중하고 감사한 존재</p>
      </div>

      <div className="relative mt-12 space-y-12">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#d8ddd1]" />
        {timelineItems.map((item, index) => (
          <article
            key={item.date}
            className="relative grid grid-cols-2 items-center gap-x-9"
          >
            <span className="absolute left-1/2 top-8 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#a8bc83] ring-4 ring-[#fffef9]" />
            {index % 2 === 0 ? (
              <>
                <img
                  src={timelineImages[item.image]}
                  alt=""
                  className="aspect-square w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="inline-block rounded-full bg-[#a8bc83] px-3 py-1.5 text-xs font-semibold text-white">
                    {item.date}
                  </p>
                  <h3 className="mt-5 text-sm font-semibold text-[#34392f]">{item.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-xs leading-6 text-[#7a8371]">{item.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className="text-right">
                  <p className="inline-block rounded-full bg-[#a8bc83] px-3 py-1.5 text-xs font-semibold text-white">
                    {item.date}
                  </p>
                  <h3 className="mt-5 text-sm font-semibold text-[#34392f]">{item.title}</h3>
                  <p className="mt-3 whitespace-pre-line text-xs leading-6 text-[#7a8371]">{item.text}</p>
                </div>
                <img
                  src={timelineImages[item.image]}
                  alt=""
                  className="aspect-square w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </>
              )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Timeline
