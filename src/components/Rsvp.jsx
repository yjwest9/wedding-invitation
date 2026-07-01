import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import SectionTitle from './SectionTitle'

const STORAGE_KEY = 'wedding-rsvp'

function RsvpModal({
  side,
  setSide,
  answer,
  setAnswer,
  name,
  setName,
  phoneLast,
  setPhoneLast,
  message,
  onClose,
  onSubmit,
}) {
  const optionClass = (active) =>
    `py-3 text-xs font-semibold shadow-sm transition-all duration-200 ${
      active ? 'bg-[#9fb879] text-white shadow-[#9bad78]/40' : 'bg-white text-[#969b8c]'
    }`

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/45 px-5 py-6">
      <form
        onSubmit={onSubmit}
        className="animate-soft-pop w-full max-w-[340px] bg-[#f8f8f7] px-5 py-6 text-[#282e34] shadow-2xl sm:max-w-[390px] sm:px-6 sm:py-7"
      >
        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="text-2xl leading-none text-[#5f6468]">
            ×
          </button>
        </div>

        <h3 className="mt-1 text-center text-xl font-medium">참석 의사 체크하기</h3>
        <p className="mt-4 text-center text-xs leading-5 text-[#9cad76]">
          한 분 한 분을 소중히 모실 수 있도록
          <br />
          참석 의사를 전해주시면 감사하겠습니다.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <p className="mb-2 text-xs text-[#626963]">
              어느 분의 하객이신가요? <span className="text-[#d9a5a5]">*</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button type="button" onClick={() => setSide('groom')} className={optionClass(side === 'groom')}>
                신랑
              </button>
              <button type="button" onClick={() => setSide('bride')} className={optionClass(side === 'bride')}>
                신부
              </button>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs text-[#626963]">
              참석하실 수 있나요? <span className="text-[#d9a5a5]">*</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button type="button" onClick={() => setAnswer('yes')} className={optionClass(answer === 'yes')}>
                참석할게요
              </button>
              <button type="button" onClick={() => setAnswer('no')} className={optionClass(answer === 'no')}>
                참석이 어려워요
              </button>
            </div>
          </div>

          <label className="block">
            <span className="text-xs text-[#626963]">
              성함이 어떻게 되시나요? <span className="text-[#d9a5a5]">*</span>
            </span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full bg-white px-3 py-3 text-xs shadow-sm outline-none focus:ring-2 focus:ring-[#9fb879]"
              placeholder="참석자 본인 성함"
            />
          </label>

          <label className="block">
            <span className="text-xs text-[#626963]">동명이인 체크를 위한 번호를 알려주세요</span>
            <input
              value={phoneLast}
              maxLength={4}
              onChange={(event) => setPhoneLast(event.target.value.replace(/\D/g, ''))}
              className="mt-2 w-full bg-white px-3 py-3 text-xs shadow-sm outline-none focus:ring-2 focus:ring-[#9fb879]"
              placeholder="핸드폰 번호 뒤 4자리"
            />
          </label>
        </div>

        {message && <p className="mt-4 text-center text-xs text-[#b35f5f]">{message}</p>}

        <button
          type="submit"
          className="mt-9 w-full bg-[#9fb879] py-3 text-xs font-semibold text-white transition-transform active:scale-95"
        >
          체크 완료하기
        </button>
      </form>
    </div>,
    document.body,
  )
}

function Rsvp() {
  const [isOpen, setIsOpen] = useState(false)
  const [side, setSide] = useState('groom')
  const [answer, setAnswer] = useState('yes')
  const [name, setName] = useState('')
  const [phoneLast, setPhoneLast] = useState('')
  const [message, setMessage] = useState('')
  const [savedList, setSavedList] = useState([])

  useEffect(() => {
    setSavedList(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeModal = () => {
    setIsOpen(false)
    setMessage('')
  }

  const submitRsvp = (event) => {
    event.preventDefault()

    if (!name.trim() || phoneLast.trim().length !== 4) {
      setMessage('성함과 휴대폰 번호 뒤 4자리를 입력해주세요.')
      return
    }

    const nextItem = {
      id: Date.now(),
      side,
      answer,
      name: name.trim(),
      phoneLast: phoneLast.trim(),
      createdAt: new Date().toISOString(),
    }
    const nextList = [...savedList, nextItem]

    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextList))
    setSavedList(nextList)
    setName('')
    setPhoneLast('')
    setSide('groom')
    setAnswer('yes')
    setMessage('')
    setIsOpen(false)
  }

  return (
    <section className="bg-[#aebf91] px-8 py-16 text-white">
      <SectionTitle label="RSVP" title="참석 의사 전달" dark />
      <p className="mt-5 text-center text-xs leading-6 text-white/80">
        한 분 한 분을 소중히 모실 수 있도록 참석 의사를 전해주세요.
      </p>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-9 w-full bg-white py-3.5 text-xs font-semibold text-[#6f8354] shadow-sm shadow-black/10 transition-transform active:scale-95"
      >
        참석 의사 체크하기
      </button>

      {savedList.length > 0 && (
        <div className="mt-8 bg-white/15 p-4 text-xs">
          <p className="font-semibold">저장된 참석 응답 {savedList.length}개</p>
          <ul className="mt-3 space-y-2 text-white/80">
            {savedList.slice(-3).map((item) => (
              <li key={item.id}>
                {item.name} · {item.side === 'groom' ? '신랑측' : '신부측'} ·{' '}
                {item.answer === 'yes' ? '참석' : '불참'}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isOpen && (
        <RsvpModal
          side={side}
          setSide={setSide}
          answer={answer}
          setAnswer={setAnswer}
          name={name}
          setName={setName}
          phoneLast={phoneLast}
          setPhoneLast={setPhoneLast}
          message={message}
          onClose={closeModal}
          onSubmit={submitRsvp}
        />
      )}
    </section>
  )
}

export default Rsvp
