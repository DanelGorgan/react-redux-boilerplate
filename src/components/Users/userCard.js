import React from 'react'

export class UserCard extends React.Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.value.name}</p>
                <p>Email: {this.props.value.email}</p>
            </div>
        )
    }
}
