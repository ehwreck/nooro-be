/*
  Warnings:

  - You are about to drop the column `name` on the `Task` table. All the data in the column will be lost.
  - Added the required column `title` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Task` DROP COLUMN `name`,
    ADD COLUMN `completed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `title` VARCHAR(255) NOT NULL;
