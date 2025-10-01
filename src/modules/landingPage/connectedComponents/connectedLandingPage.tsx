"use client";

import { useAuthentication } from "@/hooks";
import { LandingPage } from "../components";

export const ConnectedLandingPage = () => {
  const { signIn } = useAuthentication();

  return <LandingPage signIn={signIn} />;
};
