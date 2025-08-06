import { useState } from 'react'

// import './Popup.css'

const Popup = () => {
    const [score] = useState<number | null>(null)
// https://cde71d6e694d.ngrok-free.app/check
    const analyzeArticle = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.runtime.sendMessage(
    { action: 'extractText', tabId: tab.id },
    async (response) => {
      if (response?.text) {
        const res = await fetch('https://fake-news-detector-extension.onrender.com/check', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: tab.url, text: response.text }),
        })

        const data = await res.json()
        alert(`Credibility Score: ${data.score}`)
      } else {
        alert('Failed to extract article text')
      }
    }
  )
}


    return (
        <div style={{ padding: '10px', width: '300px' }}>
            <h2>Fake News Detector</h2>
            <button onClick={analyzeArticle}>Check Article</button>
            {score !== null && <p>Credibility Score: {score.toFixed(2)}</p>}
        </div>
    )
}

export default Popup
