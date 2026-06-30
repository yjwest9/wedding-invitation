import { useState } from 'react'
import { accounts } from '../data/weddingData'
import SectionTitle from './SectionTitle'

function GiftAccount() {
  const [openSide, setOpenSide] = useState(null)

  const copyAccount = async (account) => {
    await navigator.clipboard.writeText(`${account.bank} ${account.number} ${account.name}`)
    alert(`${account.side} 계좌가 복사되었습니다.`)
  }

  return (
    <section className="px-7 py-16 text-center">
      <SectionTitle label="THANKS" title="마음 전하실 곳" />
      <p className="mt-5 text-sm leading-6 text-[#59624f]">
        축하의 마음을 전하고 싶은 분들을 위해 계좌 정보를 준비했습니다.
      </p>

      <div className="mt-8 space-y-3 text-left">
        {accounts.map((account) => {
          const isOpen = openSide === account.side

          return (
            <div
              key={account.side}
              className="overflow-hidden rounded-md border border-[#c7c9b8] bg-[#fbfaf6] shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenSide(isOpen ? null : account.side)}
                className="flex w-full items-center justify-between px-5 py-4 text-sm font-semibold text-[#3e4937]"
              >
                <span>{account.side} 계좌 보기</span>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  ˅
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[#d8d9cc] px-5 py-4 text-sm text-[#59624f]">
                    <p className="font-semibold text-[#263222]">{account.name}</p>
                    <p className="mt-2">
                      {account.bank} {account.number}
                    </p>
                    <button
                      type="button"
                      onClick={() => copyAccount(account)}
                      className="mt-4 w-full rounded-md bg-[#23462d] py-3 font-semibold text-white"
                    >
                      계좌 복사
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default GiftAccount
