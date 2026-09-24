import { createBrowserRouter } from "react-router";
import { Root } from "@/app/components/Root";
import { Home } from "@/app/components/Home";
import { Projects } from "@/app/components/Projects";
import { ProjectDetail } from "@/app/components/ProjectDetail";
import { Teams } from "@/app/components/Teams";
import { TeamDetail } from "@/app/components/TeamDetail";
import { ADTYearDetail } from "@/app/components/ADTYearDetail";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "projects/:projectId", Component: ProjectDetail },
      { path: "teams", Component: Teams },
      { path: "teams/usc-aerodesign/:year", Component: ADTYearDetail },
      { path: "teams/:teamId", Component: TeamDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);