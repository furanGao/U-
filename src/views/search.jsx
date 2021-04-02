import React from 'react'
import { SearchBar } from 'antd-mobile';
import {getSearchHot,getSearch} from "../util/axios";
import '../assets/css/search.css'


class Search extends React.Component {
    state = {
        value : '',
        searchHotList : [],
        searchSongList : []
    };
    componentDidMount() {
        getSearchHot().then(res => {
            this.setState({
                searchHotList : res.result.hots
            })
        })
    }

    changeBar(keywords){
        this.setState({
            value : keywords
        })//改变搜索框
        //调用列表接口
        getSearch({
            keywords
        }).then(res => {
            this.setState({
                searchSongList : res.result.songs
            })
        })
    }
    goSongDetail(id){
        // console.log(id)
        this.props.history.push({
            pathname:'/play',
            state:{
                id
            }
        })
    }
    cancel(){
        this.setState({
            value : '',
            searchSongList : []
        })
    }
    onChange= (value) => {
        if (value !== ''){
            getSearch({
                keywords:value
            }).then(res => {
                this.setState({
                    searchSongList : res.result.songs
                })
            })
            this.setState({ value });
            return
        }
        this.setState({
            value,
            searchSongList : []
        });

    };
    render() {
        const { searchHotList,searchSongList } = this.state
        let hotlist = <div>{
            searchHotList.map(item => <li  key={item.first} onClick={this.changeBar.bind(this,item.first)}>
                {item.first}
            </li>)
        }</div>
        let songlist =  <div className='remd_newsg' >
            {
                searchSongList.map(item => {
                    return  <div className='songList' key={item.id} >
                        <div className='sgfr'>
                            <div className='left' onClick={this.goSongDetail.bind(this,item.id)}>
                                <p className='title'>{item.name}</p>
                                <div className='info'>
                                    <i>

                                    </i>
                                    {item.artists[0].name}-{item.name}
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
        return (
            <div className='search'>
                <div className='inpSearch'>
                    <SearchBar
                        onCancel={this.cancel.bind(this)}
                        value={this.state.value}
                        placeholder="Search"
                        onChange={this.onChange}
                        // onChange={this.changeSong.bind(this)}
                    />
                </div>
                <div className='hotListShow'>
                    <h3>热门搜索</h3>
                    {
                        searchSongList.length>0 ? songlist : hotlist
                    }
                </div>
            </div>
        )
    }
}

export default Search