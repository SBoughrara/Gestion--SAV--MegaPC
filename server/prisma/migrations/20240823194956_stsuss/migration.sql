/*
  Warnings:

  - You are about to drop the column `status` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `status` ENUM('reception', 'encours', 'terminer', 'annuler', 'fournisseur') NULL DEFAULT 'reception';

-- AlterTable
ALTER TABLE `user` DROP COLUMN `status`;
