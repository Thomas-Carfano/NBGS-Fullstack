const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs')

const seed = async() => {
    await prisma.user.create({
        data: {
            email: "t",
            password: await bcrypt.hash("t", 10),
            first_name: "t",
            last_name: "t",
            phone: 1112220000
        }
    })
        console.log("Successfully seeded")
    };

    seed();