export type PatunganStatus =
  | "active"
  | "completed"
  | "expired";

export interface Patungan {
  id: string;
  title: string;
  description: string;
  image_url: string;
  target_amount: number;
  collected_amount: number;
  contributor_count: number;
  deadline_at: string;
  status: PatunganStatus;
}
