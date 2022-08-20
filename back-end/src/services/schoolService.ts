import schoolRepos from "../repositories/schoolRepository.js";

export async function getAllNames() {

    const schools = await getSchoolNameListDatabase();

    return schools;
}

export async function getSchoolNameListDatabase() {

    return await schoolRepos.getAllSchoolsNames();
}