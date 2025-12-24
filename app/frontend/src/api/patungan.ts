import { type Patungan } from "../types/patungan";

const BASE_URL = import.meta.env.VITE_API_URL;

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "omit",
    ...options,
  });

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message);
  }

  return json.data;
}

export function fetchPatungans() {
  return request<Patungan[]>("?path=patungans");
}

export function createPatungan(payload: {
  title: string;
  target_amount: number;
}) {
  return request<void>("?path=patungan/create", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

