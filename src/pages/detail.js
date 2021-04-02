import React, {Component} from 'react';
// import {getSongDetail} from '../util/axios'

class Detail extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log(this.props.location.id)
        // getSongDetail({
        //     id : this.props.location.id
        // })
        //     .then(res => {
        //         console.log(res)
        //     })
    }


    render() {
        return (
            <div>
                <h1>我是音乐播放页</h1>
            </div>
        );
    }
}

export default Detail;