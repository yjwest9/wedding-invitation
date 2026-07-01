import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { galleryItems } from '../data/weddingData'
import SectionTitle from './SectionTitle'

function GalleryLightbox({ currentIndex, onClose, onMove }) {
  const item = galleryItems[currentIndex]

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowLeft') {
        onMove(-1)
      }

      if (event.key === 'ArrowRight') {
        onMove(1)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onMove])

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.label} 크게 보기`}
      onClick={onClose}
    >
      <div className="relative w-full max-w-[640px]" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="ml-auto mb-3 block h-10 w-10 bg-white/15 text-2xl leading-none text-white"
          aria-label="사진 크게 보기 닫기"
        >
          ×
        </button>
        <img
          src={item.src}
          alt={item.label}
          className="max-h-[78vh] w-full bg-[#111] object-contain shadow-2xl"
        />
        <button
          type="button"
          onClick={() => onMove(-1)}
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-black/35 text-3xl text-white"
          aria-label="이전 사진 보기"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => onMove(1)}
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-black/35 text-3xl text-white"
          aria-label="다음 사진 보기"
        >
          ›
        </button>
        <p className="mt-3 text-center text-xs text-white/75">{item.label}</p>
      </div>
    </div>,
    document.body,
  )
}

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const movePhoto = (step) => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex
      }

      return (currentIndex + step + galleryItems.length) % galleryItems.length
    })
  }

  return (
    <section className="bg-[#fffef9] py-16">
      <SectionTitle label="GALLERY" title="우리의 순간들" />
      <p className="mt-4 text-center text-xs text-[#7a8371]">사진을 클릭하시면 크게 볼 수 있습니다</p>
      <div className="mt-10 grid grid-cols-3 gap-px bg-white">
        {galleryItems.map((item, index) => (
          <button
            type="button"
            key={item.label}
            onClick={() => setSelectedIndex(index)}
            className="aspect-square overflow-hidden bg-[#ecefe4]"
            aria-label={`${item.label} 크게 보기`}
          >
            <img src={item.src} alt={item.label} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      {selectedIndex !== null && (
        <GalleryLightbox
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onMove={movePhoto}
        />
      )}
    </section>
  )
}

export default Gallery
