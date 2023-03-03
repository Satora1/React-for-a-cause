import Formula from './Form';
function HelpCard(props) {
    const className=props.classNameOfEle
    const title = props.title;
    const descrip = props.descrip;
    const imageSrc = props.src;

    let content =
        <div className={className} >
            <div className="title">{title}</div>
            <img className="kids-pic" src={imageSrc} width="350"/>
            <div className="description">{descrip}</div>
            <Formula/>
        </div>;
    return content;
}

export default HelpCard;