/* eslint-disable @typescript-eslint/no-explicit-any */
interface AuditoryCardProps{
    name: string;
    type: string;
    onClick: any;
}

export const AuditoryCard: React.FC<AuditoryCardProps> = ({name, type, onClick}) => {
    return(
        <a onClick={onClick} className="main_btn"><span className="number">{name}</span><span className="spacer"></span><span className="text">{type}</span></a>
    )
}