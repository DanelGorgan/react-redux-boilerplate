import React from 'react'
import { connect } from "react-redux"
import { getUsers } from '../../actions/usersAction'

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
        console.log('----Props');
        console.log(this.props);
        if (!this.props.users.items) {
            return null;
        }
        return <div>Users: {this.props.users.items.length}</div>
    }
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps, {getUsers})(UsersList);
