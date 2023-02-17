import React, { Component } from 'react'
import axios from 'axios'
import pubsub from 'pubsub-js'

export default class Search extends Component {
    search = () => {
        console.log(this.keyWord.value);
        axios.get(`http://api.github.com/search/users?q=${this.keyWord.value}`)
            .then(response => {
                console.log('成功',response.data.items);
                pubsub.publish('getData',{
                    users:response.data.items,
                    isLoading:false,
                    isFirst:false
                });
            },error => {
                pubsub.publish('getData',{
                    errMsg:error.message
                })
            });
    }
    
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWord = c} type="text" placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
