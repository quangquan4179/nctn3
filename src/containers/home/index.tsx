import { useSession } from "next-auth/react";
import React from "react";
import GustContainer from "./gust";
import MainContainer from "./App";

type Props = {};

const HomeContainer = (props: Props) => {
  const { data: session } = useSession();

  if (!session) {
    return <GustContainer />;
  } else {
    return <MainContainer user={session.user} />;
  }
};

export default HomeContainer;
