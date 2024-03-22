/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate } from "react-router-dom"

export const Reg: React.FC = () => {
        const reg = () => {
            //@ts-ignore
            fetch(`http://localhost:5000/api/Users/signUp?login=${document.getElementsByName("login")[0].value}&password=${document.getElementsByName("password")[0].value}&role=${document.getElementsByName("role")[0].value}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
            }).then((res) => {
                if(res.ok){
                    //@ts-ignore
                    localStorage.setItem("password", document.getElementsByName("password")[0].value)
                    //@ts-ignore
                    localStorage.setItem("login", document.getElementsByName("login")[0].value)
                    navigate('/')
                }
            })
        }

    const navigate = useNavigate();
    
    return(
        <form className="form">
            <h1>Регистрация</h1>
            <div className="form-input__email">
                <input name="login" type="text" placeholder="login"/> 
            </div>

            <div className="form-input__password">
                <input name="password" type="password" placeholder="password"/>
            </div>

            <div className="form-input__password">
                <input name="role" type="text" placeholder="role"/>
            </div>

            <div className="form-button">
                <button onClick={() => reg()} type="button">Зарегестрироваться</button>
            
            <a onClick={() => navigate('/login')} className="reg">Есть учётная запись</a>
            </div>
        </form>
    )
}