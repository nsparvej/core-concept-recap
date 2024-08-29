import './post.css'

// eslint-disable-next-line react/prop-types
export default function Post({post}) {

    // eslint-disable-next-line react/prop-types
    const {userId,id,title,body} = post;

  return (
    <div className="post">
      <h5>Title: {title}</h5>
      <p>
        <small>User id: {userId} </small>
      </p>
      <p>
        <small>Post id: {id} </small>
      </p>
      <p>{body}</p>
    </div>
  );
}
