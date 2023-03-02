import React from 'react';

function Children({handleClickOnChildren}) {

    return (
        <div className="childrenDes">
            <div className="title">Children</div>
            <img className="imgChildren"
                 src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 width="350" alt=""/>
            <div className="description">We invite you to meet some of our children, their interests and strengths and
                support the development of one of them
            </div>
            <button className="childrenButton" onClick={handleClickOnChildren}>Support a child</button>
            {/*{visibility.eachChild && <ChildrenCard/>}*/}
        </div>
    )
}

export default Children


