import { LocaleProvider, VersionProvider } from '@hooks'
import { Navbar, Hero, HowItWorks, Features, Download, Footer } from '@components'

const App = () => (
  <VersionProvider>
  <LocaleProvider>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Download />
      </main>
      <Footer />
    </div>
  </LocaleProvider>
  </VersionProvider>
)

export default App
