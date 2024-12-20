-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('DEPOSIT', 'EXPENSE', 'INVESTMENT');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('HOUSING', 'TRANSPORTATION', 'ENTERTAINMENT', 'HEALTHCARE', 'SALARY', 'EDUCATION', 'OTHER', 'UTILITY');

-- CreateEnum
CREATE TYPE "TransactionPaymentMethod" AS ENUM ('CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER', 'BACK_SLIP', 'CASH', 'MBWAY', 'OTHER');

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "category" "TransactionCategory" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "paymentMethod" "TransactionPaymentMethod" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
