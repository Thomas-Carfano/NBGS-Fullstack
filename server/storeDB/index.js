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
    const { name } = req.body;
    if(!name || name.length === 0) {
      return res.status(400).json({error: "No Items in the cart"})
    }

    // Check if user exists
    const item = await prisma.items.findMany({ where: { name: {in: name} } });
    if (!item) {
      return res.status(404).json({ error: 'Item Not Found.' });
    }

    res.send(item);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

router.post("/create", async (req, res) => {
  console.log(req.body)
  try {
    const { name, price, cost, gender, image_url, brand, item_description } = req.body;

    // Check if user already exists
    const itemExists = await prisma.items.findUnique({ where: { name } });
    if (itemExists) {
      return res.status(400).json({ error: 'Email already in use.' });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
    const newItem = await prisma.items.create({
        data: {
            name,
            price,
            cost,
            gender,
            image_url, 
            brand,
            item_description
        }
    });
    console.log(newItem)
    res.status(201).json({ message: 'Item Created successfully' });

  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Please try again.'});
  }
});


module.exports = router;