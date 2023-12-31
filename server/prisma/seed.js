const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs')

const seed = async() => {
    await prisma.user.create({
        data: {
            email: "t1",
            password: await bcrypt.hash("t", 10),
            first_name: "t",
            last_name: "t",
            phone: "1112220000",
            admin: false
        }
    }),

    await prisma.item.create({
        data: {
            name: "Chrome Soft",
            price: 49.99,
            cost: 5,
            description: "Chrome Soft is better for everyone, from amateurs to major winners.",
            gender: "male",
            image: "https://cdn-fsly.yottaa.net/58f0c35f32f01c6abd17a828/www.callawaygolf.com/v~4b.5a/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1697259908641/sits/balls-2022-chrome-soft/balls-2022-chrome-soft_2___1.png?sw=850&sfrm=png&yocs=P_S_",
            brand: "Callaway",
            gender: "Mens"
        }
    }),

    await prisma.item.create({
        data: {
            name: "Chrome Soft",
            price: 49.99,
            cost: 5,
            description: "Chrome Soft is better for everyone, from amateurs to major winners.",
            gender: "male",
            image: "https://cdn-fsly.yottaa.net/58f0c35f32f01c6abd17a828/www.callawaygolf.com/v~4b.5a/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1697259908641/sits/balls-2022-chrome-soft/balls-2022-chrome-soft_2___1.png?sw=850&sfrm=png&yocs=P_S_",
            brand: "Callaway",
            gender: "Mens"
        }
    }),

    await prisma.item.create({
        data: {
            name: "Chrome Soft",
            price: 49.99,
            cost: 5,
            description: "Chrome Soft is better for everyone, from amateurs to major winners.",
            gender: "male",
            image: "https://cdn-fsly.yottaa.net/58f0c35f32f01c6abd17a828/www.callawaygolf.com/v~4b.5a/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1697259908641/sits/balls-2022-chrome-soft/balls-2022-chrome-soft_2___1.png?sw=850&sfrm=png&yocs=P_S_",
            brand: "Callaway",
            gender: "Mens"
        }
    }),

    await prisma.item.create({
        data: {
            name: "Chrome Soft",
            price: 49.99,
            cost: 5,
            description: "Chrome Soft is better for everyone, from amateurs to major winners.",
            gender: "male",
            image: "https://cdn-fsly.yottaa.net/58f0c35f32f01c6abd17a828/www.callawaygolf.com/v~4b.5a/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1697259908641/sits/balls-2022-chrome-soft/balls-2022-chrome-soft_2___1.png?sw=850&sfrm=png&yocs=P_S_",
            brand: "Callaway",
            gender: "Mens"
        }
    }),

        console.log("Successfully seeded")
    };

    seed();