// import { notFound } from 'next/navigation'
// import { getSurveyorById } from '@/lib/data'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import { Phone, Mail, MessageSquare } from 'lucide-react'

// export default function SurveyorPage({ params }: { params: { id: string } }) {
//   const surveyor = getSurveyorById(params.id)
//   if (!surveyor) notFound()

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Navbar />

//       <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">

//         {/* Profile Header — 3 columns on md+ */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

//           {/* Photo + reg */}
//           <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm border border-gray-100">
//             <img
//               src={surveyor.img}
//               alt={surveyor.name}
//               className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
//             />
//             <div className="text-center mt-1">
//               <p className="text-xs text-gray-400 font-medium">SURCON Registration</p>
//               <p className="text-sm font-bold text-[#1a7a3c] mt-0.5">{surveyor.regNumber}</p>
//             </div>
//           </div>

//           {/* Details */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center gap-4">
//             <div>
//               <h1 className="text-lg font-bold text-gray-900">{surveyor.name}</h1>
//               <p className="text-sm text-[#1a7a3c] font-medium mt-0.5">{surveyor.specialization}</p>
//             </div>
//             <div className="grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <p className="text-xs text-gray-400 font-medium">Company Name</p>
//                 <p className="font-semibold text-gray-800 mt-0.5">{surveyor.company}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400 font-medium">Location</p>
//                 <p className="font-semibold text-gray-800 mt-0.5">{surveyor.location}</p>
//               </div>
//             </div>
//             <div>
//               <p className="text-xs text-gray-400 font-medium">Office Address</p>
//               <p className="text-sm font-semibold text-gray-800 mt-0.5">32, Ibrahim Taiwo Road, Offa, Kwara State</p>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
//             <p className="font-semibold text-gray-900 mb-1">Links</p>
//             <a
//               href={`mailto:${surveyor.email}`}
//               className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#1a7a3c] hover:bg-[#e8f5ee] transition-all group"
//             >
//               <div className="w-8 h-8 bg-[#e8f5ee] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#1a7a3c]/20">
//                 <Mail className="w-4 h-4 text-[#1a7a3c]" />
//               </div>
//               <span className="text-sm text-gray-700 truncate">{surveyor.email}</span>
//             </a>
//             <a
//               href={`https://wa.me/${surveyor.phone.replace(/\D/g, '')}`}
//               className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#1a7a3c] hover:bg-[#e8f5ee] transition-all group"
//             >
//               <div className="w-8 h-8 bg-[#e8f5ee] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#1a7a3c]/20">
//                 <MessageSquare className="w-4 h-4 text-[#1a7a3c]" />
//               </div>
//               <span className="text-sm text-gray-700">Whatsapp</span>
//             </a>
//           </div>
//         </div>

//         {/* Contact + Message — 2 column on md+ */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//           {/* Contact */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <h2 className="font-semibold text-gray-900 mb-4">Contact</h2>
//             <div className="flex flex-col gap-3">
//               <a
//                 href={`tel:${surveyor.phone}`}
//                 className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#1a7a3c] hover:bg-[#e8f5ee] transition-all group"
//               >
//                 <div className="w-8 h-8 bg-[#e8f5ee] rounded-lg flex items-center justify-center shrink-0">
//                   <Phone className="w-4 h-4 text-[#1a7a3c]" />
//                 </div>
//                 <span className="text-sm text-gray-700">{surveyor.phone}</span>
//               </a>
//               <a
//                 href={`mailto:${surveyor.email}`}
//                 className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#1a7a3c] hover:bg-[#e8f5ee] transition-all group"
//               >
//                 <div className="w-8 h-8 bg-[#e8f5ee] rounded-lg flex items-center justify-center shrink-0">
//                   <Mail className="w-4 h-4 text-[#1a7a3c]" />
//                 </div>
//                 <span className="text-sm text-gray-700">{surveyor.email}</span>
//               </a>
//             </div>
//           </div>

//           {/* Send a message */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <h2 className="font-semibold text-gray-900 mb-4">Send a Message</h2>
//             <ContactForm surveyorName={surveyor.name} />
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   )
// }

