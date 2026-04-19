// app/components/ControlPanel.tsx
"use client";
import React, { useState } from "react";
// import { sendControlCommand } from "../lib/api";
import { sendControlCommand } from "@/app/lib/api";

export const ControlPanel: React.FC = () => {
  const [exhaustOn, setExhaustOn] = useState(false);

  const handleToggle = async () => {
    const newState = !exhaustOn;
    setExhaustOn(newState);
    await sendControlCommand(newState ? "ON" : "OFF", "SLOW");
  };

  const handleSpeed = async (speed: string) => {
    if (exhaustOn) await sendControlCommand("ON", speed);
  };

  return (
    <div className="control-panel">
      <h3>Exhaust Control</h3>
      <button onClick={handleToggle}>
        {exhaustOn ? "Turn OFF" : "Turn ON"}
      </button>
      <div className="speed-buttons">
        <button onClick={() => handleSpeed("SLOW")}>Slow</button>
        <button onClick={() => handleSpeed("MID")}>Mid</button>
        <button onClick={() => handleSpeed("FAST")}>Fast</button>
      </div>
    </div>
  );
};
