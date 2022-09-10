import React, {useEffect} from 'react';
import {fetchPosts} from "../mainredux/AllPosts/postAction";
import {connect} from "react-redux";

const ShowAllPost = ({postData, fetchPosts}) => {
    useEffect(() => {
        fetchPosts()
    }, [])

    if(postData.loading) return <h2>Loading</h2>

    return (
        <div>
            {postData?.posts?.map((post)=>
                <p> {post.title} </p>
            )}
        </div>
    );
};



const mapStateToProps = state => {
    return{
        postData: state.post
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps
) (ShowAllPost)


