-- AlterTable
ALTER TABLE `facture` MODIFY `date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- AlterTable
ALTER TABLE `rapport` MODIFY `date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- AlterTable
ALTER TABLE `ticket` MODIFY `date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);
