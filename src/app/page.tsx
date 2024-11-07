import { DatePicker } from "@/components/ui/date-picker";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-purple-800 via-indigo-600 to-purple-800 text-white">
      <DatePicker />
    </div>
  );
}
