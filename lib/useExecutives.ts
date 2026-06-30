'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export interface Executive {
  id: string
  name: string
  role: string
  img: string
}

export function useExecutives() {
  const [leaders, setLeaders] = useState<Executive[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function fetchExecutives() {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from('executives')
        .select('id, name, position, image')

      if (!isMounted) return

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      const roleRank = (position: string) => {
        const p = position?.toLowerCase() ?? ''
        if (p.includes('vice')) return 1
        if (p.includes('chairman')) return 0
        if (p.includes('secretary')) return 2
        return 3
      }

      const mapped: Executive[] = (data ?? [])
        .map(row => ({
          id: String(row.id),
          name: row.name,
          role: row.position,
          img: row.image,
        }))
        .sort((a, b) => roleRank(a.role) - roleRank(b.role))

      setLeaders(mapped)
      setLoading(false)
    }

    fetchExecutives()
    return () => { isMounted = false }
  }, [])

  return { leaders, loading, error }
}