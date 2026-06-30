'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export interface SurveyorProfile {
  id: string
  name: string
  regNumber: string
  company: string
  location: string
  officeAddress: string
  phone: string
  email: string
  specialization: string
  img: string
}

export function useSurveyor(id: string) {
  const [surveyor, setSurveyor] = useState<SurveyorProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function fetchOne() {
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
          company_address,
          residency,
          profile_image_url
        `)
        .eq('id', id)
        .single()

      if (!isMounted) return

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      setSurveyor({
        id: String(data.id),
        name: `${data.title ?? ''} ${data.first_name ?? ''} ${data.middle_name ?? ''} ${data.last_name ?? ''}`
          .replace(/\s+/g, ' ')
          .trim(),
        regNumber: `${data.surcon_prefix ?? ''}${data.surcon_registration_number ?? ''}`,
        company: data.company_name,
        location: data.residency,
        officeAddress: data.company_address,
        phone: data.phone_number,
        email: data.email,
        specialization: '', // no specialization column in this table yet
        img: data.profile_image_url,
      })
      setLoading(false)
    }

    if (id) fetchOne()
    return () => { isMounted = false }
  }, [id])

  return { surveyor, loading, error }
}