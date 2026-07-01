import { useEffect, useState } from 'react'
import { calendarDays, weddingInfo } from '../data/weddingData'
import SectionTitle from './SectionTitle'

const getRemainingTime = () => {
  const diff = Math.max(new Date(weddingInfo.ceremonyDateTime).getTime() - Date.now(), 0)
  const day = 1000 * 60 * 60 * 24
  const hour = 1000 * 60 * 60
  const minute = 1000 * 60

  return {
    days: Math.floor(diff / day),
    hours: Math.floor((diff % day) / hour),
    minutes: Math.floor((diff % hour) / minute),
    seconds: Math.floor((diff % minute) / 1000),
  }
}

function WeddingCalendar() {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingTime(getRemainingTime())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#eef4e4] px-8 py-16 text-center">
      <SectionTitle label="WEDDING DAY" title={weddingInfo.calendarTitle} />
      <p className="mt-4 text-xs text-[#68715f]">{weddingInfo.date}</p>

      <div className="mt-8 bg-[#fffef9] p-5 shadow-sm shadow-[#b9c6a6]/25">
        <div className="grid grid-cols-7 text-[10px] font-semibold text-[#9cab80]">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-7 gap-1.5 text-xs text-[#68715f]">
          {calendarDays.flat().map((day, index) => (
            <span
              key={`${day}-${index}`}
              className={`flex aspect-square items-center justify-center rounded-full ${
                day === '31' ? 'bg-[#9fb879] text-white' : ''
              }`}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-2">
        {[
          ['DAYS', remainingTime.days],
          ['HOURS', remainingTime.hours],
          ['MINUTES', remainingTime.minutes],
          ['SECONDS', remainingTime.seconds],
        ].map(([label, value]) => (
          <div key={label} className="bg-white px-2 py-4 shadow-md shadow-[#c6cfb7]/40">
            <p className="text-xl font-light text-[#263222]">{String(value).padStart(2, '0')}</p>
            <p className="mt-2 text-[10px] font-semibold text-[#a4ad98]">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-[#68715f]">
        준호 ♥ 수연 결혼식이 <span className="font-semibold text-[#9fb879]">{remainingTime.days}일</span>{' '}
        남았습니다
      </p>
    </section>
  )
}

export default WeddingCalendar
