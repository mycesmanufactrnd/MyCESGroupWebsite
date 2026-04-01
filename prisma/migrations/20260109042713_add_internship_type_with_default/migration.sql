/*
  Warnings:

  - The primary key for the `InternshipApplication` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `duration` on table `InternshipApplication` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "InternshipApplication" DROP CONSTRAINT "InternshipApplication_pkey",
ADD COLUMN     "internshipType" TEXT NOT NULL DEFAULT 'Not specified',
ADD COLUMN     "otherDocsUrl" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "duration" SET NOT NULL,
ADD CONSTRAINT "InternshipApplication_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "InternshipApplication_id_seq";
