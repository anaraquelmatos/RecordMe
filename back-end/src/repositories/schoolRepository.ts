import { prisma } from "../database.js";

async function getAllSchoolsNames() {
    return await prisma.school.findMany({ select: { name: true } });
}
const schoolRepos = {
    getAllSchoolsNames
}

export default schoolRepos;