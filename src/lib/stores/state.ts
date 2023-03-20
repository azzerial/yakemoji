import { writable } from "svelte/store";
import { CANVAS_MAX_DIMENSION } from "../util/constants.ts";
import EMOJIPEDIA from "../util/emoji.ts";
import { YAK_BASE, YAK_TEMPLATE } from "../util/entities.ts";

export const appState = writable({
  background: EMOJIPEDIA.BLACK_LARGE_SQUARE,
  dimension: CANVAS_MAX_DIMENSION,
  entity: { ...YAK_BASE },
  offset: { x: 2, y: 0 },
  template: YAK_TEMPLATE,
});
