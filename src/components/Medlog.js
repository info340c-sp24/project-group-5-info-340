import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { getDatabase } from 'firebase/database';


export default function MedPage(props) {
    const db = getDatabase();
    const [medications, setMedications] = useState([]);

    useEffect(() => {
        const query = ref(db, "MedLog/User/Medication");
        console.log(query);
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                const meds = Object.values(data);
                setMedications(meds);
            }
        });
    }, []);

    const getImageSrc = (type) => {
        switch (type) {
            case 'Liquid':
                return 'image/liquid.jpg';
            case 'Injection':
                return 'image/Injection.png';
            case 'Capsule':
                return 'image/capsule.jpg'
            case 'Inhaler':
                return 'image/inhaler.jpg'
            case 'Ointment':
                return 'image/ointment.jpg'
            case 'Cream':
                return 'image/cream.jpg'
            case 'Tablet':
                return 'image/tablets.png'
        }

    };
    return (
        <div className='background'>

            <div class="container">
                <h1>Medicine Log</h1>
                <a href="javascript:history.back()" class="back-button">Back</a>
            </div>

            <main>
                <div>
                    <h1 className="med-date">Saturday April 20</h1>
                    <div className="calendar">
                        <div className="day">
                            <p className='small-day'>Mon</p>
                        </div>
                        <div className="day">
                            <p className='small-day'>Tues</p>
                        </div>
                        <div className="day">
                            <p className='small-day'>Wed</p>
                        </div>
                        <div className="day">
                            <p className='small-day'>Thur</p>
                        </div>
                        <div className="day">
                            <p className='small-day'>Fri</p>
                        </div>
                        <div className="day-sat">
                            <p className='small-day'>Sat</p>
                        </div>
                        <div className="day">
                            <p className='small-day'>Sun</p>
                        </div>
                    </div>
                </div>

                {/* To form button */}
                <div>
                    <Link to="/MedlogForm" className="add-alarm" aria-label="Add Medication">
                        <button>+</button>
                    </Link>
                </div>

                {/* Current Medication */}
                <div>
                    <h3>Your Medications</h3>
                    <section className="column">
                        <div>
                            {medications.map((medication, index) => (

                                <div className="log" key={index}>
                                    <img src={getImageSrc(medication.medicationType)} alt={medication.medicationType} />
                                    <h2>{medication.medicationTime}</h2>
                                    <p>{`${medication.medicationName} ${medication.medicationStrength}${medication.medicationAmtType} ${medication.medicationType}`}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Past Medication */}
                <div>
                    <h3>Your Past Medication</h3>
                    <section className="column">
                        <div>
                            <div className="log">
                                <img src="image/liquid.jpg" alt="liquid" />
                                <h2>12:00pm</h2>
                                <p>Penicillin 5mg liquid</p>
                            </div>
                            <div className="log">
                                <img src="image/capsule.jpg" alt="capsule" />
                                <h2>7:00pm</h2>
                                <p>Prozac 2 capsule</p>
                            </div>
                            <div className="bottom-padding"></div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
