import { useEffect, useState } from 'react'

interface Ad {
  id: string
  brand: string
  budget: number
  reach: number
}

function App() {
  const [ads, setAds] = useState<Ad[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ ads { id brand budget reach } }' })
    })
      .then(res => res.json())
      .then(data => setAds(data.data.ads))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Ads</h1>
      <ul>
        {ads.map(ad => (
          <li key={ad.id} className="border-b py-2">
            {ad.brand} - ${'{'}ad.budget{'}'} - reach {ad.reach}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App