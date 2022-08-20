import teacherRepos from "../repositories/teacherRepository.js";

export async function getAllNames() {

    const teachers = await getTeacherNameListDatabase();

    return teachers;
}

export async function getTeacherNameListDatabase() {

    return await teacherRepos.getAllTeachersNames();
}