import React from 'react'
import {connect} from "react-redux"
import {getUsers} from '../../actions/usersAction'
import {UserCard} from './userCard'

class UsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        if (!this.props.users) {
            return null;
        }
        return (
            <div>
                <span>Users</span>
                {this.props.users.map((user, index) => <UserCard key={index} value={user}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.items
});

export default connect(mapStateToProps, {getUsers})(UsersList);
