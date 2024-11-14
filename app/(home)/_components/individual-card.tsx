import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  amount: number;
}

const IndividualCard = ({ icon, title, amount }: CardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p className="text-muted-foreground opacity-70">{title}</p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className="text-2xl font-bold">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR",
          }).format(amount)}
        </p>
      </CardContent>
    </Card>
  );
};

export default IndividualCard;
