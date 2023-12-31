const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/', (req, res) => {
    res.send('You have reached the store router');
  });

router.get("/items", async (req, res) => {
try {
    const items = await prisma.item.findMany();
    // Check if items exists
    if (!items) {
    return res.status(404).json({ error: 'No Items found' });
    } else {
        console.log(items)
        return res.send(items)
    }
} catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
}
});

module.exports = router;