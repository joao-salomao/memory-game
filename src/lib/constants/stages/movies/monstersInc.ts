import { Stage } from "lib/types";
import Boo from "assets/monsters-inc/Boo.webp";
import Sullivan from "assets/monsters-inc/Sullivan.webp";
import MikeWazowski from "assets/monsters-inc/MikeWazowski.webp";

export const MonstersInc: Stage = {
  name: "Monsters, Inc.",
  values: [
    {
      title: "Boo",
      img: Boo,
    },
    { title: "Mike Wazowski", img: MikeWazowski },

    {
      title: "Sullivan",
      img: Sullivan,
    },
  ],
};
