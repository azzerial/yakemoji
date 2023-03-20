/* General Types */

export interface Dimension {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface Emoji {
  name: string;
  code: string;
  value: string;
}

export interface Section {
  name: string;
  pool: Emoji[];
}

export interface TemplateSection {
  pool: Emoji[];
  pos: Position[];
}

export interface TemplateInfo {
  _name: string;
}

export interface EntityInfo {
  _template: string;
  _hash: string;
}

export interface State<T extends string> {
  background: Emoji;
  dimension: Dimension;
  entity: Entity<T>;
  offset: Position;
  template: Template<T>;
}

export type Emojipedia = Record<string, Emoji>;

export type Template<T extends string> =
  & Record<T, TemplateSection>
  & TemplateInfo;

export type Entity<T extends string> = Record<T, Emoji> & EntityInfo;

/* Yak Types */

export type YakSection =
  | "body"
  | "horns"
  | "hooves"
  | "eyes"
  | "mouth";

export type YakTemplate = Template<YakSection>;

export type Yak = Entity<YakSection>;
