function AboutUsCard(props) {
    const desc = props.description;
    const title = props.title;
    const image = props.image;

    let content =
        <div class="about-us-card">
            <h2 class="title">{title} </h2>
            <div class="description">{desc}</div>
            <img src={image} alt=""></img>
        </div>
    return content;
}

export default AboutUsCard;