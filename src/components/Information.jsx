import { informationItems } from '../data/weddingData'
import SectionTitle from './SectionTitle'

function Information() {
  return (
    <section className="bg-[#cbd8b5] px-8 py-16 text-center">
      <SectionTitle label="INFORMATION" title="안내" />
      <p className="mt-4 text-xs text-[#68715f]">저희 웨딩에 대한 사전 안내를 드립니다</p>

      <div className="mt-10 space-y-5">
        {informationItems.map((item) => (
          <article key={item.title} className="bg-white px-6 py-6 shadow-sm shadow-[#aab895]/40">
            <img
              src={item.image}
              alt={item.title}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <h3 className="mt-6 text-sm font-semibold text-[#9fb879]">{item.title}</h3>
            <p className="mt-6 text-xs leading-6 text-[#34392f]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Information
