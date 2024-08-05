import Globe from "@/components/magicui/globe";

export function GlobeDemo() {
  return (
    <div className="relative flex h-full max-w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className=" top-3 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Global reach, 
      </span>
      <Globe className="top-20" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
