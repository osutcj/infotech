import { Role } from "./Role";

export type TeamMember = {
  name: string;
  role: Role;
  image: string;
  email: string;
  /**
   * Which part of the photo stays visible when it is cropped to fill the card
   * (CSS object-position). Set per member in src/data/teamMembers.json.
   *
   * Format: "X Y"
   *   X = horizontal: 0% = left edge, 50% = center, 100% = right edge
   *   Y = vertical:   0% = top edge,  50% = center, 100% = bottom edge
   *
   * The card is a fixed 400px tall, so on phones (wide card) the photo is
   * cropped top/bottom and only Y matters. Lower Y (e.g. "50% 20%") to keep
   * faces near the top of the photo in frame. X only matters on narrow
   * desktop cards, where the photo is cropped left/right.
   *
   * Defaults to "50% 50%" (center) when omitted.
   */
  imagePosition?: string;
};
