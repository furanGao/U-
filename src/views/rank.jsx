import React from 'react'
import {hotSong} from "../util/axios";
import "../assets/css/rank.css"

class Rank extends React.Component{
    constructor() {
        super();
        this.state = {
           hotImg : '',
            hotList : []
        }
    }
    componentDidMount() {
        hotSong().then(res=>{
            if (res.code === 200){
                this.setState({
                    hotImg : res.playlist.coverImgUrl,
                    hotList : res.playlist.tracks.filter((item,index)=>index < 20)
                })
            }
        })
    }
    goSongDetail(id){
        this.props.history.push({
            pathname:'/play',
            state:{
                id
            }
        })
    }
    render(){
        const {hotImg,hotList} = this.state
        return (<div className='rank'>
            <div className='hotTop'>
                <img src={hotImg} alt=""/>
            </div>
            <div className='remd_newsg' >
                {
                    hotList.map((item,index) => {
                        return  <div className='songList' key={item.id} onClick={this.goSongDetail.bind(this,item.id)}>
                            <div className='num'>{index+1 < 10 ? '0' +(index +1) : index+1}</div>
                            <div className='sgfr'>
                                <div className='left'>
                                    <p className='title'>{item.name}</p>
                                    <div className='info'>
                                        <i>
                                        </i>
                                        {item.ar.map((item,index) => {
                                            if (index >0){
                                                item.name = '/' + item.name
                                            }
                                            return item.name
                                        })}-{item.name}
                                    </div>
                                </div>
                                <div className='right'>
                            <span>

                            </span>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>)
    }
}
export default Rank