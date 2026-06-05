export interface SkillGroup {
  label: string;
  items: string[];
}

export interface InterestItem {
  tag: string;
  title: string;
  body: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current: boolean;
  summary: string;
  stack: string[];
}

export interface EducationItem {
  name: string;
  school: string;
  year: string;
}
