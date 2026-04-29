// app/api/control/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const ESP32_IP = "http://192.168.X.X"; // ← update with real IP later

    const response = await fetch(`${ESP32_IP}/control`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    return NextResponse.json({ success: true, message: text });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'ESP32 unreachable' }, { status: 500 });
  }
}
