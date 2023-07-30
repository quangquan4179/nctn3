import AppLayout from "@/common/Layouts";
import ProfileContainer from "@/containers/profile";

export default function Profile() {
  return (
    <>
      <title>Profile</title>
      <ProfileContainer />;
    </>
  );
}

Profile.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
