import axios from "axios";
import { useState, useEffect } from "react";

import SchoolOptions from "../../components/SchoolOptions";
import TeacherOptions from "../../components/TeacherOptions";
import * as S from "./style";
import logo from "../../assets/images/Logo.png";
import title from "../../assets/images/Title.png";

const TeacherLogin = () => {
    const [loading, setLoading] = useState(true);
    const [school, setSchool] = useState([]);
    const [teacher, setTeacher] = useState([]);
    const [form, setForm] = useState({ school: '', teacher: '', password: '' });

    function ocurredWarning() {
        alert("An error occured during the process!");
    }

    useEffect(() => {
        const API = `http://localhost:5000/schools-names`;
        axios.get(API)
            .then((response) => {
                const { data } = response;
                if (data) {
                    setSchool(data);
                }
            })
            .catch(ocurredWarning);
    }, []);

    useEffect(() => {
        const API = `http://localhost:5000/teachers-names`;
        axios.get(API)
            .then((response) => {
                const { data } = response;
                if (data) {
                    setTeacher(data);
                }
            })
            .catch(ocurredWarning);
    }, []);

    return (
        <S.Form>
            <S.FormContainer>
                <S.Logo src={logo} alt="Logo" />
                <S.Title src={title} alt="Title" />
                <S.SelectOptions required onChange={(e) => {
                    setForm({ ...form, school: e.target.value })
                }}>
                    <optgroup label="Escolas">
                        <option value="" disabled selected hidden>Escolher uma escola...</option>
                        {school.length !== 0 &&
                            school.map((list, index) => {
                                return (
                                    <SchoolOptions key={index} school={list.name} />
                                )
                            }
                            )}
                    </optgroup>
                </S.SelectOptions>

                <S.SelectOptions required onChange={(e) => {
                    setForm({ ...form, teacher: e.target.value })
                }}>
                    <optgroup label="Professores">
                        <option value="" disabled selected hidden>Escolher um professor...</option>
                        {teacher.length !== 0 &&
                            teacher.map((list, index) => {
                                return (
                                    <TeacherOptions key={index} teacher={list.name} />
                                )
                            }
                            )}
                    </optgroup>
                </S.SelectOptions>

                <S.Input required type="password" placeholder="Digite a sua senha" onChange={(e) => setForm({ ...form, password: e.target.value })}></S.Input>
                <S.SubmitButton disabled={loading} type="submit">Entrar</S.SubmitButton>
                <S.RegisterButton disabled={loading} type="button">Registre-se</S.RegisterButton>
            </S.FormContainer>
        </S.Form>
    );
}

export default TeacherLogin;