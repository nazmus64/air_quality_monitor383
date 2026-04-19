// app/components/StatusCard.tsx
"use client";
import React from "react";
// import { SensorData } from "../types/SensorData";
import { SensorData } from "@/app/types/SensorData";
interface StatusCardProps {
  connected: boolean;
  latest?: SensorData;
}

export const StatusCard: React.FC<StatusCardProps> = ({
  connected,
  latest,
}) => {
  return (
    <div className="status-card">
      <h3>ESP32 Connection Status</h3>
      <p style={{ color: connected ? "green" : "red" }}>
        {connected ? "Connected ✅" : "Disconnected ❌"}
      </p>
      <div>
        <strong>Temperature:</strong> {connected ? latest?.temperature : 0} °C
        <br />
        <strong>Humidity:</strong> {connected ? latest?.humidity : 0} %<br />
        <strong>CO₂:</strong> {connected ? latest?.co2 : 0} ppm
        <br />
        <strong>AQI:</strong> {connected ? latest?.aqi : 0}
      </div>
    </div>
  );
};
