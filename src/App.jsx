import Cover from './components/Cover'
import Greeting from './components/Greeting'
import WeddingCalendar from './components/WeddingCalendar'
import Contact from './components/Contact'
import Childhood from './components/Childhood'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Location from './components/Location'
import GiftAccount from './components/GiftAccount'
import Guestbook from './components/Guestbook'
import Information from './components/Information'
import Rsvp from './components/Rsvp'
import Closing from './components/Closing'
import Reveal from './components/Reveal'

const invitationSections = [
  Greeting,
  WeddingCalendar,
  Contact,
  Childhood,
  Timeline,
  Gallery,
  Location,
  Guestbook,
  Information,
  GiftAccount,
  Rsvp,
  Closing,
]

function App() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[390px] overflow-hidden bg-[#fbfaf6] text-[#34392f] shadow-xl shadow-[#9aa987]/25">
      <Cover />
      {invitationSections.map((Section) => (
        <Reveal key={Section.name}>
          <Section />
        </Reveal>
      ))}
    </main>
  )
}

export default App
