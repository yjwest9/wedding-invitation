function SectionTitle({ label, title, dark = false }) {
  return (
    <div className="text-center">
      <p className={`text-xs tracking-[0.32em] ${dark ? 'text-white/50' : 'text-[#8c8f78]'}`}>
        {label}
      </p>
      <h2 className={`mt-4 text-2xl font-semibold ${dark ? 'text-white' : 'text-[#263222]'}`}>
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
