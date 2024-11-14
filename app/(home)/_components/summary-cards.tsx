import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import IndividualCard from "./individual-card";

function SummaryCard() {
  return (
    <div className="space-y-6">
      <IndividualCard
        icon={<WalletIcon size={16}></WalletIcon>}
        title={"Balance"}
        amount={1000}
      ></IndividualCard>
      <div className="grid grid-cols-3 gap-6">
        <IndividualCard
          icon={
            <PiggyBankIcon
              size={14}
              className="text-white opacity-70"
            ></PiggyBankIcon>
          }
          title={"Invested"}
          amount={1000}
        ></IndividualCard>
        <IndividualCard
          icon={
            <TrendingUpIcon size={14} className="text-primary"></TrendingUpIcon>
          }
          title={"Income"}
          amount={1000}
        ></IndividualCard>
        <IndividualCard
          icon={
            <TrendingDownIcon
              size={14}
              className="text-red-500"
            ></TrendingDownIcon>
          }
          title={"Expenses"}
          amount={1000}
        ></IndividualCard>
      </div>
    </div>
  );
}

export default SummaryCard;
