/*
  Warnings:

  - You are about to drop the column `email` on the `Homestay` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[paymentIntentId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `breakFastIncluded` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentIntentId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `breakFastPrice` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomPrice` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Homestay_email_key";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "breakFastIncluded" BOOLEAN NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "paymentIntentId" TEXT NOT NULL,
ADD COLUMN     "paymentStatus" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "totalPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Homestay" DROP COLUMN "email";

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "breakFastPrice" INTEGER NOT NULL,
ADD COLUMN     "roomPrice" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Booking_paymentIntentId_key" ON "Booking"("paymentIntentId");
