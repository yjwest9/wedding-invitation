import coverImage from '../assets/cover_martinique.png'

function Cover() {
  return (
    <section className="relative overflow-hidden bg-[#0f1f14]">
      <img
        src={coverImage}
        alt="초록 들판에 앉아 있는 신랑 신부"
        className="-my-6 block w-full animate-cover-float"
      />
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <span className="h-9 w-px animate-bounce bg-white/70" />
      </div>
    </section>
  )
}

export default Cover
