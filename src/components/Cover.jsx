import coverImage from '../assets/cover_martinique.jpg'

function Cover() {
  return (
    <section className="relative overflow-hidden bg-[#0f1f14]">
      <img
        src={coverImage}
        alt="초록 들판에 앉아 있는 신랑 신부"
        width="930"
        height="1692"
        className="-my-6 block w-full"
      />
    </section>
  )
}

export default Cover
