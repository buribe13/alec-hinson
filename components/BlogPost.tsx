interface BlogPostProps {
  date: string;
  imageUrl: string | null;
  imageAlt: string;
  caption?: string;
  isLatest?: boolean;
  timestamp?: string;
}

export default function BlogPost({
  date,
  imageUrl,
  imageAlt,
  caption,
  isLatest = false,
  timestamp = "10:29 PM",
}: BlogPostProps) {
  return (
    <article className="flex flex-col gap-1 w-full">
      {/* Date Label */}
      <div className="border-0 border-solid border-black dark:border-white w-full">
        <div className="flex gap-6 items-center py-0">
          <p className="font-medium text-[15px] text-black dark:text-white tracking-[-0.25px]">
            {isLatest && <span className="font-bold">latest post </span>}
            {isLatest && "→ "}
            {date}
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="bg-[#202020] h-[500px] w-full flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>

      {/* Timestamp */}
      <div className="border-0 border-solid border-black dark:border-white w-full">
        <div className="flex gap-6 items-center py-0">
          <p className="font-medium text-[15px] text-white/40 tracking-[-0.25px] underline">
            {timestamp}
          </p>
        </div>
      </div>
    </article>
  );
}
