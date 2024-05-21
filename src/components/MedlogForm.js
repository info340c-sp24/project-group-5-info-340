import React from 'react';
// import React, { useState, useEffect } from 'react';



// export function TestFilter(props) {
//     return (
        
//     )
// }



export function MedForm(props) {
    return (
        <div>
            {/* Form */}
            <form className="med-form">
                <div className="form-padding">
                    <label className="med-title" htmlFor="mname">Medication Name:</label><br />
                    <input className="t-box" type="text" id="mname" name="mname" />
                </div>
                <div className="form-padding">
                    <label className="med-title" htmlFor="mtype">Type of Medication:</label><br />
                    <input type="radio" id="liquid" name="mtype" value="liquid" />
                    <label htmlFor="liquid">Liquid</label><br />
                    <input type="radio" id="tablet" name="mtype" value="tablet" />
                    <label htmlFor="tablet">Tablet</label><br />
                    <input type="radio" id="capsule" name="mtype" value="capsule" />
                    <label htmlFor="capsule">Capsule</label><br />
                    <input type="radio" id="topical" name="mtype" value="topical" />
                    <label htmlFor="topical">Topical</label><br />
                    <input type="radio" id="suppository" name="mtype" value="suppository" />
                    <label htmlFor="suppository">Suppository</label><br />
                    <input type="radio" id="patch" name="mtype" value="patch" />
                    <label htmlFor="patch">Patch</label><br />
                    <input type="radio" id="cream" name="mtype" value="cream" />
                    <label htmlFor="cream">Cream</label><br />
                    <input type="radio" id="device" name="mtype" value="device" />
                    <label htmlFor="device">Device</label><br />
                    <input type="radio" id="injection" name="mtype" value="injection" />
                    <label htmlFor="injection">Injection</label><br />
                    <input type="radio" id="inhaler" name="mtype" value="inhaler" />
                    <label htmlFor="inhaler">Inhaler</label><br />
                    <input type="radio" id="ointment" name="mtype" value="ointment" />
                    <label htmlFor="ointment">Ointment</label><br />
                    <input type="radio" id="powder" name="mtype" value="powder" />
                    <label htmlFor="powder">Powder</label><br />
                    <input type="radio" id="drops" name="mtype" value="drops" />
                    <label htmlFor="drops">Drops</label>
                </div>
                <div className="form-padding">
                    <label className="med-title" htmlFor="strength">Strength:</label><br />
                    <input className="t-box" type="text" id="strength" name="strength" />
                </div>
                <div className="form-padding">
                    <label className="med-title" htmlFor="unit">Choose Unit:</label><br />
                    <input type="radio" id="mg" name="unit" value="mg" />
                    <label htmlFor="mg">mg</label><br />
                    <input type="radio" id="mcg" name="unit" value="mcg" />
                    <label htmlFor="mcg">mcg</label><br />
                    <input type="radio" id="g" name="unit" value="g" />
                    <label htmlFor="g">g</label><br />
                    <input type="radio" id="ml" name="unit" value="ml" />
                    <label htmlFor="ml">ml</label><br />
                    <input type="radio" id="%" name="unit" value="%" />
                    <label htmlFor="%">%</label>
                </div>
                <div className="bottom-padding">
                    <label className="med-title" htmlFor="time">Select a time:</label><br />
                    <input className="t-box" type="time" id="time" name="time" /><br /><br />
                    <input className="t-box" type="submit" value="Submit" /><br /><br />
                </div>
            </form>

            {/* Image */}
            <div>
                <img className='med-image' src='img/myriam-zilles-KltoLK6Mk-g-unsplash.jpg' alt="different types of medication"/>
            </div>
        </div>
        )
}

