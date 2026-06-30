import SectionTitle from './SectionTitle'

function Greeting() {
  return (
    <section className="bg-[#fbfaf6] px-7 py-20 text-center">
      <p className="mx-auto mb-16 max-w-[13rem] text-3xl font-light leading-snug text-[#b3c48e]">
        And we
        <br />
        found love
      </p>

      <SectionTitle label="INVITATION" title="소중한 분들을 초대합니다" />
      <p className="mt-8 leading-8 text-[#59624f]">
        서로에게 가장 편안한 계절이 되어준 두 사람이 이제 한 가정을 이루려 합니다.
        귀한 걸음으로 축복해 주시면 감사하겠습니다.
      </p>
      <div className="mt-10 space-y-2 text-sm text-[#3e4937]">
        <p>김민수 · 박영희의 장남 김준호</p>
        <p>이상훈 · 최은정의 장녀 이수연</p>
      </div>
    </section>
  )
}

export default Greeting
