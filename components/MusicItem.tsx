interface MusicItemProps {
  title: string
  date: string
  imageUrl?: string | null
  imageAlt?: string
  duration: string
}

export default function MusicItem({ 
  title, 
  date, 
  imageUrl, 
  imageAlt = "",
  duration 
}: MusicItemProps) {
  return (
    <div className="flex flex-col gap-1 flex-1 min-w-0">
      {/* Title and Date */}
      <div className="font-medium text-[15px] text-black dark:text-white tracking-[-0.25px] m-0 p-0 leading-none">
        {title}, {date}
      </div>
      
      {/* Image */}
      <div className="bg-[#202020] w-full aspect-square flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
      
      {/* Duration */}
      <div className="font-medium text-[15px] text-white/40 tracking-[-0.25px] underline m-0 p-0 leading-none">
        {duration}
      </div>
    </div>
  )
}

