
// import { Pool } from 'pg'
// import { PrismaPg } from '@prisma/adapter-pg'
// import { PrismaClient } from '@prisma/client'

// const connectionString = `${process.env.DATABASE_URL}`

// const pool = new Pool({ connectionString })
// const adapter = new PrismaPg(pool)
// const prisma = new PrismaClient({ adapter })


import { PrismaClient } from "@prisma/client";


declare global{
   
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined ;
}

const prismadb = globalThis.prisma || new PrismaClient();
 if(process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;

 export default prismadb


