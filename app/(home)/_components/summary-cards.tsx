import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import IndividualCard from "./individual-card";
import { db } from "@/app/_lib/prisma";

interface MonthSelector {
  month: string;
}

const SummaryCard = async ({ month }: MonthSelector) => {
  const year = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const monthNumber = month ? Number(month) : currentMonth;

  if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    throw new Error("Invalid month provided");
  }

  const startDate = new Date(`${year}-${monthNumber}-01`);
  const endDate = new Date(year, monthNumber, 0); // Last day of the month

  const where = {
    date: {
      gte: startDate,
      lt: endDate,
    },
  };
  const depositTotal = (
    await db.transaction.aggregate({
      where: { ...where, type: "DEPOSIT" },
      _sum: { amount: true },
    })
  )._sum?.amount;
  const investmentTotal = (
    await db.transaction.aggregate({
      where: { ...where, type: "INVESTMENT" },
      _sum: { amount: true },
    })
  )._sum?.amount;
  const expensesTotal = (
    await db.transaction.aggregate({
      where: { ...where, type: "EXPENSE" },
      _sum: { amount: true },
    })
  )._sum?.amount;
  const balance =
    Number(depositTotal) - Number(investmentTotal) - Number(expensesTotal);

  return (
    <div className="space-y-6">
      <IndividualCard
        icon={<WalletIcon size={18}></WalletIcon>}
        title={"Balance"}
        amount={balance}
        size="large"
      ></IndividualCard>
      <div className="grid grid-cols-3 gap-6">
        <IndividualCard
          icon={<PiggyBankIcon size={16}></PiggyBankIcon>}
          title={"Invested"}
          amount={Number(investmentTotal)}
        ></IndividualCard>
        <IndividualCard
          icon={
            <TrendingUpIcon size={16} className="text-primary"></TrendingUpIcon>
          }
          title={"Income"}
          amount={Number(depositTotal)}
        ></IndividualCard>
        <IndividualCard
          icon={
            <TrendingDownIcon
              size={16}
              className="text-red-500"
            ></TrendingDownIcon>
          }
          title={"Expenses"}
          amount={Number(expensesTotal)}
        ></IndividualCard>
      </div>
    </div>
  );
};

export default SummaryCard;
