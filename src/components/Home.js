import React from 'react';
import '../index.css';
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { getDatabase } from 'firebase/database';


function Home() {
    const db = getDatabase();
    const [medications, setMedications] = useState([]);

    useEffect(() => {
        const query = ref(db, "MedLog/User/Medication");
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

            <header>
                <div className="container">
                    <h1>Home</h1>
                    <p>Hello User</p>
                    <a href="javascript:history.back()" className="back-button">Back</a>
                </div>
            </header>


            <main>
                <div className="consistancy">
                    <h3>Your Consistancy</h3>
                    <h4>You have taken 50% of your medication!</h4>
                </div>

                <h3>Today's Medications</h3>
                <section className="column">

                {medications.map((medication, index) => (
                    
                    <div className="log" key={index}>
                        <img src={getImageSrc(medication.medicationType)} alt={medication.medicationType} />
                        <h2>{medication.medicationTime}</h2>
                        <p>{`${medication.medicationName} ${medication.medicationStrength}${medication.medicationAmtType} ${medication.medicationType}`}</p>
                    </div>
                 ))}

                <div className="bottom-padding"></div>
                </section>
            </main>

        </div >
    );
};

export default Home;
