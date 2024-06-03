import React from 'react';
import '../index.css';
import Footer from './Footer';

function Alarm() {
    return (
        <div className='background'>

            <header>
                <div class="container">
                    <h1>Alarm</h1>
                    <a href="javascript:history.back()" class="back-button">Back</a>
                </div>
            </header>
            

            <main>


                <section className="alarm-column">
                    {/* Alarm 1 Example */}
                    <div className="alarm-log">
                        <br />
                        <div className="alarm">
                            <h2>10:00am</h2>
                            <p>Omeprazole 5mg liquid</p>
                            <p>Repeat Every Monday</p>
                        </div>

                        {/* Log 2 Example */}
                        <div className="alarm">
                            <h2>3:00pm</h2>
                            <p>Morphine 5mg Injection</p>
                            <p>Bi-Weekly</p>
                        </div>

                        {/* Log 3 Example */}
                        <div className="alarm">
                            <h2>5:00pm</h2>
                            <p>Tylenol 1 capsule</p>
                            <p>Repeat Every Monday</p>
                        </div>

                        {/* Log 4 Example */}
                        <div className="alarm">
                            <h2>8:00pm</h2>
                            <p>Hydrocodone 2 tablets</p>
                            <p>Repeat Every Monday</p>
                        </div>

                        <div className="alarm">
                            <h2>11:30am</h2>
                            <p>Hydrocodone 2 tablets</p>
                            <p>Repeat Every Tuesday</p>
                        </div>

                        <div className="alarm">
                            <h2>12:40pm</h2>
                            <p>Hydrocodone 2 tablets</p>
                            <p>Repeat Every Monday</p>
                        </div>

                        <div className="alarm">
                            <h2>5:00pm</h2>
                            <p>Hydrocodone 2 tablets</p>
                            <p>Repeat Every Monday</p>
                        </div>

                        <div className="alarm">
                            <h2>7:30pm</h2>
                            <p>Hydrocodone 2 tablets</p>
                            <p>Repeat Every Monday</p>
                        </div>

                        <div className="bottom-padding"></div>
                    </div>

                </section>
                <div>
                    <img src="image/clock-final.jpeg" alt="clock time" className="clock" />
                </div>

            </main>
            
        </div>
    );
}
export default Alarm;