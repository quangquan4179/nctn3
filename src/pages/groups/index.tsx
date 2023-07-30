import AppLayout from "@/common/Layouts";
import GroupContainer from "@/containers/groups";

export default function Profile() {
  return (
    <>
      <title>Group</title>
      <GroupContainer />;
    </>
  );
}

Profile.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
