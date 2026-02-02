"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Section } from "@/components/Section";
import { skillsChart } from "@/lib/data";
import { useTheme } from "next-themes";
import { useMemo } from "react";

/** Grayscale fill for bars */
function useChartColors() {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme ?? "light";
  return useMemo(
    () => ({
      bar: theme === "dark" ? "hsl(0,0%,75%)" : "hsl(0,0%,25%)",
      grid: theme === "dark" ? "hsl(0,0%,25%)" : "hsl(0,0%,88%)",
      text: theme === "dark" ? "hsl(0,0%,70%)" : "hsl(0,0%,40%)",
      tooltipBg: theme === "dark" ? "hsl(0,0%,12%)" : "hsl(0,0%,98%)",
      tooltipBorder: theme === "dark" ? "hsl(0,0%,22%)" : "hsl(0,0%,90%)",
    }),
    [theme]
  );
}

/** Data already sorted highest to lowest in lib/data.ts */
const data = skillsChart.map((d) => ({
  name: d.subject,
  value: d.value,
  fullMark: d.fullMark,
}));

function CustomTooltip({
  active,
  payload,
  label,
  colors,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
  colors: ReturnType<typeof useChartColors>;
}) {
  if (!active || !payload?.length || !label) return null;
  return (
    <div
      className="px-3 py-2 rounded border text-sm shadow-lg"
      style={{
        backgroundColor: colors.tooltipBg,
        borderColor: colors.tooltipBorder,
        color: "hsl(var(--foreground))",
      }}
      role="tooltip"
    >
      <p className="font-medium">{label}</p>
      <p className="text-muted-foreground">{payload[0].value} / 10</p>
    </div>
  );
}

export function SkillsChart() {
  const colors = useChartColors();

  return (
    <Section id="skills" title="Skills">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-[520px] w-full"
        aria-label="Skills self-assessment chart"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 8, right: 24, left: 0, bottom: 8 }}
          >
            <XAxis
              type="number"
              domain={[0, 10]}
              tick={{ fill: colors.text, fontSize: 11 }}
              axisLine={{ stroke: colors.grid }}
              tickLine={{ stroke: colors.grid }}
            />
            <YAxis
              type="category"
              dataKey="name"
              width={180}
              tick={{ fill: colors.text, fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={<CustomTooltip colors={colors} />}
              cursor={{ fill: "hsl(var(--muted))", opacity: 0.3 }}
            />
            <Bar dataKey="value" radius={0} maxBarSize={22}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors.bar} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
      <p className="text-xs text-muted-foreground mt-4 text-center">
        Self-assessed proficiency (1–10), highest to lowest. For context only.
      </p>
    </Section>
  );
}
