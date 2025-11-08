import { client, isSanityConfigured } from '@/sanity/lib/client'
import BlogPost from '@/components/BlogPost'

interface Post {
  _id: string
  date: string
  image?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  caption?: string
}

async function getPosts(): Promise<Post[]> {
  // Check if Sanity is configured
  if (!isSanityConfigured) {
    return []
  }

  const query = `*[_type == "post"] | order(date desc) {
    _id,
    date,
    image,
    caption
  }`
  
  try {
    const posts = await client.fetch<Post[]>(query)
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="flex flex-col gap-12 items-start w-full">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <BlogPost
                  key={post._id}
                  date={post.date || "july 24, 2012"}
                  imageUrl={null}
                  imageAlt={post.image?.alt || ""}
                  caption={post.caption}
                  isLatest={index === 0}
                  timestamp="10:29 PM"
                />
              ))
            ) : (
              <>
                <BlogPost
                  date="july 24, 2012"
                  imageUrl={null}
                  imageAlt=""
                  isLatest={true}
                  timestamp="10:29 PM"
                />
                <BlogPost
                  date="july 12, 2012"
                  imageUrl={null}
                  imageAlt=""
                  timestamp="10:29 PM"
                />
              </>
            )}
    </div>
  )
}

