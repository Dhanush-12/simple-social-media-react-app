const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <center>
      <h1 className="welcome-message">
        There are no posts available right now!
      </h1>
      <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Posts</button>
    </center>
  );
};

export default WelcomeMessage;
