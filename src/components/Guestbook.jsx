import { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'

const STORAGE_KEY = 'wedding-guestbook'
const defaultMessages = [
  {
    id: 1,
    name: '민지',
    message: '결혼을 진심으로 축하해! 지금처럼 서로의 가장 좋은 친구로 오래오래 행복하길 바라.',
    createdAt: '2026.04.24 18:52',
  },
  {
    id: 2,
    name: '소연',
    message: '사진도 청첩장도 너무 예뻐요. 두 사람의 앞날을 따뜻하게 응원합니다.',
    createdAt: '2026.04.23 09:41',
  },
  {
    id: 3,
    name: '지원',
    message: '준호와 수연의 결혼을 축하합니다. 행복한 결혼 생활 되길 바라요.',
    createdAt: '2026.04.22 12:21',
  },
]

function Guestbook() {
  const [messages, setMessages] = useState(defaultMessages)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isWriting, setIsWriting] = useState(false)

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
    if (savedMessages) {
      setMessages(savedMessages)
    }
  }, [])

  const submitMessage = (event) => {
    event.preventDefault()

    if (!name.trim() || !message.trim()) {
      return
    }

    const nextMessages = [
      {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
        createdAt: new Date().toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
      },
      ...messages,
    ]

    setMessages(nextMessages)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextMessages))
    setName('')
    setMessage('')
    setIsWriting(false)
  }

  return (
    <section className="bg-[#eef4e4] px-8 py-16">
      <SectionTitle label="MESSAGE" title="방명록" />
      <p className="mt-4 text-center text-xs text-[#7a8371]">저희 둘에게 따뜻한 방명록을 남겨주세요</p>

      <div className="mt-10 space-y-4">
        {messages.slice(0, 3).map((item) => (
          <article key={item.id} className="bg-white p-5 shadow-md shadow-[#cad4bf]/60">
            <p className="text-sm leading-6 text-[#34392f]">{item.message}</p>
            <div className="mt-5 flex items-center justify-between text-[11px]">
              <p className="text-[#9fb879]">From {item.name}</p>
              <p className="text-[#8b9186]">{item.createdAt}</p>
            </div>
          </article>
        ))}
      </div>

      {isWriting && (
        <form onSubmit={submitMessage} className="mt-5 space-y-2 bg-white p-4 shadow-sm shadow-[#cad4bf]/50">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full border border-[#e3e7dc] px-3 py-3 text-xs outline-none focus:border-[#9fb879]"
            placeholder="이름"
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="h-24 w-full resize-none border border-[#e3e7dc] px-3 py-3 text-xs outline-none focus:border-[#9fb879]"
            placeholder="축하 메시지"
          />
          <button type="submit" className="w-full bg-[#9fb879] py-3 text-xs font-semibold text-white">
            남기기
          </button>
        </form>
      )}

      <button
        type="button"
        onClick={() => setIsWriting((value) => !value)}
        className="mt-8 w-full bg-[#9fb879] py-3.5 text-xs font-semibold text-white"
      >
        {isWriting ? '닫기' : '메시지 남기기'}
      </button>
    </section>
  )
}

export default Guestbook
