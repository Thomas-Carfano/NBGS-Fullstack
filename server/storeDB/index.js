const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/', (req, res) => {
    res.send('You have reached the store router');
  });

router.get("/items", async (req, res) => {
try {
    const items = await prisma.items.findMany();
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

router.post("/cart", async (req, res) => {
  try {
    const { id } = req.body;
    if(!id || id.length === 0) {
      return res.status(400).json({error: "No Items in the cart"})
    }

    // Check if user exists
    const item = await prisma.items.findMany({ where: { id: {in: id} } });
    if (!item) {
      return res.status(404).json({ error: 'Item Not Found.' });
    }

    res.send(item);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});


module.exports = router;