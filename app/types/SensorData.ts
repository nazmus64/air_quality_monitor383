// app/types/SensorData.ts
export interface SensorData {
  temperature: number;
  humidity:    number;
  aqi:         number;
  pm1_0?:      number;
  pm25?:       number;
  pm10?:       number;
  alert?:      boolean;
  timestamp:   string;
}
