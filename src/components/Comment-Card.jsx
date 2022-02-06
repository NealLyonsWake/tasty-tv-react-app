import React, { useEffect, useState } from "react";

function CommentCard(props) {
  
  return (
    <div>
    <h5>{`Comment by ${props.user}`}</h5>
    <p>{props.comment}</p>
    </div>
  )
  }

export default CommentCard;
