import AddTransactionButton from "@/app/_components/add-transaction-buttons";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const IndividualCard = ({ icon, title, amount, size = "small" }: CardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`}
        >
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR",
          }).format(amount)}
        </p>

        {size === "large" && <AddTransactionButton></AddTransactionButton>}
      </CardContent>
    </Card>
  );
};

export default IndividualCard;
