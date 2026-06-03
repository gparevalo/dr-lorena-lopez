export interface TreatmentInfo {
  hero_label: string;
  name: string;
  tagline: string;
  positioning: string;
  candidate_title: string;
  candidate_body: string;
  candidate_points: string[];
  process_steps: Array<{ num: string; title: string; body: string }>;
  benefits: string[];
}
