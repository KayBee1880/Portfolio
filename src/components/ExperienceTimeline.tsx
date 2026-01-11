import type { Experience } from "@/data/experience";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
    return (
        <div className="space-y-6">
            {items.map((e) => (
                <div key={e.company + e.role} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                        <div>
                            <h3 className="text-lg font-semibold">{e.company}</h3>
                            <p className="text-sm text-zinc-600">{e.role}</p>
                        </div>
                        <div className="text-sm text-zinc-600 md:text-right">
                            <div>{e.dates}</div>
                            <div>{e.location}</div>
                        </div>
                    </div>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                        {e.bullets.map((b) => (
                            <li key={b}>{b}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
