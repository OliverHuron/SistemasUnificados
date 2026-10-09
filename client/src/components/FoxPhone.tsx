export default function FoxPhone() {
  return (
    <div className="mx-auto w-full max-w-[230px]">
      <div className="relative rounded-[2.75rem] bg-slate-950 p-2 shadow-xl">
        <span className="absolute -left-[3px] top-16 h-6 w-[3px] rounded-l-sm bg-slate-700" />
        <span className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-l-sm bg-slate-700" />
        <span className="absolute -left-[3px] top-36 h-10 w-[3px] rounded-l-sm bg-slate-700" />
        <span className="absolute -right-[3px] top-28 h-14 w-[3px] rounded-r-sm bg-slate-700" />

        <div
          className="relative overflow-hidden rounded-[2.25rem] bg-white"
          style={{ aspectRatio: "9 / 19.5" }}
        >
          <video
            src="/fox-flat-white.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="h-full w-full object-contain"
          />

          <div className="absolute left-1/2 top-2.5 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

          <div className="absolute bottom-1.5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-slate-900/60" />
        </div>
      </div>
      <p className="mt-2 text-center text-xs font-medium text-slate-500">
        Conoce a nuestra mascota
      </p>
    </div>
  );
}
