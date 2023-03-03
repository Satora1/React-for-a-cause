import React from 'react';

function Children({handleClickOnChildren}) {

    return (
        <div className="children-des">
            <div className="title">Children</div>
            <img className="img-children"
                 src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 width="350"/>
            <div className="description">We invite you to meet some of our children, their interests and strengths and
                support the development of one of them
            </div>
            <button className="children-button" onClick={handleClickOnChildren}>Support a child</button>
        </div>
    )
}

export default Children


