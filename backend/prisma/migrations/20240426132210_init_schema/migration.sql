-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "image_url" TEXT NOT NULL DEFAULT 'https://miro.medium.com/v2/resize:fit:968/1*F6SrJR7_s95r6oCF3ugMZw.png',
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0;
