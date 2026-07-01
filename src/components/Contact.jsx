import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { contactGroups } from '../data/weddingData'
import SectionTitle from './SectionTitle'

const tabs = [
  { id: 'groom', label: '신랑에게' },
  { id: 'bride', label: '신부에게' },
]

function ContactModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('groom')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/35 px-5 py-8">
      <div className="w-full max-w-[360px] bg-[#f8f8f7] px-5 py-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="ml-auto block text-2xl leading-none text-[#6b7068]"
          aria-label="축하 연락하기 닫기"
        >
          ×
        </button>
        <h2 className="mt-2 text-center text-xl font-semibold text-[#34392f]">축하 연락하기</h2>
        <p className="mt-2 text-center text-xs font-semibold text-[#9fb879]">
          직접 축하의 마음을 전해보세요
        </p>

        <div className="mt-8 grid grid-cols-2 border-b border-[#d9ddd2] text-sm font-semibold">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 ${activeTab === tab.id ? 'border-b-2 border-[#34392f] text-[#34392f]' : 'text-[#a3a79e]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {contactGroups[activeTab].map((contact) => (
            <div key={contact.phone} className="bg-white p-4 shadow-sm shadow-[#d6dccb]/50">
              <div className="flex items-center justify-between text-xs">
                <p className="font-semibold text-[#34392f]">{contact.name}</p>
                <p className="text-[#8f958b]">{contact.relation}</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={`sms:${contact.phone}`}
                  className="bg-[#9fb879] py-3 text-center text-xs font-semibold text-white"
                >
                  문자 보내기
                </a>
                <a
                  href={`tel:${contact.phone}`}
                  className="bg-[#555] py-3 text-center text-xs font-semibold text-white"
                >
                  전화하기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  )
}

function Contact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="bg-[#fffef9] px-8 py-16 text-center">
      <SectionTitle label="CONTACT" title="축하 연락" />
      <div className="mt-8 space-y-8 text-sm text-[#34392f]">
        <div>
          <span className="rounded-full bg-[#9fb879] px-4 py-2 text-xs font-semibold text-white">신랑</span>
          <p className="mt-5 text-lg font-medium">준호</p>
          <p className="mt-1 text-[10px] tracking-[0.28em] text-[#9a9f95]">JUNHO</p>
          <p className="mt-6 text-xs text-[#80867a]">김민수 · 박영희의 아들</p>
        </div>
        <div className="border-t border-[#e5eadf] pt-8">
          <span className="rounded-full bg-[#9fb879] px-4 py-2 text-xs font-semibold text-white">신부</span>
          <p className="mt-5 text-lg font-medium">수연</p>
          <p className="mt-1 text-[10px] tracking-[0.28em] text-[#9a9f95]">SUYEON</p>
          <p className="mt-6 text-xs text-[#80867a]">이상훈 · 최은정의 딸</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-10 flex w-full items-center justify-between bg-[#9fb879] px-5 py-4 text-xs font-semibold text-white"
      >
        축하 연락하기
        <span className="text-2xl leading-none">›</span>
      </button>
      {isOpen && <ContactModal onClose={() => setIsOpen(false)} />}
    </section>
  )
}

export default Contact
