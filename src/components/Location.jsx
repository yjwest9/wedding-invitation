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
    <section className="bg-[#e8eadf] px-7 py-16">
      <SectionTitle label="LOCATION" title="오시는 길" />
      <div className="mt-6 text-center text-sm leading-7 text-[#59624f]">
        <p className="font-semibold text-[#263222]">{weddingInfo.venue}</p>
        <p>{weddingInfo.address}</p>
      </div>

      <div className="mt-8 h-56 overflow-hidden rounded-md bg-[#fbfaf6] shadow-sm">
        <iframe
          title="예식장 지도"
          src={googleMapUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <a
          href={naverMapUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-[#23462d] py-3 text-center text-sm font-semibold text-white"
        >
          지도 열기
        </a>
        <button
          type="button"
          onClick={copyAddress}
          className="rounded-md border border-[#a7ad95] py-3 text-sm font-semibold text-[#3e4937]"
        >
          주소 복사
        </button>
      </div>

      <div className="mt-7 space-y-2 text-sm leading-6 text-[#59624f]">
        <p>지하철: 시청역 6번 출구 도보 5분</p>
        <p>버스: 소공동 정류장 하차</p>
        <p>주차: 호텔 지하 주차장 이용</p>
      </div>
    </section>
  )
}

export default Location
