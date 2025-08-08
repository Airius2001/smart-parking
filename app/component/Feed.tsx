import { Box, Typography } from "@mui/material";
// import List from "../SidebarElement/User/List"
// import Profile from "../SidebarElement/User/Profile";
// import Company from "../SidebarElement/Company";
// import Create from "../SidebarElement/User/Create";
// import Default from "../SidebarElement/Dashboard/Default";
// import Analytics from "../SidebarElement/Dashboard/Analytics";

interface FeedProps {
  activeTab: string; // 当前选中的菜单项标识
}

export default function Feed({ activeTab }: FeedProps) {
  // 根据 activeTab 渲染不同内容
  const renderContent = () => {
    switch (activeTab) {
      case "default":
        return <Typography>Select a menu item to view content</Typography>;
      // <Default />
      case "profile":
        return 132;
      // <Profile />
      case "create":
        return 123;
      // <Create />
      case "list":
        return 123;
      // <List />
      case "company":
        return 123;
      // <Company />
      case "analytics":
        return 123;
      // <Analytics />
      default:
        return <Typography>Select a menu item to view content</Typography>;
    }
  };

  return (
    <Box bgcolor="lightblue" flex={6} p={2} color="black">
      {renderContent()}
    </Box>
  );
}
