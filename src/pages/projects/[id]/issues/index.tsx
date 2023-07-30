import AppLayout from "@/common/Layouts";
import IssuesContainer from "@/containers/projects/issues";

export default function Home() {
  return (
    <>
      <title>Issues</title>
      <IssuesContainer />;
    </>
  );
}

Home.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
