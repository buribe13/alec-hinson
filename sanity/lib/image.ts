import imageUrlBuilder from '@sanity/image-url'
import { client, isSanityConfigured } from './client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = isSanityConfigured ? imageUrlBuilder(client) : null

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    throw new Error('Sanity is not configured')
  }
  return builder.image(source)
}

