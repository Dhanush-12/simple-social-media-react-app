const LoadingSpinner = () => {
  return (
    <center className="spinner-container">
      <div className="spinner-border" style={{width: "4rem", height: "4rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};

export default LoadingSpinner;
