function AboutUsCard(props) {
    const desc = props.description;
    const title = props.title;
    const image = props.image;

    let content =
        <div className="about-us-card">
            <h2 className="title">{title} </h2>
            <div className="description">{desc}</div>
            <img className = "image" src={image} width="300"></img>
        </div>
    return content;
}

export default AboutUsCard;