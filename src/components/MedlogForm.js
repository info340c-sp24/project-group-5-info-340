import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDatabase, ref, push as firebasePush } from 'firebase/database';


export default function MedForm(props) {
    const Data = props.data

    // Testing Database from Firebase
    const db = getDatabase();
    const formRef = ref(db, 'MedLog/User/Medication');

    // Getting the different values
    const [search, setSearch] = useState('');
    const [selectedMedication, setSelectedMedication] = useState('');
    const [strength, setStrength] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');

    // Handle consts
    const handleSubmit = () => {
        firebasePush(formRef, {medicationAmtType: selectedUnit, medicationName: search, medicationTime: time, medicationDate: date, medicationStrength: strength, medicationType: selectedMedication})
    }

    const handleSelect = (eventKey) => {
        setSelectedUnit(eventKey);
    };

    const handleChange = (e) => {
        const newValue = e.target.value;
        const filteredData = Data.find(item => item.name.toLowerCase().includes(newValue.toLowerCase()));
    
        if (filteredData) {
          setSearch(filteredData.name);
          setSelectedMedication(filteredData.type);
        } else {
          setSearch('');
          setSelectedMedication('');
        }
    }

    return (
        <div className='background'>

            <div class="container">
                <h1>Add Medication</h1>
                <a href="javascript:history.back()" class="back-button">Back</a>
            </div>

            <main>
            {/* Form */}
                <form className="med-form">

                    <div className='form-padding'>
                        <label className="med-title" htmlFor="mname">Medication Name:</label><br />
                        <input className='t-box' type="text" placeholder='Search...' list="meds" onChange={handleChange} />
                            <datalist id="meds">
                                {Data.filter(medication => medication.name.toLowerCase().includes(search)).map(medication => (
                                    <option key={medication.id} value={medication.name}>{medication.name}</option>
                                ))}
                            </datalist>
                    </div>

                    <div className="form-padding">
                                <label className="med-title" htmlFor="mtype">Type of Medication:</label><br />
                                <input
                                    className='t-box'
                                    type="text"
                                    value={selectedMedication}
                                    readOnly
                                />
                    </div>

                    <div className="form-padding">
                        <label className="med-title" htmlFor="strength">Strength:</label><br />
                        <input className="t-box" type="text" id="strength" name="strength" 
                            onChange={(event) =>{
                                setStrength(event.target.value)
                            }} />
                    </div>

                    <div className="form-padding">
                        <label className="med-title" htmlFor="unit">Choose Unit:</label><br />
                        <DropdownButton id="dropdown-basic" title="Select Unit" onSelect={handleSelect}>
                            <Dropdown.Item  eventKey="mg">mg</Dropdown.Item>
                            <Dropdown.Item eventKey="mcg">mcg</Dropdown.Item>
                            <Dropdown.Item eventKey="g">g</Dropdown.Item>
                            <Dropdown.Item eventKey="ml">ml</Dropdown.Item>
                            <Dropdown.Item eventKey="%">%</Dropdown.Item>
                        </DropdownButton>
                        <br />
                        <label className='med-title' htmlFor="unit" 
                            onChange={(event) =>{
                                setSelectedUnit(event.target.value)
                            }}>Selected Unit: {selectedUnit}</label>
                    </div>

                    <div className="bottom-padding">
                        <label className="med-title" htmlFor="date">Select a date:</label><br />
                        <input className="t-box" type="date" id="date" name="date" 
                            onChange={(event) =>{
                                setDate(event.target.value)
                            }} />
                    </div>

                    <div className="bottom-padding">
                        <label className="med-title" htmlFor="time">Select a time:</label><br />
                        <input className="t-box" type="time" id="time" name="time" 
                            onChange={(event) =>{
                                setTime(event.target.value)
                            }} /><br /><br />
                        <Button onClick={handleSubmit} type="submit">Submit</Button>{' '}<br /><br />
                    </div>
                </form>

                {/* Image */}
                <div>
                    <img className='med-image' src='image/myriam-zilles-KltoLK6Mk-g-unsplash.jpg' alt="different types of medication" />
                </div>
            </main>
        </div>
    )
}