const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs')

const seed = async() => {
    // await prisma.user.create({
    //     data: {
    //         email: "t1",
    //         password: await bcrypt.hash("t", 10),
    //         first_name: "t",
    //         last_name: "t",
    //         phone: "1112220000",
    //         admin: false
    //     }
    // }),

    await prisma.items.create({
        data: {
            name: "Chrome Soft",
            price: 49.99,
            cost: 5,
            gender: true,
            image_url: "https://cdn-fsly.yottaa.net/58f0c35f32f01c6abd17a828/www.callawaygolf.com/v~4b.5a/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1697259908641/sits/balls-2022-chrome-soft/balls-2022-chrome-soft_2___1.png?sw=850&sfrm=png&yocs=P_S_",
            brand: "Callaway",
            item_description: "Chrome Soft is better for everyone, from amateurs to major winners.",

        }
    }),

    await prisma.items.create({
        data: {
            name: "Chrome Soft X",
            price: 49.99,
            cost: 5,
            gender: true,
            image_url: "https://cdn-fsly.yottaa.net/58f0c36232f01c6abd17a924/www.callawaygolf.com/v~4b.64/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1704746308659/sits/balls-2022-chrome-soft-x/balls-2022-chrome-soft-x_2___1.png?sw=800&sfrm=png&yocs=P_S_",
            brand: "Callaway",
            item_description: "Chrome Soft is better for everyone, from amateurs to major winners.",
        }
    }),

    // await prisma.items.create({
    //     data: {
    //         name: "Chrome Soft",
    //         price: 49.99,
    //         cost: 5,
    //         gender: "male",
    //         image_url: "https://cdn-fsly.yottaa.net/58f0c35f32f01c6abd17a828/www.callawaygolf.com/v~4b.5a/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1697259908641/sits/balls-2022-chrome-soft/balls-2022-chrome-soft_2___1.png?sw=850&sfrm=png&yocs=P_S_",
    //         brand: "Callaway",
    //         item_description: "Chrome Soft is better for everyone, from amateurs to major winners.",

    //     }
    // }),

    // await prisma.items.create({
    //     data: {
    //         name: "Chrome Soft",
    //         price: 49.99,
    //         cost: 5,
    //         gender: "male",
    //         image_url: "https://cdn-fsly.yottaa.net/58f0c35f32f01c6abd17a828/www.callawaygolf.com/v~4b.5a/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1697259908641/sits/balls-2022-chrome-soft/balls-2022-chrome-soft_2___1.png?sw=850&sfrm=png&yocs=P_S_",
    //         brand: "Callaway",
    //         item_description: "Chrome Soft is better for everyone, from amateurs to major winners.",

    //     }
    // }),

        console.log("Successfully seeded")
    };

    seed();