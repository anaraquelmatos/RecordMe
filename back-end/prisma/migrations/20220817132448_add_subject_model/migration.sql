/*
  Warnings:

  - Added the required column `teacherSubjectId` to the `classesNamesTeachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classesNamesTeachers" ADD COLUMN     "teacherSubjectId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "subjects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "subjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachersSubjects" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,

    CONSTRAINT "teachersSubjects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subjects_name_key" ON "subjects"("name");

-- AddForeignKey
ALTER TABLE "classesNamesTeachers" ADD CONSTRAINT "classesNamesTeachers_teacherSubjectId_fkey" FOREIGN KEY ("teacherSubjectId") REFERENCES "teachersSubjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersSubjects" ADD CONSTRAINT "teachersSubjects_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersSubjects" ADD CONSTRAINT "teachersSubjects_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
