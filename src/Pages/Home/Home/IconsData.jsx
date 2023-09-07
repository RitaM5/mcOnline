import React from 'react';

const IconsData = ({icons, addIconsMark}) => {
    const {icon, id} = icons;
    return (
        <div>
            <img className='text-white' src={icon} onClick={() => addIconsMark(id)} alt="" srcset="" />
        </div>
    );
};

export default IconsData;