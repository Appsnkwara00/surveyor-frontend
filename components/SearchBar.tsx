// 'use client'

// import { Search } from 'lucide-react'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'

// interface SearchBarProps {
//   elevated?: boolean
// }

// export default function SearchBar({ elevated = false }: SearchBarProps) {
//   const router = useRouter()
//   const [name, setName] = useState('')
//   const [lga, setLga] = useState('All LGAs')
//   const [spec, setSpec] = useState('All Specialization')

//   const lgas = [
//     'All LGAs', 'Asa', 'Baruten', 'Edu', 'Ekiti', 'Ifelodun',
//     'Ilorin East', 'Ilorin South', 'Ilorin West', 'Irepodun',
//     'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke Ero', 'Oyun', 'Patigi'
//   ]
//   const specializations = [
//     'All Specialization', 'Cadastral Surveys', 'Engineering Surveys',
//     'Topographical Surveys', 'Hydrographic Surveys',
//     'GIS & Mapping', 'Property Boundary Surveys',
//     'Construction Setting Out', 'Drone Surveying'
//   ]

//   const handleSearch = () => {
//     const params = new URLSearchParams()
//     if (name) params.set('q', name)
//     if (lga !== 'All LGAs') params.set('lga', lga)
//     if (spec !== 'All Specialization') params.set('spec', spec)
//     router.push(`/directory?${params.toString()}`)
//   }

//   return (
//     <div className={`bg-white rounded-2xl ${elevated ? 'shadow-xl' : 'shadow-md border border-gray-100'} p-4 sm:p-5`}>
//       <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
//         {/* Name input */}
//         <div className="flex-1 min-w-0">
//           <label className="block text-xs text-gray-400 mb-1 font-medium">Name or Reg Number</label>
//           <input
//             type="text"
//             placeholder="e.g. SURCON1234.."
//             value={name}
//             onChange={e => setName(e.target.value)}
//             onKeyDown={e => e.key === 'Enter' && handleSearch()}
//             className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none border border-gray-200 rounded-lg px-3 py-2.5 focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition"
//           />
//         </div>

//         {/* LGA */}
//         <div className="sm:w-48">
//           <label className="block text-xs text-gray-400 mb-1 font-medium">Local Government Area</label>
//           <select
//             value={lga}
//             onChange={e => setLga(e.target.value)}
//             className="w-full text-sm text-gray-700 outline-none border border-gray-200 rounded-lg px-3 py-2.5 focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition appearance-none bg-white cursor-pointer"
//           >
//             {lgas.map(l => <option key={l}>{l}</option>)}
//           </select>
//         </div>

//         {/* Specialization */}
//         {/* <div className="sm:w-52">
//           <label className="block text-xs text-gray-400 mb-1 font-medium">Specialization</label>
//           <select
//             value={spec}
//             onChange={e => setSpec(e.target.value)}
//             className="w-full text-sm text-gray-700 outline-none border border-gray-200 rounded-lg px-3 py-2.5 focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition appearance-none bg-white cursor-pointer"
//           >
//             {specializations.map(s => <option key={s}>{s}</option>)}
//           </select>
//         </div> */}

//         {/* Button */}
//         <div className="flex items-end">
//           <button
//             onClick={handleSearch}
//             className="btn-green flex items-center gap-2 w-full sm:w-auto justify-center px-5 py-2.5"
//           >
//             <Search className="w-4 h-4" />
//             <span>Search</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface SearchBarProps {
  elevated?: boolean
}

export default function SearchBar({ elevated = false }: SearchBarProps) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [residency, setResidency] = useState('All Surveyors')

  const residencyOptions = [
    'All Surveyors', 'Resident', 'Non-Resident'
  ]

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (name) params.set('q', name)
    if (residency !== 'All Surveyors') params.set('residency', residency)
    router.push(`/directory?${params.toString()}`)
  }

  return (
    <div className={`bg-white rounded-2xl ${elevated ? 'shadow-xl' : 'shadow-md border border-gray-100'} p-4 sm:p-5`}>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
        {/* Name input */}
        <div className="flex-1 min-w-0">
          <label className="block text-xs text-gray-400 mb-1 font-medium">Name or Reg Number</label>
          <input
            type="text"
            placeholder="e.g. SURCON1234.."
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none border border-gray-200 rounded-lg px-3 py-2.5 focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition"
          />
        </div>

        {/* Residency */}
        <div className="sm:w-48">
          <label className="block text-xs text-gray-400 mb-1 font-medium">Residency</label>
          <select
            value={residency}
            onChange={e => setResidency(e.target.value)}
            className="w-full text-sm text-gray-700 outline-none border border-gray-200 rounded-lg px-3 py-2.5 focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition appearance-none bg-white cursor-pointer"
          >
            {residencyOptions.map(r => <option key={r}>{r}</option>)}
          </select>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="btn-green flex items-center gap-2 w-full sm:w-auto justify-center px-5 py-2.5"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  )
}