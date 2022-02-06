import "./Style-reviews.css";
import React from "react";
import ReviewCard from "./Review-Card";

function Reviews(props) {



  const reviews = props.postedReviews;

  if (reviews.length < 1 && reviews.poster === undefined && props.loggedIn) {
    return (
      <div className="emptyReview">
        <h1 className="emptyTitle">Oops, there's no review!</h1>
        <p>Add a movie to your watch list and post a review.</p>
      </div>
    );}
    else if(!props.loggedIn){
      return (
        <div className="emptyReview">
          <h1 className="emptyTitle">Oops!</h1>
          <p>You need to be logged in to see reviews.</p>
        </div>
      );
      }
   else {
    return reviews.map((post, index) => {
      return (
        <div className="reviewsContainer">
          <ReviewCard
            key={index}
            _id={post._id}
            author={post.author}
            title={post.name}
            poster={post.poster}
            review={post.review}
            comment={post.comment}
            commentEdit={props.commentEdit}
          />
        </div>
      );
    });
  }
}

export default Reviews;
