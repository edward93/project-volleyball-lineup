export type role = {
  id: number;
  name: string;
  shortName: string;
};

export const roles: role[] = [
  { id: 1, name: "Outside Hitter", shortName: "OH" },
  { id: 2, name: "Middle Blocker", shortName: "MB" },
  { id: 3, name: "Opposite/Right Side Hitter", shortName: "RH" },
  { id: 4, name: "Setter", shortName: "S" },
  { id: 5, name: "Libero", shortName: "L" },
];
