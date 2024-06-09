import './UserItem.css'

const UserItem = (props) => {
    return (
        <tr>
            <td>{props.first_name}</td>
            <td>{props.last_name}</td>
            <td>{props.email}</td>
            <td>{props.birthday}</td>
            <td>{props.country}</td>
            <td>
                <div className="btn-wrapper">
                    <button className="btn btn-edit">
                        <i className="bi bi-pencil-fill"></i>
                    </button>

                    <button className="btn btn-delete" onClick={props.deleteUserItemHandle}>
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default UserItem
