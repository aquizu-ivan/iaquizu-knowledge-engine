export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(30,41,59,0.2),_transparent_42%)]" />
      <section className="w-full max-w-3xl rounded-3xl border border-white/20 bg-white/75 p-10 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Foundation
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          IAQUIZU Knowledge Engine
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
          Base tecnica inicial activa para construir el motor de conocimiento y
          experiencia inteligente de IAQUIZU.
        </p>
      </section>
    </main>
  );
}
