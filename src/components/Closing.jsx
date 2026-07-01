import { weddingInfo } from '../data/weddingData'

function Closing() {
  const shareInvitation = async () => {
    const shareData = {
      title: '준호 & 수연 모바일 청첩장',
      text: `${weddingInfo.date}, ${weddingInfo.venue}`,
      url: window.location.href,
    }

    if (navigator.share) {
      await navigator.share(shareData)
      return
    }

    await navigator.clipboard.writeText(window.location.href)
    alert('청첩장 링크가 복사되었습니다.')
  }

  const saveScheduleMemo = () => {
    const memo = [
      '준호 & 수연 결혼식',
      '',
      `일시: ${weddingInfo.date}`,
      `장소: ${weddingInfo.venue}`,
      `주소: ${weddingInfo.address}`,
    ].join('\n')
    const blob = new Blob([memo], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.download = 'junho-suyeon-wedding.txt'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="bg-[#fffef9] px-8 py-14 text-center">
      <h2 className="text-xl font-medium text-[#3d4535]">감사합니다</h2>
      <p className="mt-4 text-xs leading-6 text-[#68715f]">
        함께해 주시는 마음을 오래도록 기억하겠습니다.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={shareInvitation}
          className="bg-[#3d4535] py-3 text-xs font-semibold text-white"
        >
          링크 공유
        </button>
        <button
          type="button"
          onClick={saveScheduleMemo}
          className="border border-[#c3cdb3] py-3 text-xs font-semibold text-[#4d5745]"
        >
          일정 메모 저장
        </button>
      </div>
    </section>
  )
}

export default Closing
