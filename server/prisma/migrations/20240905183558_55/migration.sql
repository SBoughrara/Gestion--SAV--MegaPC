/*
  Warnings:

  - You are about to alter the column `date` on the `facture` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(6)` to `Timestamp(3)`.
  - You are about to alter the column `date` on the `rapport` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(6)` to `Timestamp(3)`.
  - You are about to alter the column `date` on the `ticket` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(6)` to `Timestamp(3)`.

*/
-- AlterTable
ALTER TABLE `facture` MODIFY `date` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `rapport` MODIFY `date` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `ticket` MODIFY `date` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
