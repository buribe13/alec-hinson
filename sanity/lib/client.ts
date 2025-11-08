import { createClient, SanityClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const isSanityConfigured = !!projectId

// Only create client if Sanity is configured
export const client: SanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2023-10-01',
      useCdn: true,
    })
  : (null as any) // Type assertion for when not configured - will be checked before use

