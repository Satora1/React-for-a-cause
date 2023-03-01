function Welcome(props) {
  const title = props.title;
  const shortDesc = props.shortDesc;

  let content =
    <div className="welcome">
      <div className="content">
        <h1>{title}</h1>
        <h3>We believe that education is the key to unlocking a child's full potential and creating opportunities for a successful future.</h3>
      </div>
      <div className="footer">
        <h3>{shortDesc}</h3>
      </div>
    </div>

  return content;

}

export default Welcome;
