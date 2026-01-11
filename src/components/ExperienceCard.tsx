import type { Experience } from "@/data/experience";

export function ExperienceCard({ item }: { item: Experience }) {
    return (
        <div
            className="
        group rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.18)]
        transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_35px_80px_-30px_rgba(0,0,0,0.22)]
        dark:border-white/10 dark:bg-white/5 dark:backdrop-blur dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]
        dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]
      "
        >
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{item.company}</h3>
                    <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-white/80">{item.role}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700
                             dark:border-white/10 dark:bg-black/20 dark:text-white/80">
                            {item.type}
                        </span>
                        {item.tags?.slice(0, 4).map((t) => (
                            <span
                                key={t}
                                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700
                           dark:bg-white/10 dark:text-white/80"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="shrink-0 text-sm text-zinc-600 dark:text-white/60 md:text-right">
                    <div className="font-medium text-zinc-700 dark:text-white/80">{item.dates}</div>
                    <div>{item.location}</div>
                </div>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-white/80">
                {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                ))}
            </ul>
        </div>
    );
}
