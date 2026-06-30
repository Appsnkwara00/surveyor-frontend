// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import SearchBar from '@/components/SearchBar'
// import SurveyorCard from '@/components/SurveyorCard'
// import { surveyors } from '@/lib/data'

// export default function DirectoryPage({
//   searchParams,
// }: {
//   searchParams: { q?: string; lga?: string; spec?: string }
// }) {
//   const { q, lga, spec } = searchParams

//   const filtered = surveyors.filter(s => {
//     const matchesName = !q || s.name.toLowerCase().includes(q.toLowerCase()) || s.regNumber.toLowerCase().includes(q.toLowerCase())
//     const matchesSpec = !spec || s.specialization.toLowerCase().includes(spec.toLowerCase())
//     const matchesLga = !lga || s.location.toLowerCase().includes(lga.toLowerCase())
//     return matchesName && matchesSpec && matchesLga
//   })

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Navbar />

//       {/* Search section */}
//       <div className="bg-white border-b border-gray-100">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
//           <SearchBar />
//         </div>
//       </div>

//       {/* Results */}
//       <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full">
//         {filtered.length === 0 ? (
//           <div className="text-center py-20">
//             <p className="text-gray-400 text-lg">No surveyors found matching your search.</p>
//             <p className="text-gray-400 text-sm mt-2">Try adjusting your filters.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {filtered.map(s => (
//               <SurveyorCard key={s.id} surveyor={s} />
//             ))}
//           </div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   )
// }


'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import SurveyorCard from '@/components/SurveyorCard'
import { useSurveyors } from '@/lib/useSurveyors'

export default function DirectoryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <DirectoryContent />
    </Suspense>
  )
}

function DirectoryContent() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') ?? ''
  const lga = searchParams.get('lga') ?? ''
  const spec = searchParams.get('spec') ?? ''

  const { surveyors, loading, error } = useSurveyors()

  const filtered = surveyors.filter(s => {
    const matchesName =
      !q ||
      s.name.toLowerCase().includes(q.toLowerCase()) ||
      s.regNumber.toLowerCase().includes(q.toLowerCase())
    const matchesSpec =
      !spec || s.specialization.toLowerCase().includes(spec.toLowerCase())
    const matchesLga =
      !lga || s.location.toLowerCase().includes(lga.toLowerCase())
    return matchesName && matchesSpec && matchesLga
  })

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Search section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <SearchBar />
        </div>
      </div>

      {/* Results */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full">
        {loading && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Loading surveyors…</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 text-sm">Couldn't load surveyors: {error}</p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No surveyors found matching your search.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters.</p>
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map(s => (
              <SurveyorCard key={s.id} surveyor={s} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}