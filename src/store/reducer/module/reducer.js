import {TOPICLIST,TOPICCONTENT} from '../../actionTypes'

var defaultState={
    topicList:[],
    topicContent:[]
}

function reducer(state=defaultState,action){
    var newState=Object.assign({},state);
    switch (action.type) {
        case TOPICLIST:
            var {list}=action.payload;
            newState.topicList=list;
            return newState;
        case TOPICCONTENT:
            var {content}=action.payload;
            newState.topicContent=content;
            return newState;
        default:
            return newState;
    }
}
export default reducer;