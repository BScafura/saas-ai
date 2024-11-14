import { db } from "../_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { DataTable } from "../_components/ui/datatable";
import { transactionColumns } from "./_collumns";
import AddTransactionButton from "../_components/add-transaction-buttons";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";

const Transactions = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/login");
  }

  //Access all Transactions in DB
  const transactions = await db.transaction.findMany({
    where: { userId: userId },
  });
  return (
    <>
      <Navbar></Navbar>
      <div className="space-y-6 p-6">
        {/*Hedaer*/}
        <div className="flex w-full items-center justify-between p-6">
          <h1 className="text-2xl font-bold">Transanctions</h1>
          <AddTransactionButton></AddTransactionButton>
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  );
};

export default Transactions;
