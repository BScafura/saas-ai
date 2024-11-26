import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import MonthSelect from "./_components/month-select";
import SummaryCard from "./_components/summary-cards";
import { redirect } from "next/navigation";
import { isMatch } from "date-fns";

interface HomeProps {
  searchParams: { month: string };
}

export default async function Home({ searchParams: { month } }: HomeProps) {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/login");
  }
  const monthIsInvalid = !month || isMatch(month, "MM");
  if (!monthIsInvalid) {
    return redirect("/?month=01");
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <MonthSelect></MonthSelect>
        </div>
      </div>
      <div className="grid grid-cols-[2fr,1fr]">
        <SummaryCard month={month}></SummaryCard>
      </div>
    </>
  );
}
