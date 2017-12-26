import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getTopicList} from '../../store/action/control'
import './TopicList.css';

function mapStateToProps(state){
    return {
        topicList:state.reducer.topicList
    }
}
function mapDispatchToProps(dispatch){
    return{
        init(){
            dispatch(getTopicList(''));
        },
    }
}
function TopicType(props){
    const isTop=props.isTop,isGood=props.isGood;
    if(isTop){
        return <span className="put_top">置顶</span>
    }else{
        if(isGood){
            return <span className="put_good">精华</span>
        }else{
            return <span className="topiclist-tab">问答</span>
        }
    }

}
class TopicList extends Component {

    componentDidMount(){
        this.props.init();
    }
    render() {
        return (
            <div className="TopicList">
                <div className="content">
                    <div className="header">
                        <Link to={{pathname:'?tab=all'}} className="topic-tab current-tab">全部</Link>
                        <Link to={{pathname:'?tab=good'}} className="topic-tab">精华</Link>
                        <Link to={{pathname:'?tab=share'}} className="topic-tab">分享</Link>
                        <Link to={{pathname:'?tab=ask'}} className="topic-tab">问答</Link>
                        <Link to={{pathname:'?tab=job'}} className="topic-tab">招聘</Link>
                        <Link to={{pathname:'?tab=dev'}} className="topic-tab">客户端测试</Link>
                    </div>
                </div>
                <div className="inner">
                    <div className="topic_list">
                        {
                            this.props.topicList.length>0&&this.props.topicList.map((item,index)=>{
                            return(
                                <div className="cell" key={index}>
                                    <a className="user_avatar pull-left" href={'https://cnodejs.org/user/'+item.author.loginname}>
                                        <img src={item.author.avatar_url}  alt="作者照片"/>
                                    </a>
                                    <span className="reply_count pull-left">
                                        <span className="count_of_replies" title="回复数">
                                            {item.reply_count}
                                        </span>
                                        <span className="count_seperator">/</span>
                                        <span className="count_of_visits" title="点击数">
                                            {item.visit_count}
                                        </span>
                                      
                                    </span>
                                    <div className="topic_title_wrapper">
                                            <TopicType isTop={item.top} isGood={item.good}></TopicType>
                                            <a href={"https://cnodejs.org/topic/"+item.id} className="topic_title">
                                                {item.title}
                                            </a>
                                       </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopicList)
