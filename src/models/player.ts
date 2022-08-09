import { position } from "./positions";
import { role } from "./roles";

export type player = {
  name: string;
  role?: role;
  position: position;
};
