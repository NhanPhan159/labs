import { useState, type FC } from "react";
import { LayoutDashboard, Cog, FileQuestion, LucideHome } from "lucide-react";

enum Icons {
  DASHBOARD = "dashboard",
  QUESTION = "question",
  APP = "app",
  HOME = "home",
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
    case Icons.HOME:
      return <LucideHome />;
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
  children?: Omit<TRoutingSideBar, "children">[];
};
const routingSideBar: TRoutingSideBar[] = [
  {
    nameLink: "Dashboard",
    path: Path.Admin.children.dashBoard,
    iconName: Icons.DASHBOARD,
    children: [
      {
        nameLink: "Sub dashboard",
        path: "/",
        iconName: Icons.HOME,
      },
    ],
  },
  {
    nameLink: "Question",
    path: Path.Admin.children.question,
    iconName: Icons.QUESTION,
    children: [
      {
        nameLink: "Sub dashboard",
        path: "/",
        iconName: Icons.HOME,
      },
    ],
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
        <Sidebar
          data={curr}
          isActive={index === activeIndex}
          key={index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default SideBarAdmin;

type TSidebar = {
  data: TRoutingSideBar;
  isActive: boolean;
  onClick: () => void;
};

const Sidebar: FC<TSidebar> = (props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          ...itemSideBarStyle,
          background: props.isActive ? "#E6D9FC" : "",
        }}
        onClick={() => {
          props.onClick();
        }}
      >
        <IconsComponent name={props.data.iconName} />
        {props.data.nameLink}
      </div>
      {props.isActive &&
        props.data.children?.map((curr) => (
          <div
            style={{
              ...itemSideBarStyle,
              background: props.isActive ? "#E6D9FC" : "",
              marginLeft: "10px",
            }}
          >
            <IconsComponent name={curr.iconName} />
            {curr.nameLink}
          </div>
        ))}
    </div>
  );
};
