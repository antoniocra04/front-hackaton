interface EventCard{
    name: string;
    description: string;
    start_time: string;
    end_time: string;
}

export const EventCard: React.FC<EventCard> = ({name, description, start_time, end_time}) => {
    return(
        <div className="event">
            <div className="event__head">
                <p className="event__head-title">{name}</p>
                <p className="event__head-time">{start_time} - {end_time}</p>
            </div>
            <p className="event-text">{description}</p>
            <div className="event__btn">
                <a href="#" className="event__btn-link">Участвовать</a>
            </div>
        </div>
    )
}