import { RiApps2Line } from "react-icons/ri";
import { IoGameController, IoNewspaper } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import {
  MdOutlineSportsBasketball,
  MdOutlineLiveTv,
  MdLibraryMusic,
} from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GiVideoConference } from "react-icons/gi";

export const category = [
  { name: "All", icon: RiApps2Line, id: 0 },
  { name: "Gaming", icon: IoGameController, id: 20 },
  { name: "Automobiles", icon: FaCarSide, id: 2 },
  { name: "Sports", icon: MdOutlineSportsBasketball, id: 17 },
  { name: "Entertainment", icon: MdOutlineLiveTv, id: 24 },
  { name: "Technology", icon: GrTechnology, id: 28 },
  { name: "Music", icon: MdLibraryMusic, id: 10 },
  { name: "Blogs", icon: GiVideoConference, id: 22 },
  { name: "News", icon: IoNewspaper, id: 25 },
];
