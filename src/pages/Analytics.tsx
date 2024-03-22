export const Analytics: React.FC = () => {
    return (
        <div className = "block">
        <h1>Аналитика</h1>
        <h2>По аудитории</h2>
        <div className = "select">
            <select name="audience" id="">
                <option value="">326</option>
                <option value="">327</option>
                <option value="">328</option>
                <option value="">329</option>
            </select>
        </div>
        <p className = "events-count">Количество меропреятий за месяц: <span>100</span></p>
    </div>
    )
}