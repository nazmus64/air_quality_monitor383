// app/types/SensorData.ts
export interface SensorData {
  temperature: number;
  humidity: number;
  co2: number;
  aqi: number;
  pm25?: number;
  pm10?: number;
  timestamp: string;
}
