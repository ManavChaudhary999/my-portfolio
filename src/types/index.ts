import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

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

export interface SocailLinks {
  id: string;
  link: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}