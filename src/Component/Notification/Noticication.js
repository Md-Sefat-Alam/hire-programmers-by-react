import React from 'react';

const Noticication = (props) => {
    const [img, name, salary] = props
    return (
        <div>
            <div>
                <span>Added</span>
            </div>
            <div className='notification_werap'>
                <div className='person_img'><img width="60px" src={img} alt="" /></div>
                <div>
                    <div className='person_name'><h4>{name}</h4></div>
                    <div className="serson_salary"><h4>Salary: {salary}</h4></div>
                </div>
            </div>
        </div>
    );
};

export default Noticication;