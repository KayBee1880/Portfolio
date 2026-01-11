import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
    const primaryLink =
        project.links?.live && project.links.live !== "#"
            ? project.links.live
            : project.links?.code;

    return (
        <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm
                 transition-all hover:-translate-y-1 hover:shadow-md
                 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-zinc-950 group-hover:underline dark:text-white">
                        {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-white/65">
                        {project.tagline}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-white/50">
                        {project.role}
                    </p>
                </div>

                <ArrowUpRight className="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-900 dark:group-hover:text-white" />
            </div>

            {/* Categories */}
            <div className="mt-4 flex flex-wrap gap-2">
                {project.categories.map((c) => (
                    <span
                        key={c}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700
                       dark:border-white/10 dark:bg-black/20 dark:text-white/80"
                    >
                        {c}
                    </span>
                ))}
            </div>

            {/* Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                    <span
                        key={s}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700
                       dark:bg-white/10 dark:text-white/80"
                    >
                        {s}
                    </span>
                ))}
            </div>

            {/* Bullets */}
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-white/75">
                {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                ))}
            </ul>

            {/* Metrics */}
            {project.metrics?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((m) => (
                        <span
                            key={m}
                            className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-white
                         dark:bg-white dark:text-black"
                        >
                            {m}
                        </span>
                    ))}
                </div>
            ) : null}
        </a>
    );
}
