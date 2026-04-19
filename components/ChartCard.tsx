// app/components/ChartCard.tsx
"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { SensorData } from "@/app/types/SensorData";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

interface ChartCardProps {
  data: SensorData[];
  label: string;
  field: keyof SensorData;
}

export const ChartCard: React.FC<ChartCardProps> = ({ data, label, field }) => {
  const chartData = {
    labels: data.map((d) => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label,
        data: data.map((d) => d[field] as number),
        borderColor: "#0070f3",
        backgroundColor: "rgba(0, 112, 243, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="chart-card">
      <h3>{label}</h3>
      <Line data={chartData} />
    </div>
  );
};
