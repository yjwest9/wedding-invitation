import { childhoodProfiles } from '../data/weddingData'
import SectionTitle from './SectionTitle'
import brideImage from '../assets/child_bride.png'
import groomImage from '../assets/child_groom.png'

const childhoodImages = {
  child_bride: brideImage,
  child_groom: groomImage,
}

function Childhood() {
  return (
    <section className="bg-[#eef4e4] px-8 py-16 text-center">
      <SectionTitle label="ABOUT US" title="" />
      <p className="mt-8 text-sm text-[#34392f]">저희 커플을 소개합니다</p>
      <p className="mt-3 text-sm text-[#8d9587]">하나로 이어진 두개의 우주</p>

      <div className="mt-10 space-y-4">
        {childhoodProfiles.map((profile) => (
          <article
            key={profile.name}
            className="rounded-lg bg-white px-7 py-8 shadow-md shadow-[#c4ceb8]/60"
          >
            <img
              src={childhoodImages[profile.image]}
              alt={`${profile.name} 어린 시절`}
              className="mx-auto aspect-square w-full max-w-[230px] rounded-md object-cover shadow-md shadow-black/10"
              loading="lazy"
            />
            <p className="mt-5 text-xs font-semibold text-[#9fb879]">
              {profile.side} {profile.name}
            </p>
            <p className="mt-8 whitespace-pre-line text-sm leading-6 text-[#061027]">{profile.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Childhood
