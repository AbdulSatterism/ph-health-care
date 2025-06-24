//! get all admin and by search by email and name

import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const getAllAdmins = async (search?: string) => {
  // const whereClause:Prisma.AdminWhereInput | undefined = search
  //   ? {
  //       OR: [
  //         { email: { contains: search, mode: "insensitive" } },
  //         { name: { contains: search, mode: "insensitive" } },
  //       ],
  //     }
  //   : {};

  //* optimized where clause
  const whereClause:Prisma.AdminWhereInput | undefined = search
    ? {
        OR: ['name', 'email'].map((field) => ({
          [field]: {  contains: search, mode: "insensitive" }
    }))
    }
    : {};

  const admins = await prisma.admin.findMany({
    where: whereClause,
    include: {
      user: {
        select: {
          email: true,
          role: true,
        },
      },
    },
  });

  return admins;
};


export const adminServices = {
    getAllAdmins,
    };
