import { StageGroup } from "lib/types";
import { Level1 } from "./level1";
import { Level2 } from "./level2";
import { Level3 } from "./level3";

export const enumeratedColorStages: StageGroup = {
  name: "Colors",
  stages: [Level1, Level2, Level3],
};
