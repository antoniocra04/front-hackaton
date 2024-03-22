/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EventCard } from "../components/eventCard";

export const Auditory: React.FC = () => {
    // eslint-disable-next-line prefer-const
    let { name } = useParams();
    const [events, setEvents] = useState([])
    const logout = () => {
        localStorage.clear()
        navigate("/login")
    }

    useEffect(() => {
        //@ts-ignore
        fetch(`http://localhost:5000/api/Auditories/getAuditoriesEvents/${name[2]}`).then((res) => {    
            res.json().then((result) => {
                setEvents(result)
            })
        })
    },[])

    const navigate = useNavigate();
    return(
        <>
        <header className="page_header">
        <h1>Аудитория {name}</h1>
        {
            localStorage.getItem('password') == null ? <a href="#" onClick={() => navigate("/login")} className="user_btn">Войти</a> : 
            <div className = "log">
                <a href="#" className="loguser2"><span>Аналитика</span></a>
                <a href="#" className="loguser"><span>{localStorage.getItem('login')}</span></a>
                <a href="#" onClick={() => logout()} className="user_btn">Выйти</a>
            </div>
        }
    </header>
        <div className="events-list">
                {
                    events.map((e) => (
                        //@ts-ignore
                        <EventCard name={e.name} description={e.description} start_time={e.start_time} end_time={e.end_time}/>
                    ))
                }
            </div><div className="event-add-btn">
                <button type="button" className="plus" id="js-eventOpenBtn"></button>
            </div>

    <div className="pp" id="js-eventPP">
        <div className="pp__container">
            <h3 className="pp__title">
                Создать мероприятие
            </h3>
            <div className="pp__form">
                <div className="form-input__name">
                    <input type="text" placeholder="Название мероприятия" name="name" required />
                </div>
                <div className="form-input__description">
                    <textarea name="description" placeholder="Описание мероприятия"></textarea>
                </div>

                <div className="select-type">
                    <select name="type" className="" aria-placeholder="Тип мероприятия" required>
                        <option value="1">123</option>
                        <option value="2">123</option>
                        <option value="3">123</option>
                        <option value="4">123</option>
                    </select>
                </div>
                <div className="select-view">
                    <select name="view" className="" aria-placeholder="Вид деятельности" required>
                        <option value="1">у</option>
                        <option value="2">у</option>
                        <option value="3">у</option>
                        <option value="4">у</option>
                    </select>
                </div>

                <div className="form__btns">
                    <div className="create__btn">
                        <button type="submit" className="form__submit create__btn-link">
                            Создать
                        </button>
                    </div>

                    <div className="close__btn">
                        <button type="button" className="form__close js-ppCloseBtn close__btn-link">
                            Отмена
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
    )
}