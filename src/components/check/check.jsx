import React from 'react';
import './check.css';

function Check({index, checked, onCheck, label}) {    
    return (
        <div className="Check">
            <p className="number">{index}</p>
            <div className="content">
                <label className="checkBox">
                    <input type="checkbox" id="ch1" checked={checked} onChange={()=>{onCheck(index)}}/>
                    <div className="transition"></div>
                </label>
            </div>
            <p>{label}</p>
        </div>
    );
}

export default Check;