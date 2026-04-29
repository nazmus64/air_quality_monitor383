// app/api/sensors/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const ESP32_IP = "http://192.168.X.X"; // ← update with real IP later

    const response = await fetch(`${ESP32_IP}/data.json`, {
      cache: 'no-store',
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'ESP32 unreachable' }, { status: 500 });
  }
}
