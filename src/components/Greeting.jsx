import SectionTitle from './SectionTitle'

function Greeting() {
  return (
    <section className="bg-[#fffef9] px-8 py-16 text-center">
      <p className="mx-auto mb-12 max-w-[12rem] text-2xl font-light leading-snug text-[#b6c59b]">
        And we
        <br />
        found love
      </p>

      <SectionTitle label="INVITATION" title="소중한 분들을 초대합니다" />
      <p className="mt-7 text-sm leading-8 text-[#68715f]">
        서로에게 가장 편안한 계절이 되어준 두 사람이 이제 한 가정을 이루려 합니다.
        귀한 걸음으로 축복해 주시면 감사하겠습니다.
      </p>
      <div className="mt-9 space-y-2 border-y border-[#edf0e6] py-5 text-xs leading-6 text-[#4d5745]">
        <p>김민수 · 박영희의 장남 김준호</p>
        <p>이상훈 · 최은정의 장녀 이수연</p>
      </div>
    </section>
  )
}

export default Greeting
