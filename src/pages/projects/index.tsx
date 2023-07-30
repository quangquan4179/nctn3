import AppLayout from "@/common/Layouts";
import ProjectContainer from "@/containers/projects";

export default function Home() {
  return (
    <>
      <title>Project</title>
      <ProjectContainer />;
    </>
  );
}

Home.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
