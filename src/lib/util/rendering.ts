import type { Emoji, Position, State } from "../types.d.ts";
import EMOJIPEDIA from "./emoji.ts";

const createCanvas = (
  width: number,
  height: number,
  emoji: Emoji = EMOJIPEDIA.BLACK_LARGE_SQUARE,
) => {
  const canvas = new Array<Array<Emoji>>(height);

  for (let y = 0; y != height; y++) {
    canvas[y] = new Array<Emoji>(width);
    for (let x = 0; x != width; x++) {
      canvas[y][x] = emoji;
    }
  }
  return canvas;
};

export const renderCanvas = <T extends string>({
  background,
  dimension,
  entity,
  offset,
  template,
}: State<T>) => {
  const keys = Object.keys(template)
    .filter((key) => !key.startsWith("_"));
  const canvas = createCanvas(
    dimension.width,
    dimension.height,
    background,
  );

  for (const key of keys) {
    // @ts-ignore Object marked as 'any' (false positive)
    const emoji: Emoji = entity[key];
    // @ts-ignore Object marked as 'any' (false positive)
    const positions: Position[] = template[key].pos;

    for (const { x, y } of positions) {
      canvas[y + offset.y][x + offset.x] = { ...emoji };
    }
  }
  return canvas;
};
