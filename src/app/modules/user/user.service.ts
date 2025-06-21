import { PrismaClient, USER_ROLE } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const createAdmin = async (payload:any) => {

const hashPassword = await bcrypt.hash(payload.password, 10)

  const userData ={
    role: USER_ROLE.ADMIN,
    password: hashPassword,
    email: payload.data.email,
  }


const adminData ={
  email: payload.data.email,
  name: payload.data.name,
 contactNumber: payload.data.contactNumber,
}

const result = await prisma.$transaction([

 prisma.user.create({
    data: {
      ...userData
    },
  }),
  prisma.admin.create({
    data:{
      ...adminData
    }
  })
])
  
return result



}







export const userServices = {
  createAdmin,
}