/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Item";

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "gender" BOOLEAN NOT NULL,
    "image_url" TEXT NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "item_description" TEXT NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Items_id_key" ON "Items"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Items_name_key" ON "Items"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Items_brand_key" ON "Items"("brand");
