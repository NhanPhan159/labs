import { useState, type FC } from "react";
import { LayoutDashboard, Cog, FileQuestion } from "lucide-react";

enum Icons {
  DASHBOARD = "dashboard",
  QUESTION = "question",
  APP = "app",
}

export type TNameIcons = {
  name: Icons;
};
export const IconsComponent: FC<TNameIcons> = (props) => {
  switch (props.name) {
    case Icons.DASHBOARD:
      return <LayoutDashboard />;
    case Icons.QUESTION:
      return <FileQuestion />;
    case Icons.APP:
      return <Cog />;
    default:
      return <></>;
  }
};

export const Path = {
  Root: "/",
  Public: "/public",
  Login: "/auth/login",
  Register: "/auth/register",
  Admin: {
    index: "/admin",
    children: {
      dashBoard: "/admin/dashboard",
      question: "/admin/questions",
    },
  },
  PageNotFound: "/page-not-found",
  PermissionDenied: "/permission-denied",
  Conversation: "/conversation",
};

type TRoutingSideBar = {
  nameLink: string;
  path: string;
  iconName: Icons;
};
const routingSideBar: TRoutingSideBar[] = [
  {
    nameLink: "Dashboard",
    path: Path.Admin.children.dashBoard,
    iconName: Icons.DASHBOARD,
  },
  {
    nameLink: "Question",
    path: Path.Admin.children.question,
    iconName: Icons.QUESTION,
  },
  {
    nameLink: "Back to app",
    path: Path.Root,
    iconName: Icons.APP,
  },
];

const itemSideBarStyle = {
  padding: "10px 20px",
  borderRadius: "8px",
  color: "gray",
  fontWeight: "bold",
  cursor: "pointer",
  display: "flex",
  gap: "15px",
  justifyContent: "start",
  alignItem: "center",
  "&:hover": {
    backgroundColor: "#E6D9FB",
    color: "black",
  },
};
const SideBarAdmin = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{ padding: "10px", width: "250px" }}>
      {routingSideBar.map((curr, index) => (
        <div
          style={{
            ...itemSideBarStyle,
            background: activeIndex === index ? "#E6D9FC" : "",
          }}
          onClick={() => {
            setActiveIndex(index);
            alert(curr.nameLink);
          }}
        >
          <IconsComponent name={curr.iconName} />
          {curr.nameLink}
        </div>
      ))}
    </div>
  );
};

export default SideBarAdmin;
