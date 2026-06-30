'use client'

import Image from 'next/image'
import { useExecutives } from '@/lib/useExecutives'

export default function LeadershipSection() {
  const { leaders, loading, error } = useExecutives()

  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-400 text-sm">Loading leadership team…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 text-sm">Couldn't load leadership team: {error}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {leaders.map((l) => (
        <div
          key={l.id}
          className=" cursor-pointer rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow p-2"
        >
          <Image
            src={l.img}
            alt={l.name}
            width={373}
            height={373}
            className="w-[373px] h-[373px] mb-[10px] object-cover rounded-2xl"
          />
          <div className="p-4 border border-[#E5E5E5] rounded-2xl">
            <p className="font-semibold text-gray-900 text-sm">
              {l.name}
            </p>
            <p className="text-sm text-gray-500 mt-0.5">{l.role}</p>
          </div>
        </div>
      ))}
    </div>
  )
}