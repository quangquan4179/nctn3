import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Router from "next/router";

export default function LoginContainer() {
  const handleLogin = async () => {
    await signIn();
  };

  // const { data: session } = useSession();
  // if (session) {
  //   Router.replace("/");
  // }
  return (
    <>
      Not signed in <br />
      <button onClick={handleLogin}>Sign in</button>
    </>
  );
}
