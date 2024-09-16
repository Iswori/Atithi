-- CreateTable
CREATE TABLE "Homestay" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "locationDescription" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatesAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Homestay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "bedCount" INTEGER NOT NULL DEFAULT 0,
    "homestayId" INTEGER,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "homestayId" INTEGER,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "bookedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "homestayOwnerId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "bedCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Homestay_email_key" ON "Homestay"("email");

-- CreateIndex
CREATE INDEX "Room_homestayId_idx" ON "Room"("homestayId");

-- CreateIndex
CREATE INDEX "Booking_homestayId_idx" ON "Booking"("homestayId");

-- CreateIndex
CREATE INDEX "Booking_roomId_idx" ON "Booking"("roomId");
