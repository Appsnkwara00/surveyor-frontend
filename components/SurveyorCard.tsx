import Link from 'next/link'
import { Building2, MapPin, Phone, Mail, UserSquare2 } from 'lucide-react'

export interface Surveyor {
  id: string
  name: string
  regNumber: string
  company: string
  location: string
  phone: string
  email: string
  specialization: string
  img: string
}

export default function SurveyorCard({ surveyor }: { surveyor: Surveyor }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start gap-3">
        <img
          src={surveyor.img}
          alt={surveyor.name}
          className="w-12 h-12 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="font-semibold text-gray-900 text-sm leading-snug">{surveyor.name}</p>
          <p className="text-xs text-gray-400 mt-0.5">{surveyor.regNumber}</p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2.5 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-gray-400 shrink-0" />
          <span className="truncate">{surveyor.company}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
          <span>{surveyor.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-400 shrink-0" />
          <span>{surveyor.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-400 shrink-0" />
          <span className="truncate">{surveyor.email}</span>
        </div>
        <div className="flex items-start gap-2">
          <UserSquare2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
          <span className="text-xs text-gray-500 leading-snug">{surveyor.specialization}</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        href={`/surveyor/${surveyor.id}`}
        className="btn-green w-full text-center text-sm mt-auto block"
      >
        View Profile
      </Link>
    </div>
  )
}
