import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

function TransactionTypeBadge({ transaction }: TransactionTypeBadgeProps) {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Deposit
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-500 bg-opacity-10 font-bold text-red-500 hover:bg-muted">
        <CircleIcon className="fill-danger mr-2" size={10} />
        Expense
      </Badge>
    );
  }
  return (
    <Badge className="bg-white bg-opacity-10 font-bold text-white hover:bg-muted">
      <CircleIcon className="fill-danger mr-2" size={10}></CircleIcon>
      Investment{" "}
    </Badge>
  );
}

export default TransactionTypeBadge;
