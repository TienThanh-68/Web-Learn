import { useState } from 'react'
import Header from './components/Header'
import UrlInput from './components/UrlForm'
import ResultModal from './components/ResultModal'

function App() {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')

  const handleShorten = async () => {
    if (!url) return
    try {
      const response = await fetch('https://url-shortener-backend-3gwn.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          originalUrl: url,
          shortCode: Math.random().toString(36).substring(7),
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setShortenedUrl(`http://localhost:3000/${data.shortCode}`)
      }
    } catch (error) {
      console.error('Failed to connect to Backend:', error)
    }
  }

  const handleCopy = async () => {
    if (shortenedUrl) {
      try {
        await navigator.clipboard.writeText(shortenedUrl)
        console.log('Copied to clipboard!')
      } catch (err) {
        console.error('Failed to copy: ', err)
      }
    }
  }
  return (
    <main className="min-h-screen bg-white font-sans relative overflow-x-hidden">
      <Header />
      <div className="flex flex-col items-center justify-center py-12 px-6">
        <div className="w-full max-w-[832px] flex flex-col items-center space-y-2">
          <h1 className="text-[40px] md:text-[60px] font-black text-[#0b2878] text-center">
            Devcamp URL shortener
          </h1>
          <h2 className="text-[20px] md:text-[28px] font-normal text-[#0b2878] text-center mb-6 italic">
            Simplify, Organize, and Share
          </h2>

          <UrlInput url={url} setUrl={setUrl} onShorten={handleShorten} />
          <ResultModal
            shortenedUrl={shortenedUrl}
            onClose={() => setShortenedUrl('')}
            onCopy={handleCopy}
          />
        </div>
      </div>
      <footer className="mt-10 pb-10 text-center opacity-30 italic text-sm text-[#0b2878]">
        2026 DevCamp Frontend Assignment
      </footer>
    </main>
  )
}

export default App
