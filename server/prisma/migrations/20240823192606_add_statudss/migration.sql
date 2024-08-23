-- AlterTable
ALTER TABLE `user` ADD COLUMN `status` ENUM('reception', 'encours', 'terminer', 'annuler', 'fournisseur') NULL;
