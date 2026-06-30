import Cover from './components/Cover'
import Greeting from './components/Greeting'
import WeddingCalendar from './components/WeddingCalendar'
import Gallery from './components/Gallery'
import Location from './components/Location'
import GiftAccount from './components/GiftAccount'
import Rsvp from './components/Rsvp'
import Closing from './components/Closing'
import Reveal from './components/Reveal'

function App() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-[#f4f1ea] text-[#2d3328] shadow-2xl shadow-black/15">
      <Cover />
      <Reveal>
        <Greeting />
      </Reveal>
      <Reveal>
        <WeddingCalendar />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <Location />
      </Reveal>
      <Reveal>
        <GiftAccount />
      </Reveal>
      <Reveal>
        <Rsvp />
      </Reveal>
      <Reveal>
        <Closing />
      </Reveal>
    </main>
  )
}

export default App
