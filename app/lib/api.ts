// app/lib/api.ts
const ESP32_IP = "http://192.168.X.X"; // ← teammate gives you this IP from Serial Monitor

export async function getSensorData(): Promise<SensorData> {
  const res = await fetch(`${ESP32_IP}/data.json`);
  return res.json();
}

export async function sendControlCommand(exhaust: string, speed: string): Promise<void> {
  await fetch(`${ESP32_IP}/control`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ exhaust, speed }),
  });
}
