import AppLayout from "@/common/Layouts";
import GroupDetail from "@/containers/groups/GroupDetail";

export default function Home() {
  return (
    <>
      <title>Group Detail</title>
      <GroupDetail />;
    </>
  );
}

Home.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
