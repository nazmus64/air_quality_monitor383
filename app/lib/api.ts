// app/lib/api.ts
export async function getSensorData(): Promise<SensorData> {
  const res = await fetch('http://esp32.local/data.json');
  return res.json();
}

export async function sendControlCommand(exhaust: string, speed: string): Promise<void> {
  await fetch('http://esp32.local/control', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ exhaust, speed }),
  });
}
