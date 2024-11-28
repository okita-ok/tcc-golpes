/*
  Warnings:

  - A unique constraint covering the columns `[userId,unitId]` on the table `completed_units` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `completed_units_userId_unitId_key` ON `completed_units`(`userId`, `unitId`);
