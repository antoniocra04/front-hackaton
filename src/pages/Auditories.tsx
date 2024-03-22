import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuditoryCard } from "../components/auditoryCard";

export const Auditories: React.FC = () => {
    const navigate = useNavigate();
    const [aud, setAud] = useState([])

    const logout = () => {
        localStorage.clear()
        navigate("/login")
    }

    useEffect(() => {
        fetch("http://localhost:5000/api/Auditories/getAuditories").then((res) => {    
            res.json().then((result) => {
                setAud(result)
            })
        })
    }, [])

    return(
        <>
        <header className="page_header">
        <h1>Аудитории</h1>
        {
            localStorage.getItem('password') == null ? <a href="#" onClick={() => navigate("/login")} className="user_btn">Войти</a> : 
            <div className = "log">
                <a href="#" className="loguser2"><span>Аналитика</span></a>
                <a href="#" className="loguser"><span>{localStorage.getItem('login')}</span></a>
                <a href="#" onClick={() => logout()} className="user_btn">Выйти</a>
            </div>
        }
    </header>
        <main style={{marginLeft: "30px"}}>
            {
                aud.map((a, index)=> (
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    <AuditoryCard onClick={() => navigate(`/auditory/${a.name}`)} key={index} name={a.name} type={a.type}/>
                ))
            }
                </main>
        </>
    )
}