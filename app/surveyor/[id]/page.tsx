'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useSurveyor } from '@/lib/useSurveyor'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Phone, Mail, MessageSquare } from 'lucide-react'

export const dynamic = 'force-dynamic'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function SurveyorPage() {
  const params = useParams<{ id: string }>()
  const { surveyor, loading, error } = useSurveyor(params.id)

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Loading profile…
          </motion.p>
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
          <motion.p
            className="text-red-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {error ?? 'Surveyor not found.'}
          </motion.p>
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
          <motion.div
            className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm border border-gray-100"
            {...fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={surveyor.img}
              alt={surveyor.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="text-center mt-1">
              <p className="text-xs text-gray-400 font-medium">SURCON Registration</p>
              <p className="text-sm font-bold text-[#1a7a3c] mt-0.5">{surveyor.regNumber}</p>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center gap-4"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
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
                <p className="text-xs text-gray-400 font-medium">Residency</p>
                <p className="font-semibold text-gray-800 mt-0.5">{surveyor.location}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Office Address</p>
              <p className="text-sm font-semibold text-gray-800 mt-0.5">{surveyor.officeAddress}</p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.div>
        </div>

        {/* Contact — single column now that message form is hidden */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Contact */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.div>

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

// ContactForm kept for when the "Send a Message" section is re-enabled above.
// function ContactForm() {
//   ...
// }