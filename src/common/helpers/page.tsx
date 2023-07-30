type PageMeta = {
  url: string;
  text: string;
};
type PageStaticList = {
  [key: string]: PageMeta;
};
const PageList: PageStaticList = {
  homePage: {
    text: "Home",
    url: "/",
  },
  user: {
    text: "Account",
    url: "/profile",
  },
  project: {
    text: "Project",
    url: "/projects",
  },
  group: {
    text: "Group",
    url: "/groups",
  },
};
export default PageList;
