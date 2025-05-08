export interface Project {
  id: string;
  title: string;
  description: string;
  sourceCode: string;
  liveDemo: string;
  image: string;
  technologies: string[];
  caseStudy: {
    overview: string;
    challenges: string[];
    solutions: string[];
    outcomes: string[];
  };
}