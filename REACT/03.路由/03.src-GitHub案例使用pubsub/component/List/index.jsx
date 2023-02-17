import React, { Component } from 'react'
import pubsub from 'pubsub-js'

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: ''
    }
    componentDidMount() {
        this.token = pubsub.subscribe('getData', (name, obj) => {
            this.setState(obj);
        })
    }
    componentWillUnmount() {
        pubsub.unsubscribe(this.token);
    }
    render() {
        const { users, isFirst, isLoading, errMsg } = this.state;
        return (
            <div className="container">
                {
                    isFirst ? <h2>输入关键字进行搜索</h2> :
                        isLoading ? <h2>Loading</h2> :
                            errMsg ? <h2 style={{ color: 'red' }}>{errMsg}</h2> :
                                users.map((user) => {
                                    return (
                                        <div key={user.id}>
                                            <a href={user.html_url}>
                                                <img src={user.avatar_url} alt="" style={{ width: '100px' }} />
                                            </a>
                                            <p>{user.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
