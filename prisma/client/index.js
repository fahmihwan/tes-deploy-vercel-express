const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

// tracing
// prisma.$use(async (params, next) => {
//     console.log('Query yang akan dijalankan:', params);
//     return next(params);
// });

module.exports = prisma