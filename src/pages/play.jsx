import React from "react";
import { getSongUrl,getLyric,getSongDetail } from "../util/axios";
import '../assets/css/play.css'


class Play extends React.Component {
    constructor() {
        super();
        this.state = {
            songUrl : '',
            lyric:'',
            songsDetail:[]
        }
    }
    componentDidMount() {
        //获取歌曲的url地址
        getSongUrl({
            id:this.props.location.state.id
        }).then(res=>{
            if (res.code === 200){
                this.setState({
                    songUrl : res.data[0].url
                })
            }
        })
        //获取歌词
        getLyric({
            id : this.props.location.state.id
        }).then(res => {
            if (res.code === 200){
                this.setState({
                    lyric : res.lrc.lyric

                })
            }
        })
        //获取歌曲详情
        getSongDetail({
            ids :this.props.location.state.id
        }).then(res =>{
            if (res.code === 200) {
                this.setState({
                    songsDetail : res.songs[0]
                })
            }
        })
    }
    render() {
        const {songUrl,lyric,songsDetail} = this.state
        return (
            <div className='songsBox'>
                <div>
                    歌名：{songsDetail.name}
                    {
                        songsDetail.ar ? songsDetail.ar.map( item => item.name ) : ''
                    }
                    <img src={songsDetail.al ? songsDetail.al.picUrl : ''} alt="" className='songDetailImg'/>
                </div>
                <div className='lyric'>
                    歌词：{lyric}
                </div>
                <audio src={songUrl} controls autoPlay >
                </audio>
            </div>
        );
    }
}
export default Play;
