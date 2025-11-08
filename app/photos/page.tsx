import BlogPost from '@/components/BlogPost'

export default function PhotosPage() {
  return (
    <div className="flex flex-col gap-12 items-start w-full">
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
    </div>
  )
}
