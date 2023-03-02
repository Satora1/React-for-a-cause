import React from 'react';
import children from './childrenData';

function ChildrenCard(){ 
return <div className="childCard">{children.map((child) => 
    <div className="key" key={child.id}>
        <div className="child">
            <div className="name">{child.name} {child.age} years old</div>
            <img className="imgChild" src={child.image} width="250" alt=""></img>
            <div className='description'>{child.description}</div>
            <button className="childButton">Support</button>
        </div>
    </div>)}
</div>
}

export default ChildrenCard