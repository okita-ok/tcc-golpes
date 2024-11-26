/*
  Warnings:

  - You are about to drop the `tipos_usuarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `unidades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `unidades_completadas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `unidades_completadas` DROP FOREIGN KEY `unidades_completadas_unidadeId_fkey`;

-- DropForeignKey
ALTER TABLE `unidades_completadas` DROP FOREIGN KEY `unidades_completadas_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `usuarios_tipoUsuarioId_fkey`;

-- DropTable
DROP TABLE `tipos_usuarios`;

-- DropTable
DROP TABLE `unidades`;

-- DropTable
DROP TABLE `unidades_completadas`;

-- DropTable
DROP TABLE `usuarios`;

-- CreateTable
CREATE TABLE `users` (
    `id` CHAR(40) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` CHAR(60) NOT NULL,
    `userTypeId` CHAR(40) NOT NULL,
    `points` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_types` (
    `id` CHAR(40) NOT NULL,
    `label` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `units` (
    `id` CHAR(40) NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `completed_units` (
    `id` CHAR(40) NOT NULL,
    `completed` BOOLEAN NOT NULL DEFAULT false,
    `completed_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `unitId` CHAR(40) NOT NULL,
    `userId` CHAR(40) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_userTypeId_fkey` FOREIGN KEY (`userTypeId`) REFERENCES `user_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `completed_units` ADD CONSTRAINT `completed_units_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `units`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `completed_units` ADD CONSTRAINT `completed_units_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
