// assets
import { AiOutlineChrome, AiOutlineQuestionCircle } from "react-icons/ai";

// icons
const icons = {
  AiOutlineChrome,
  AiOutlineQuestionCircle,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: "support",
  title: "Support",
  type: "group",
  children: [
    {
      id: "sample-page",
      title: "Sample Page",
      type: "item",
      url: "/sample-page",
      icon: icons.AiOutlineChrome,
    },
    {
      id: "documentation",
      title: "Documentation",
      type: "item",
      url: "https://www.tlcmodular.com/",
      icon: icons.AiOutlineQuestionCircle,
      external: true,
      target: true,
    },
  ],
};

export default support;
