import http from './axios'
//封装一个推荐歌单的接口
export function getrecSongs(params) {
    return http.get('/personalized',{params})
}
//封装一个轮播图接口
export function getBanners() {
    return http.get('/banner?type=2')
}
//封装一个推荐歌单的接口
export function getNewSong() {
    return http.get('personalized/newsong')
}
//封装一个歌曲详情接口接口
export function getSongDetail(params) {
    return http.get('/song/detail',{
        params
    })
}
//封装一个热歌排行的接口
export function hotSong() {
    return http.get('/playlist/detail?id=3778678')
}
//封装一个热门搜索的接口
export function getSearchHot() {
    return http.get('/search/hot')
}
//封装一个获取歌曲url的接口
export function getSongUrl(params) {
    return http.get('/song/url',{
        params
    })
}
//封装一个获取歌词的接口
export function getLyric(params) {
    return http.get('/lyric',{
        params
    })
}
//调用一个热歌搜索的接口
export function getSearch(params) {
    return http.get('/search',{
        params
    })
}