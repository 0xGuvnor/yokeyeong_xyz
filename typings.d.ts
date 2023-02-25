import { type } from "os";

export interface ProjectData {
  id: string;
  title: string;
  tags: string[];
  image: string;
  description: string;
  sourceCode:
    | `https://github.com/0xGuvnor/${string}`
    | {
        frontend: `https://github.com/0xGuvnor/${string}`;
        backend: `https://github.com/0xGuvnor/${string}`;
      };
  deployment: `https://${string}`;
}

type TechStack = {
  name: string;
  image: string;
};

export interface AboutData {
  languages: TechStack[];
  frameworks: TechStack[];
}
