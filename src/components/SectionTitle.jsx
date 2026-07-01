function SectionTitle({ label, title, dark = false }) {
  return (
    <div className="text-center">
      <p className={`text-[10px] font-semibold tracking-[0.28em] ${dark ? 'text-white/60' : 'text-[#9cab80]'}`}>
        {label}
      </p>
      {title && (
        <h2 className={`mt-3 text-xl font-medium ${dark ? 'text-white' : 'text-[#3d4535]'}`}>
          {title}
        </h2>
      )}
    </div>
  )
}

export default SectionTitle
