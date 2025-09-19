// ExperienceFullScreen.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

// -------------------- Data --------------------
const data = [
  {
    id: 1,
    type: "Intern",
    company: "ABC Technologies",
    role: "Frontend Developer Intern",
    duration: "Jan 2023 – Apr 2023",
    location: "Remote",
    bullets: [
      "Built responsive UI components with React & Tailwind.",
      "Optimized bundle size; reduced LCP by 22%.",
      "Implemented JWT auth & protected routes.",
    ],
    metrics: [
      { label: "Impact", value: 75 },
      { label: "Performance", value: 68 },
    ],
    tech: [
      { name: "React", value: 80 },
      { name: "Tailwind", value: 70 },
      { name: "Axios", value: 60 },
    ],
    snapshots: ["/assets/snap1.png", "/assets/snap2.png"],
    logo: "/assets/logos/abc.png",
    testimonial:
      "Prabhat delivered polished UI components and improved performance noticeably. — Mentor",
  },
  {
    id: 2,
    type: "Job",
    company: "PixelCraft Labs",
    role: "UI Engineer",
    duration: "May 2023 – Dec 2024",
    location: "Bengaluru, India",
    bullets: [
      "Led design-system adoption and component library.",
      "Improved accessibility to WCAG AA standards.",
      "Mentored 3 juniors and reviewed PRs.",
    ],
    metrics: [
      { label: "Impact", value: 88 },
      { label: "Team", value: 82 },
    ],
    tech: [
      { name: "TypeScript", value: 78 },
      { name: "Storybook", value: 65 },
      { name: "React", value: 85 },
    ],
    snapshots: ["/assets/snap3.png"],
    logo: "/assets/logos/pixelcraft.png",
    testimonial:
      "Instrumental in building our design system and improving collaboration. — Lead",
  },
  {
    id: 3,
    type: "OSS",
    company: "OpenSource Project",
    role: "Contributor",
    duration: "Feb 2022 – Present",
    location: "Remote",
    bullets: ["Authored performance patches", "Reviewed PRs & wrote tests"],
    metrics: [
      { label: "Impact", value: 70 },
      { label: "Quality", value: 80 },
    ],
    tech: [
      { name: "Node.js", value: 70 },
      { name: "MongoDB", value: 60 },
    ],
    snapshots: [],
    logo: "/assets/logos/oss.png",
    testimonial:
      "Fantastic contributor and quick to the problem. — Maintainer",
  },
];

const FILTERS = ["All", "Intern", "Job", "Freelance", "OSS"];

// -------------------- Sub Components --------------------
export function FilterTabs({ active, onChange }) {
  return (
    <div className="flex gap-3 flex-wrap justify-center md:justify-start">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-sky-300 ${
            active === f
              ? "bg-sky-600 text-white shadow-md"
              : "bg-white/60 dark:bg-gray-800/60"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export function LogoGrid({ items, selectedId, onSelect }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-4">
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => onSelect(it.id)}
          className={`group p-3 rounded-lg shadow-sm transform transition-all focus:outline-none focus:ring-2 focus:ring-sky-300 flex items-center justify-center ${
            selectedId === it.id
              ? "scale-105 bg-sky-50 dark:bg-sky-900/30 shadow-lg"
              : "bg-white/70 dark:bg-gray-900/60"
          }`}
          aria-label={`Open ${it.company} details`}
        >
          <img
            src={it.logo}
            alt={it.company}
            className="w-12 h-12 object-contain"
          />
        </button>
      ))}
    </div>
  );
}

export function TechChart({ tech }) {
  return (
    <div style={{ width: "100%", height: 140 }} className="mt-2">
      <ResponsiveContainer>
        <BarChart
          data={tech}
          layout="vertical"
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis dataKey="name" type="category" width={80} />
          <Tooltip />
          <Bar dataKey="value" barSize={12} radius={[6, 6, 6, 6]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SnapshotRow({ snapshots }) {
  if (!snapshots || snapshots.length === 0)
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        No snapshots provided.
      </p>
    );
  return (
    <div className="flex gap-4 overflow-x-auto py-2">
      {snapshots.map((s, i) => (
        <div
          key={i}
          className="min-w-[180px] rounded-md overflow-hidden shadow-md"
        >
          <img
            src={s}
            alt={`snapshot-${i}`}
            className="w-full h-32 object-cover"
          />
        </div>
      ))}
    </div>
  );
}

// -------------------- Main Component --------------------
function Experience() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(data[0].id);

  const items = data.filter((d) => filter === "All" || d.type === filter);
  const selected = items.find((it) => it.id === selectedId) || items[0] || null;

  return (
    <section
    id="experience
  className="
    min-h-screen py-16 px-4 md:px-12 lg:px-20
    bg-gradient-to-br 
    from-blue-50 via-cyan-200 to-purple-100/70       /* Light Mode */
    dark:from-gray-900/80 dark:via-purple-900/60 dark:to-indigo-800/70 /* Dark Mode */
    transition-colors duration-700
  "
>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 h-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
              Experience Dashboard
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Interactive, full-screen, and recruiter-friendly experience section.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="/assets/Prabhat_Resume.pdf"
              className="px-5 py-2 rounded-md bg-sky-600 text-white text-sm shadow-md hover:opacity-95 transition"
            >
              Download CV
            </a>
            <div className="hidden sm:block">
              <FilterTabs active={filter} onChange={setFilter} />
            </div>
          </div>
        </div>

        {/* Logo Grid */}
        <LogoGrid items={items} selectedId={selectedId} onSelect={setSelectedId} />

        {/* Experience Panel */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row gap-8"
            >
              {/* Left Column */}
              <div className="md:w-2/3 flex flex-col gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow">
                    <img
                      src={selected.logo}
                      alt={selected.company}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {selected.role}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {selected.company} • {selected.duration} • {selected.location}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selected.bullets.map((b, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded bg-sky-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4">
                  {selected.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-md p-4 bg-sky-50 dark:bg-gray-800 shadow-sm min-w-[120px]"
                    >
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {m.label}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {m.value}%
                      </p>
                    </div>
                  ))}
                </div>

                {/* Snapshots */}
                <div>
                  <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">
                    Snapshots
                  </h4>
                  <SnapshotRow snapshots={selected.snapshots} />
                </div>
              </div>

              {/* Right Column */}
              <div className="md:w-1/3 flex flex-col gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-800 dark:text-white mb-2">
                    Tech Progression
                  </h4>
                  <TechChart tech={selected.tech} />
                </div>

                <div className="rounded-md p-4 bg-sky-50 dark:bg-gray-800 shadow-sm">
                  <h5 className="text-sm font-medium text-gray-800 dark:text-white">
                    Testimonial
                  </h5>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    "{selected.testimonial}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="flex flex-col md:flex-row md:justify-between mt-auto gap-4">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-sm underline text-sky-600 dark:text-sky-400">
              View project
            </a>
            <a href="#" className="text-sm underline text-sky-600 dark:text-sky-400">
              Show more
            </a>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Updated: Sep 15, 2025
          </div>
        </div>

        {/* Mobile Filter */}
        <div className="mt-6 sm:hidden">
          <FilterTabs active={filter} onChange={setFilter} />
        </div>
      </div>
    </section>
  );
}

export default Experience;
