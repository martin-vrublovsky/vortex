import './DateFilter.css'

const DateFilter = (props) => {
    return (
        <header>
            <div className="input-group">
                <label htmlFor="date-from">Date from</label>
                <input
                type="date"
                name="date-from"
                value={props.startDate}
                onChange={props.handleStartDateChange}
                />
            </div>

            <div className="input-group">
                <label htmlFor="date-to">Date to</label>
                <input
                type="date"
                name="date-to"
                value={props.endDate}
                onChange={props.handleEndDateChange}
                />
            </div>
        </header>
    )
}

export default DateFilter
