"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, Wrench } from "lucide-react";

import { categories, projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function ProjectsPage() {
    const router = useRouter();
    const [active, setActive] = useState<ProjectCategory | "All">("All");
    const [q, setQ] = useState("");

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();

        return projects.filter((p) => {
            const matchesCategory = active === "All" || p.categories.includes(active);

            const blob =
                `${p.name} ${p.tagline} ${p.role} ${p.categories.join(" ")} ${p.stack.join(
                    " "
                )} ${p.bullets.join(" ")} ${(p.metrics ?? []).join(" ")}`.toLowerCase();

            const matchesQuery = !query || blob.includes(query);

            return matchesCategory && matchesQuery;
        });
    }, [active, q]);

    return (
        <div className="min-h-screen">
            {/* LIGHT background */}
            <div className="pointer-events-none fixed inset-0 -z-10 dark:hidden">
                <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.20),transparent_60%)] blur-2xl" />
                <div className="absolute -bottom-48 left-1/3 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_60%)] blur-2xl" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.04),transparent_55%)]" />
            </div>

            {/* DARK background */}
            <div className="pointer-events-none fixed inset-0 -z-10 hidden dark:block">
                <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.30),transparent_60%)] blur-2xl" />
                <div className="absolute -bottom-48 left-1/3 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.16),transparent_60%)] blur-2xl" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
            </div>

            <main className="mx-auto max-w-6xl px-6 pb-20 pt-10">
                {/* Top controls */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50
                         dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:bg-white/10"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </button>

                        <a
                            href="/"
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50
                         dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:bg-white/10"
                        >
                            <Home className="h-4 w-4" />
                            Home
                        </a>

                        <a
                            href="/#skills"
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50
                         dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:bg-white/10"
                        >
                            <Wrench className="h-4 w-4" />
                            Tooling
                        </a>
                    </div>

                    <ThemeToggle />
                </div>

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
                        Projects
                    </h1>
                    <p className="mt-3 max-w-3xl text-zinc-600 dark:text-white/70">
                        A hybrid portfolio across software engineering, cloud infrastructure,
                        and cybersecurity.
                    </p>

                    <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {/* Filters */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setActive("All")}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${active === "All"
                                        ? "border-zinc-900 bg-zinc-900 text-white dark:border-white/20 dark:bg-white dark:text-black"
                                        : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                                    }`}
                            >
                                All
                            </button>

                            {categories.map((c) => (
                                <button
                                    key={c}
                                    onClick={() => setActive(c)}
                                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${active === c
                                            ? "border-zinc-900 bg-zinc-900 text-white dark:border-white/20 dark:bg-white dark:text-black"
                                            : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search projects (e.g., Terraform, Splunk, Kafka)…"
                            className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-400
                         dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/50 dark:backdrop-blur dark:focus:border-white/25 md:w-96"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="grid gap-6 md:grid-cols-2">
                    {filtered.length === 0 ? (
                        <div className="md:col-span-2 rounded-2xl border border-zinc-200 bg-white p-8 text-zinc-600 shadow-sm
                            dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:backdrop-blur dark:shadow-none">
                            No results. Try a different keyword or filter.
                        </div>
                    ) : (
                        filtered.map((p) => <ProjectCard key={p.slug} project={p} />)
                    )}
                </div>
            </main>
        </div>
    );
}
