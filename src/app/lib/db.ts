// import { Prisma, PrismaClient } from "@prisma/client";

// declare global {
//   namespace NodeJS {
//     interface Global {
//       prisma: PrismaClient;
//     }
//   }
// }

// let prisma: any;

// if (typeof window === "undefined") {
//   if (process.env.NODE_ENV === "production") {
//     prisma = new PrismaClient();
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient();
//     }

//     prisma = global.prisma;
//   }
// }

// export default prisma;

import { PrismaClient } from "@prisma/client";

declare const global: Global & { prisma?: PrismaClient };

export let prisma: PrismaClient;

if (typeof window === "undefined") {
    if (process.env["NODE_ENV"] === "production") {
        prisma = new PrismaClient();
    } else {
        if (!global.prisma) {
        global.prisma = new PrismaClient();
        }
        prisma = global.prisma;
    }
}
