import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";

const Subscription = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/login");
  }
  return;
  <>
    <Navbar />
  </>;
};

export default Subscription;
