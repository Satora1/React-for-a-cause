import React from 'react';
import children from './childrenData';
import Formula from './Form';

function ChildrenCard(){ 
return <div className="child-card">{children.map((child) => 
    <div className="key" key={child.id}>
        <div className="child">
            <div className="name">{child.name} {child.age} years old</div>
            <img className="img-child" src={child.image} width="250"></img>
            <div className="description">{child.description}</div>
           <Formula/>
        </div>
    </div>)}
</div>
}

export default ChildrenCard