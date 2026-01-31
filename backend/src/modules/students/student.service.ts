import { prisma } from "../../lib/prisma"

const getMyProfile = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {id: userId},
        select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            phone: true,
            role: true,
            status: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

const updateMyProfile = async (userId: string, data: {name?: string; phone?: string; image?: string},) => {
    const updatedUser = await prisma.user.update({
        where: {id: userId},
        data: {
            ...(data.name && {name: data.name}),
            ...(data.phone !== undefined && {name: data.phone}),
            ...(data.image !== undefined && {name: data.name}),
        },
        select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            phone: true,
            role: true,
            createdAt: true,
            updatedAt: true,
        },
    });
return updatedUser;
}
export const studentService = {
    getMyProfile,
    updateMyProfile,
}