import AppLayout from "@/common/Layouts";
import HomeContainer from "@/containers/home";

export default function Home() {
  return (
    <>
      <title>HOME</title>
      <HomeContainer />;
    </>
  );
}

Home.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