// // Client component for the form
// function ContactForm({ surveyorName }: { surveyorName: string }) {
//   return (
//     <div className="flex flex-col gap-3">
//       <div>
//         <label className="block text-xs text-gray-500 font-medium mb-1">Full Name</label>
//         <input
//           type="text"
//           placeholder="enter your full name"
//           className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition"
//         />
//       </div>
//       <div className="grid grid-cols-2 gap-3">
//         <div>
//           <label className="block text-xs text-gray-500 font-medium mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="yourname@email.com"
//             className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition"
//           />
//         </div>
//         <div>
//           <label className="block text-xs text-gray-500 font-medium mb-1">Phone</label>
//           <input
//             type="tel"
//             placeholder="+234..."
//             className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition"
//           />
//         </div>
//       </div>
//       <div>
//         <label className="block text-xs text-gray-500 font-medium mb-1">Message</label>
//         <textarea
//           placeholder="Describe your land surveying request.."
//           rows={5}
//           className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition resize-none"
//         />
//       </div>
//       <button className="btn-green w-full text-center text-sm py-3">
//         Send Message
//       </button>
//     </div>
//   )
// }




'use client'

import { useParams } from 'next/navigation'
import { useSurveyor } from '@/lib/useSurveyor'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Phone, Mail, MessageSquare } from 'lucide-react'

export default function SurveyorPage() {
  const params = useParams<{ id: string }>()
  const { surveyor, loading, error } = useSurveyor(params.id)

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-gray-400">Loading profile…</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !surveyor) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-red-500 text-sm">{error ?? 'Surveyor not found.'}</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Profile Header — 3 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          {/* Photo + reg */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm border border-gray-100">
            <img
              src={surveyor.img}
              alt={surveyor.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="text-center mt-1">
              <p className="text-xs text-gray-400 font-medium">SURCON Registration</p>
              <p className="text-sm font-bold text-[#1a7a3c] mt-0.5">{surveyor.regNumber}</p>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center gap-4">
            <div>
              <h1 className="text-lg font-bold text-gray-900">{surveyor.name}</h1>
              {surveyor.specialization && (
                <p className="text-sm text-[#1a7a3c] font-medium mt-0.5">{surveyor.specialization}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-gray-400 font-medium">Company Name</p>
                <p className="font-semibold text-gray-800 mt-0.5">{surveyor.company}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Location</p>
                <p className="font-semibold text-gray-800 mt-0.5">{surveyor.location}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Office Address</p>
              <p className="text-sm font-semibold text-gray-800 mt-0.5">{surveyor.officeAddress}</p>
            </div>
          </div>

          {/* Links */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
            <p className="font-semibold text-gray-900 mb-1">Links</p>
            <a
              href={`mailto:${surveyor.email}`}
              className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#1a7a3c] hover:bg-[#e8f5ee] transition-all group"
            >
              <div className="w-8 h-8 bg-[#e8f5ee] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#1a7a3c]/20">
                <Mail className="w-4 h-4 text-[#1a7a3c]" />
              </div>
              <span className="text-sm text-gray-700 truncate">{surveyor.email}</span>
            </a>
            <a
              href={`https://wa.me/${surveyor.phone?.replace(/\D/g, '')}`}
              className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#1a7a3c] hover:bg-[#e8f5ee] transition-all group"
            >
              <div className="w-8 h-8 bg-[#e8f5ee] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#1a7a3c]/20">
                <MessageSquare className="w-4 h-4 text-[#1a7a3c]" />
              </div>
              <span className="text-sm text-gray-700">Whatsapp</span>
            </a>
          </div>
        </div>

        {/* Contact + Message — 2 column on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Contact */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-4">Contact</h2>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${surveyor.phone}`}
                className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#1a7a3c] hover:bg-[#e8f5ee] transition-all group"
              >
                <div className="w-8 h-8 bg-[#e8f5ee] rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#1a7a3c]" />
                </div>
                <span className="text-sm text-gray-700">{surveyor.phone}</span>
              </a>
              <a
                href={`mailto:${surveyor.email}`}
                className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#1a7a3c] hover:bg-[#e8f5ee] transition-all group"
              >
                <div className="w-8 h-8 bg-[#e8f5ee] rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#1a7a3c]" />
                </div>
                <span className="text-sm text-gray-700">{surveyor.email}</span>
              </a>
            </div>
          </div>

          {/* Send a message */}
          {/* <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-4">Send a Message</h2>
            <ContactForm />
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  )
}

function ContactForm() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <label className="block text-xs text-gray-500 font-medium mb-1">Full Name</label>
        <input
          type="text"
          placeholder="enter your full name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-gray-500 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="yourname@email.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 font-medium mb-1">Phone</label>
          <input
            type="tel"
            placeholder="+234..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs text-gray-500 font-medium mb-1">Message</label>
        <textarea
          placeholder="Describe your land surveying request.."
          rows={5}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-[#1a7a3c] focus:ring-1 focus:ring-[#1a7a3c] transition resize-none"
        />
      </div>
      <button className="btn-green w-full text-center text-sm py-3">
        Send Message
      </button>
    </div>
  )
}