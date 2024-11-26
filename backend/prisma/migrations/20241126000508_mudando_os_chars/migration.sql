/*
  Warnings:

  - The primary key for the `completed_units` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `completed_units` table. The data in that column could be lost. The data in that column will be cast from `Char(40)` to `Char(36)`.
  - You are about to alter the column `unitId` on the `completed_units` table. The data in that column could be lost. The data in that column will be cast from `Char(40)` to `Char(36)`.
  - You are about to alter the column `userId` on the `completed_units` table. The data in that column could be lost. The data in that column will be cast from `Char(40)` to `Char(36)`.
  - The primary key for the `units` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `units` table. The data in that column could be lost. The data in that column will be cast from `Char(40)` to `Char(36)`.
  - The primary key for the `user_types` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user_types` table. The data in that column could be lost. The data in that column will be cast from `Char(40)` to `Char(36)`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Char(40)` to `Char(36)`.
  - You are about to alter the column `userTypeId` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Char(40)` to `Char(36)`.

*/
-- DropForeignKey
ALTER TABLE `completed_units` DROP FOREIGN KEY `completed_units_unitId_fkey`;

-- DropForeignKey
ALTER TABLE `completed_units` DROP FOREIGN KEY `completed_units_userId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_userTypeId_fkey`;

-- AlterTable
ALTER TABLE `completed_units` DROP PRIMARY KEY,
    MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `unitId` CHAR(36) NOT NULL,
    MODIFY `userId` CHAR(36) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `units` DROP PRIMARY KEY,
    MODIFY `id` CHAR(36) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user_types` DROP PRIMARY KEY,
    MODIFY `id` CHAR(36) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `userTypeId` CHAR(36) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_userTypeId_fkey` FOREIGN KEY (`userTypeId`) REFERENCES `user_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `completed_units` ADD CONSTRAINT `completed_units_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `units`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `completed_units` ADD CONSTRAINT `completed_units_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
