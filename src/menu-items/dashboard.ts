// assets
import { AiOutlineDashboard } from "react-icons/ai";

// icons
const icons = {
  AiOutlineDashboard,
};

const dashboard = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard/default",
      icon: icons.AiOutlineDashboard,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
