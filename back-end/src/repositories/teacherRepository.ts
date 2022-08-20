import { prisma } from "../database.js";

async function getAllTeachersNames() {
    return await prisma.teacher.findMany({ select: { name: true } });
}
const teacherRepos = {
    getAllTeachersNames
}

export default teacherRepos;