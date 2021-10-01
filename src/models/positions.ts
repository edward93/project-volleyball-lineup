export type position = {
  id: number;
  name: string;
};

// order is important
export const positions: position[] = [
  { id: 2, name: "Right Front" },
  { id: 3, name: "Middle Front" },
  { id: 4, name: "Left Front" },
  { id: 6, name: "Middle Back" },
  { id: 5, name: "Left Back" },
  { id: 1, name: "Right Back" },
];

export const frontRowPositions: position[] = positions.filter((c) => [4, 3, 2].includes(c.id));

export const backRowPositions: position[] = positions.filter((c) => [5, 6, 1].includes(c.id));
