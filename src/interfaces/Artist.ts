export interface Artist {
  id: string;
  name: string;
  type: string;
  // i made this optional because some don't have this
  disambiguation?: string
}

