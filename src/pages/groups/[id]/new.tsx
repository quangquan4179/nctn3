import AppLayout from "@/common/Layouts";
import NewProject from "@/containers/projects/NewProject";

export default function Home() {
  return (
    <>
      <title>New Project</title>
      <NewProject />;
    </>
  );
}

Home.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
