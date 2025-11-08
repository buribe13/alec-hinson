import MusicItem from "@/components/MusicItem";

// Mock data - replace with Sanity query later
const musicItems = [
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
  { title: "Title", date: "july 24, 2012", duration: "12:10" },
];

export default function MusicPage() {
  // Group items into rows of 2
  type MusicItem = (typeof musicItems)[number];
  const rows: MusicItem[][] = [];
  for (let i = 0; i < musicItems.length; i += 2) {
    rows.push(musicItems.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col gap-6 items-start w-full">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-start gap-3 w-full">
          {row.map((item, itemIndex) => (
            <MusicItem
              key={`${rowIndex}-${itemIndex}`}
              title={item.title}
              date={item.date}
              imageUrl={null}
              duration={item.duration}
            />
          ))}
          {/* Fill remaining slots if row has less than 2 items */}
          {row.length < 2 &&
            Array.from({ length: 2 - row.length }).map((_, i) => (
              <div key={`empty-${i}`} className="flex-1" />
            ))}
        </div>
      ))}
    </div>
  );
}
