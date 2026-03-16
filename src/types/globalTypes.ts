export const Category = {
  FRONT: "Front",
  BACK: "Back",
  FULLSTACK: "Fullstack",
  ALGORITHM: "Algorithm",
  AI: "AI",
  OS: "Operating System",
};

export type Category = (typeof Category)[keyof typeof Category];

export type TProject = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  repositoryUrl?: string;
  secondRepositoryUrl?: string;
  category: Category;
  technologies: string[];
};

export type TInternShip = {
  title: string;
  company: string;
  companyWebsite?: string;
  startDate: string;
  endDate: string | null;
  period: string;
  description: string;
  technologies: string[];
};

const randomizeCategoriesBadge = () => {
  const colors = [
    "badge-primary",
    "badge-secondary",
    "badge-accent",
    "badge-info",
    "badge-success",
    "badge-warning",
    "badge-error",
  ];
  const colorsLength = colors.length;
  const categories: string[] = Object.values(Category);
  const categoriesColors = new Map<string, string>();

  categories.map((category: string) => {
    categoriesColors.set(
      category,
      colors[Math.floor(Math.random() * colorsLength)],
    );
  });

  return categoriesColors;
};

export const categoriesColors = randomizeCategoriesBadge();
