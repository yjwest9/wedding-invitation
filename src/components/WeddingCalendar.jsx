import { calendarDays, weddingInfo } from '../data/weddingData'
import SectionTitle from './SectionTitle'

function WeddingCalendar() {
  return (
    <section className="bg-[#e8eadf] px-7 py-16 text-center">
      <SectionTitle label="WEDDING DAY" title={weddingInfo.calendarTitle} />
      <p className="mt-4 text-sm text-[#59624f]">{weddingInfo.date}</p>

      <div className="mt-8 rounded-md bg-[#fbfaf6] p-5 shadow-sm">
        <div className="grid grid-cols-7 text-xs font-semibold text-[#8c8f78]">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-7 gap-2 text-sm text-[#59624f]">
          {calendarDays.flat().map((day, index) => (
            <span
              key={`${day}-${index}`}
              className={`flex aspect-square items-center justify-center rounded-full ${
                day === '31' ? 'bg-[#23462d] text-white' : ''
              }`}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingCalendar
