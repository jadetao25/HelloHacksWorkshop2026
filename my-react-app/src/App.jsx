
import './App.css'
import { useState } from 'react'

const types = [
  { name: 'Fire', icon: '🔥', color: 'border-orange-200 bg-orange-50 text-orange-700', counters: ['Water', 'Ground', 'Rock'] },
  { name: 'Water', icon: '💧', color: 'border-sky-200 bg-sky-50 text-sky-700', counters: ['Electric', 'Grass'] },
  { name: 'Grass', icon: '🌿', color: 'border-emerald-200 bg-emerald-50 text-emerald-700', counters: ['Fire', 'Ice', 'Flying', 'Bug'] },
  { name: 'Ground', icon: '⛰️', color: 'border-amber-200 bg-amber-50 text-amber-700', counters: ['Water', 'Grass', 'Ice'] },
]

function App() {
  const [selectedType, setSelectedType] = useState(null)
  const selected = types.find((type) => type.name === selectedType)
function getMatchup(type) {
    // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
    return `Fake API response: You are fighting a ${type}-type Pokémon.`;
  }

  function handleTypeClick(type) {
     const response = getMatchup(type);
    setSelectedType(response);
  }
  return (
    
    <main className="min-h-screen px-5 py-8 sm:px-8 sm:py-12">
      <section className="mx-auto max-w-2xl">
        <header className="mb-10 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full border-4 border-slate-800 bg-red-500 shadow-sm">
            <span className="size-3 rounded-full border-2 border-slate-800 bg-white" />
          </div>
          <span className="text-sm font-bold tracking-[0.18em] text-slate-500 uppercase">Battle Dex</span>
        </header>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="mb-2 text-sm font-semibold text-red-500">TYPE MATCHUP</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Choose your opponent</h1>
          <p className="mt-3 max-w-lg text-base leading-7 text-slate-600">Select the Pokémon type you’re facing to see which types have the advantage.</p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {types.map((type) => {
              const isSelected = selectedType === type.name
              return (
                <button
                  key={type.name}
                  type="button"
                  onClick={() => handleTypeClick(type.name)}
                  className={`rounded-2xl border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${type.color} ${isSelected ? 'ring-2 ring-slate-800 ring-offset-2' : 'hover:-translate-y-0.5 hover:shadow-sm'}`}
                >
                  <span className="block text-2xl" aria-hidden="true">{type.icon}</span>
                  <span className="mt-3 block text-sm font-bold">{type.name}</span>
                </button>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white" aria-live="polite">
            {selectedType
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
