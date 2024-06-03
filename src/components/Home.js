import React from 'react';
import '../index.css';
import Footer from './Footer';


function Home() {
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
                    {/* Log 1 Example */}
                    <div className="log">
                        <img src="image/liquid.jpg" alt="liquid" />
                        <h2>10:00am</h2>
                        <p>Omeprazole 5mg liquid</p>
                    </div>

                    {/* Log 2 Example */}
                    <div className="log">
                        <img src="image/Injection.png" alt="Injection" />
                        <h2>3:00pm</h2>
                        <p>Morphine 5mg Injection</p>
                    </div>

                    {/* Log 3 Example */}
                    <div className="log">
                        <img src="image/capsule.jpg" alt="capsule" />
                        <h2>5:00pm</h2>
                        <p>Tylenol 1 capsule</p>
                    </div>

                    {/* Log 4 Example */}
                    <div className="log">
                        <img src="image/tablets.png" alt="tablets" />
                        <h2>8:00pm</h2>
                        <p>Hydrocodone 2 tablets</p>
                    </div>

                    {/* Additional Logs */}
                    <div className="log">
                        <img src="image/tablets.png" alt="tablets" />
                        <h2>8:00pm</h2>
                        <p>Hydrocodone 2 tablets</p>
                    </div>

                    <div className="log">
                        <img src="image/tablets.png" alt="tablets" />
                        <h2>8:00pm</h2>
                        <p>Hydrocodone 2 tablets</p>
                    </div>

                    <div className="log">
                        <img src="image/tablets.png" alt="tablets" />
                        <h2>8:45pm</h2>
                        <p>Lisinopril 2 tablets</p>
                    </div>
                    <div className="bottom-padding"></div>
                </section>
            </main>

        </div>
    );
};

export default Home;
