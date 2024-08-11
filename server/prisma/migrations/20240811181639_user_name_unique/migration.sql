/*
  Warnings:

  - The values [check] on the enum `Facture_statut` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[user_name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `employee` MODIFY `role` ENUM('admin', 'responsable', 'technicien') NOT NULL DEFAULT 'technicien';

-- AlterTable
ALTER TABLE `facture` MODIFY `statut` ENUM('cheque', 'espece', 'carte') NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_user_name_key` ON `User`(`user_name`);
