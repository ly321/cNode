import {TOPICLIST,TOPICCONTENT} from '../actionTypes'

import {fetchTopicList,fetchTopicContent} from '../../service/fetch';

export function getTopicList(query){
    return (dispatch)=>{
        fetchTopicList(query).then(value=>{
            let list=value.data
            dispatch({
                type:TOPICLIST,
                payload:{list}
            });
        })
    }
}

export function getTopicContent(id){
    return (dispatch)=>{
        fetchTopicContent(id).then(value=>{
            dispatch({
                type:TOPICCONTENT,
                payload:{value}
            });
        })
    }
}