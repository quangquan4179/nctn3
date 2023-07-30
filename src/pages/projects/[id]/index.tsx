import AppLayout from "@/common/Layouts";
import ProjectDetail from "@/containers/projects/ProjectDetail";

export default function Home() {
  return (
    <>
      <title>Project</title>
      <ProjectDetail />;
    </>
  );
}

Home.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
