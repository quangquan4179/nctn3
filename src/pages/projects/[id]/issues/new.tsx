import AppLayout from "@/common/Layouts";
import NewIssues from "@/containers/projects/issues/NewIssues";

export default function Home() {
  return (
    <>
      <title>New Issues</title>
      <NewIssues />;
    </>
  );
}

Home.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
