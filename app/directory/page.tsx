// 'use client'

// import { Suspense } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import SearchBar from '@/components/SearchBar'
// import SurveyorCard from '@/components/SurveyorCard'
// import { useSurveyors } from '@/lib/useSurveyors'

// export default function DirectoryPage() {
//   return (
//     <Suspense fallback={<div className="min-h-screen" />}>
//       <DirectoryContent />
//     </Suspense>
//   )
// }

// function DirectoryContent() {
//   const searchParams = useSearchParams()
//   const q = searchParams.get('q') ?? ''
//   const lga = searchParams.get('lga') ?? ''
//   const spec = searchParams.get('spec') ?? ''

//   const { surveyors, loading, error } = useSurveyors()

//   const filtered = surveyors.filter(s => {
//     const matchesName =
//       !q ||
//       s.name.toLowerCase().includes(q.toLowerCase()) ||
//       s.regNumber.toLowerCase().includes(q.toLowerCase())
//     const matchesSpec =
//       !spec || s.specialization.toLowerCase().includes(spec.toLowerCase())
//     const matchesLga =
//       !lga || s.location.toLowerCase().includes(lga.toLowerCase())
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
//         {loading && (
//           <div className="text-center py-20">
//             <p className="text-gray-400 text-lg">Loading surveyors…</p>
//           </div>
//         )}

//         {error && (
//           <div className="text-center py-20">
//             <p className="text-red-500 text-sm">Couldn't load surveyors: {error}</p>
//           </div>
//         )}

//         {!loading && !error && filtered.length === 0 && (
//           <div className="text-center py-20">
//             <p className="text-gray-400 text-lg">No surveyors found matching your search.</p>
//             <p className="text-gray-400 text-sm mt-2">Try adjusting your filters.</p>
//           </div>
//         )}

//         {!loading && !error && filtered.length > 0 && (
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

// 'use client'

// import { Suspense } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useSearchParams } from 'next/navigation'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import SearchBar from '@/components/SearchBar'
// import SurveyorCard from '@/components/SurveyorCard'
// import { useSurveyors } from '@/lib/useSurveyors'

// export const dynamic = 'force-dynamic'

// export default function DirectoryPage() {
//   return (
//     <Suspense fallback={<div className="min-h-screen" />}>
//       <DirectoryContent />
//     </Suspense>
//   )
// }

// function DirectoryContent() {
//   const searchParams = useSearchParams()
//   const q = searchParams.get('q') ?? ''
//   const lga = searchParams.get('lga') ?? ''
//   const spec = searchParams.get('spec') ?? ''

//   const { surveyors, loading, error } = useSurveyors()

//   const filtered = surveyors.filter(s => {
//     const matchesName =
//       !q ||
//       s.name.toLowerCase().includes(q.toLowerCase()) ||
//       s.regNumber.toLowerCase().includes(q.toLowerCase())
//     const matchesSpec =
//       !spec || s.specialization.toLowerCase().includes(spec.toLowerCase())
//     const matchesLga =
//       !lga || s.location.toLowerCase().includes(lga.toLowerCase())
//     return matchesName && matchesSpec && matchesLga
//   })

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Navbar />

//       {/* Search section */}
//       <motion.div
//         className="bg-white border-b border-gray-100"
//         initial={{ opacity: 0, y: -16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//       >
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
//           <SearchBar />
//         </div>
//       </motion.div>

//       {/* Results */}
//       <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full">
//         {loading && (
//           <motion.div
//             className="text-center py-20"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <p className="text-gray-400 text-lg">Loading surveyors…</p>
//           </motion.div>
//         )}

//         {error && (
//           <motion.div
//             className="text-center py-20"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <p className="text-red-500 text-sm">Couldn't load surveyors: {error}</p>
//           </motion.div>
//         )}

//         {!loading && !error && filtered.length === 0 && (
//           <motion.div
//             className="text-center py-20"
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <p className="text-gray-400 text-lg">No surveyors found matching your search.</p>
//             <p className="text-gray-400 text-sm mt-2">Try adjusting your filters.</p>
//           </motion.div>
//         )}

//         {!loading && !error && filtered.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             <AnimatePresence>
//               {filtered.map((s, i) => (
//                 <motion.div
//                   key={s.id}
//                   layout
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -8 }}
//                   transition={{
//                     duration: 0.4,
//                     delay: i * 0.04,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                 >
//                   <SurveyorCard surveyor={s} />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         )}
//       </main>

//       <Footer />
//     </div>
//   )
// }

'use client'

import { Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import SurveyorCard from '@/components/SurveyorCard'
import { useSurveyors } from '@/lib/useSurveyors'

export const dynamic = 'force-dynamic'

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
  const residency = searchParams.get('residency') ?? ''

  const { surveyors, loading, error } = useSurveyors()

  const filtered = surveyors.filter(s => {
    const matchesName =
      !q ||
      s.name.toLowerCase().includes(q.toLowerCase()) ||
      s.regNumber.toLowerCase().includes(q.toLowerCase())
    const matchesResidency =
      !residency || s.location.toLowerCase() === residency.toLowerCase()
    return matchesName && matchesResidency
  })

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Search section */}
      <motion.div
        className="bg-white border-b border-gray-100"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <SearchBar />
        </div>
      </motion.div>

      {/* Results */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full">
        {loading && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-400 text-lg">Loading surveyors…</p>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-red-500 text-sm">Couldn't load surveyors: {error}</p>
          </motion.div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-gray-400 text-lg">No surveyors found matching your search.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters.</p>
          </motion.div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnimatePresence>
              {filtered.map((s, i) => (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <SurveyorCard surveyor={s} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}