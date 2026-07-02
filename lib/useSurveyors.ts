// 'use client'

// import { useEffect, useState } from 'react'
// import { supabase } from '@/lib/supabase'
// import { Surveyor } from '@/components/SurveyorCard'

// export function useSurveyors() {
//   const [surveyors, setSurveyors] = useState<Surveyor[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     let isMounted = true

//     async function fetchSurveyors() {
//       setLoading(true)
//       setError(null)

//       const { data, error } = await supabase
//         .from('surveyors')
//         .select(`
//           id,
//           title,
//           first_name,
//           middle_name,
//           last_name,
//           surcon_registration_number,
//           surcon_prefix,
//           email,
//           phone_number,
//           company_name,
//           residency,
//           profile_image_url,
//           is_active
//         `)
//         .eq('is_active', true)
//         .order('last_name', { ascending: true })

//       if (!isMounted) return

//       if (error) {
//         setError(error.message)
//         setLoading(false)
//         return
//       }

//       const mapped: Surveyor[] = (data ?? []).map(row => ({
//         id: String(row.id),
//         name: `${row.title ?? ''} ${row.first_name ?? ''} ${row.middle_name ?? ''} ${row.last_name ?? ''}`
//           .replace(/\s+/g, ' ')
//           .trim(),
//         regNumber: `${row.surcon_prefix ?? ''}${row.surcon_registration_number ?? ''}`,
//         company: row.company_name,
//         location: row.residency,
//         phone: row.phone_number,
//         email: row.email,
//         specialization: '', // no specialization column in this table yet
//         img: row.profile_image_url,
//       }))

//       setSurveyors(mapped)
//       setLoading(false)
//     }

//     fetchSurveyors()
//     return () => { isMounted = false }
//   }, [])

//   return { surveyors, loading, error }
// }

'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Surveyor } from '@/components/SurveyorCard'

function shuffle<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function useSurveyors() {
  const [surveyors, setSurveyors] = useState<Surveyor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function fetchSurveyors() {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from('surveyors')
        .select(`
          id,
          title,
          first_name,
          middle_name,
          last_name,
          surcon_registration_number,
          surcon_prefix,
          email,
          phone_number,
          company_name,
          residency,
          profile_image_url,
          is_active
        `)
        .eq('is_active', true)
        .order('last_name', { ascending: true })

      if (!isMounted) return

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      const mapped: Surveyor[] = (data ?? []).map(row => ({
        id: String(row.id),
        name: `${row.title ?? ''} ${row.first_name ?? ''} ${row.middle_name ?? ''} ${row.last_name ?? ''}`
          .replace(/\s+/g, ' ')
          .trim(),
        regNumber: `${row.surcon_prefix ?? ''}${row.surcon_registration_number ?? ''}`,
        company: row.company_name,
        location: row.residency,
        phone: row.phone_number,
        email: row.email,
        specialization: '', // no specialization column in this table yet
        img: row.profile_image_url,
      }))

      setSurveyors(shuffle(mapped))
      setLoading(false)
    }

    fetchSurveyors()
    return () => { isMounted = false }
  }, [])

  return { surveyors, loading, error }
}