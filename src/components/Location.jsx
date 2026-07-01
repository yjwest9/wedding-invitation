import { weddingInfo } from '../data/weddingData'
import SectionTitle from './SectionTitle'

function Location() {
  const mapQuery = encodeURIComponent(weddingInfo.address)
  const googleMapUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`
  const naverMapUrl = `https://map.naver.com/p/search/${mapQuery}`

  const copyAddress = async () => {
    await navigator.clipboard.writeText(weddingInfo.address)
    alert('주소가 복사되었습니다.')
  }

  return (
    <section className="bg-[#eef4e4] px-8 py-16">
      <SectionTitle label="LOCATION" title="오시는 길" />
      <div className="mt-6 text-center text-xs leading-6 text-[#68715f]">
        <p className="font-semibold text-[#3d4535]">{weddingInfo.venue}</p>
        <p>{weddingInfo.address}</p>
      </div>

      <div className="mt-8 h-52 overflow-hidden bg-[#fffef9] shadow-sm shadow-[#b9c6a6]/25">
        <iframe
          title="예식장 지도"
          src={googleMapUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <a
          href={naverMapUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-[#9fb879] py-3 text-center text-xs font-semibold text-white"
        >
          지도 열기
        </a>
        <button
          type="button"
          onClick={copyAddress}
          className="border border-[#c3cdb3] bg-[#fffef9] py-3 text-xs font-semibold text-[#4d5745]"
        >
          주소 복사
        </button>
      </div>

      <div className="mt-7 space-y-2 border-t border-[#dbe5cf] pt-5 text-xs leading-6 text-[#68715f]">
        <p>지하철: 시청역 6번 출구 도보 5분</p>
        <p>버스: 소공동 정류장 하차</p>
        <p>주차: 호텔 지하 주차장 이용</p>
      </div>
    </section>
  )
}

export default Location
