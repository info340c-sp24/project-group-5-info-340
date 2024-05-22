import React from 'react';
import { Link } from 'react-router-dom';

export default function MedPage(props) {
    return (
        <div>
            {/* Calendar */}
            <div>
                <h1 className="med-date">Saturday April 20</h1>
                <div className="calendar">
                    <div className="day">
                        <p>Mon</p>
                    </div>
                    <div className="day">
                        <p>Tues</p>
                    </div>
                    <div className="day">
                        <p>Wed</p>
                    </div>
                    <div className="day">
                        <p>Thur</p>
                    </div>
                    <div className="day">
                        <p>Fri</p>
                    </div>
                    <div className="day-sat">
                        <p>Sat</p>
                    </div>
                    <div className="day">
                        <p>Sun</p>
                    </div>
                </div>
            </div>

            {/* To form button */}
            <div>
                <a href="/MedlogForm" className="add-alarm" aria-label="Add Medication">
                    <button>+</button>
                </a>
            </div>

            {/* Current Medication */}
            <div>
                <h3>Your Medications</h3>
                <section className="column">
                    <div>
                        <div className="log">
                            <img src="image/liquid.jpg" alt="liquid" />
                            <h2>10:00am</h2>
                            <p>Omeprazole 5mg liquid</p>
                        </div>
                        <div className="log">
                            <img src="image/Injection.png" alt="Injection" />
                            <h2>3:00pm</h2>
                            <p>Morphine 5mg Injection</p>
                        </div>
                        <div className="log">
                            <img src="image/capsule.jpg" alt="capsule" />
                            <h2>5:00pm</h2>
                            <p>Tylenol 1 capsule</p>
                        </div>
                        <div className="log">
                            <img src="image/tablets.png" alt="tablets" />
                            <h2>8:00pm</h2>
                            <p>Hydrocodone 2 tablets</p>
                        </div>
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

        </div>
    )
}

// export function AddMed(props) {
//     return (
//         // <Link to="/MedlogForm" className="add-alarm" aria-label="Add Medication">
//         //     <button>+</button>
//         // </Link>
//         <a href="/MedlogForm" className="add-alarm" aria-label="Add Medication">
//             <button>+</button>
//         </a>
//     )
// }

// export function CurrentMed(props) {
//     return (
//         <div>
//             <h3>Your Medications</h3>
//             <section className="column">
//                 <div>
//                     <div className="log">
//                         <img src="image/liquid.jpg" alt="liquid" />
//                         <h2>10:00am</h2>
//                         <p>Omeprazole 5mg liquid</p>
//                     </div>
//                     <div className="log">
//                         <img src="image/Injection.png" alt="Injection" />
//                         <h2>3:00pm</h2>
//                         <p>Morphine 5mg Injection</p>
//                     </div>
//                     <div className="log">
//                         <img src="image/capsule.jpg" alt="capsule" />
//                         <h2>5:00pm</h2>
//                         <p>Tylenol 1 capsule</p>
//                     </div>
//                     <div className="log">
//                         <img src="image/tablets.png" alt="tablets" />
//                         <h2>8:00pm</h2>
//                         <p>Hydrocodone 2 tablets</p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export function PastMed(props) {
//     return(
//         <div>
//             <h3>Your Past Medication</h3>
//             <section className="column">
//                 <div>
//                     <div className="log">
//                         <img src="image/liquid.jpg" alt="liquid" />
//                         <h2>12:00pm</h2>
//                         <p>Penicillin 5mg liquid</p>
//                     </div>
//                     <div className="log">
//                         <img src="image/capsule.jpg" alt="capsule" />
//                         <h2>7:00pm</h2>
//                         <p>Prozac 2 capsule</p>
//                     </div>
//                     <div className="bottom-padding"></div>
//                 </div>
//             </section>
//         </div>
//     )
// }