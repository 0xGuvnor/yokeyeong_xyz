import { type } from "os";

type Tag = { name: string; link: `https://${string}` };

export interface ProjectData {
  id: string;
  title: string;
  tags: Tag[];
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
  link: `https://${string}`;
};

export interface AboutData {
  languages: TechStack[];
  frameworks: TechStack[];
  libraries: TechStack[];
}
