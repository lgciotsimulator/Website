export async function fetchData<T>(filename: string): Promise<T> {
  const basePath = import.meta.env.BASE_URL || '/';
  const response = await fetch(`${basePath}data/${filename}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${filename}`);
  }
  return response.json();
}

export interface SiteData {
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  logo: string;
  socialLinks: {
    linkedin: string;
    instagram: string;
    whatsapp: string;
    googleForm: string;
  };
  email: string;
  copyright: string;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  taglines: string[];
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  highlights: {
    title: string;
    description: string;
  }[];
  differentiator: {
    title: string;
    points: string[];
  };
}

export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExpertiseData {
  title: string;
  subtitle: string;
  description: string;
  areas: ExpertiseArea[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string | null;
}

export interface TeamData {
  title: string;
  subtitle: string;
  description: string;
  members: TeamMember[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  image: string | null;
}

export interface AchievementsData {
  title: string;
  subtitle: string;
  items: Achievement[];
}

export interface Company {
  id: string;
  name: string;
  description: string;
}

export interface IndustryData {
  title: string;
  subtitle: string;
  description: string;
  companies: Company[];
  learnings: string[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface NavigationData {
  items: NavItem[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repos');
  }
  return response.json();
}