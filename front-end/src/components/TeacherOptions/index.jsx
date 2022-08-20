const TeacherOptions = (teacher) => {

    return (
        <option value={teacher.teacher}>{teacher.teacher}</option>
    );
}

export default TeacherOptions;