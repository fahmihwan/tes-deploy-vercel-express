const express = require('express');
const prisma = require('./prisma/client');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tes',async (req, res)=>{


   const data = await prisma.$queryRawUnsafe("SELECT * FROM public.users");

    const safeData = JSON.parse(
      JSON.stringify(data, (_, v) => (typeof v === "bigint" ? v.toString() : v))
    );

    res.status(200).json(safeData);
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
