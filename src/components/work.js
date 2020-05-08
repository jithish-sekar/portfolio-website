import React, { Component } from 'react';
class Work extends Component {
    contactus() {
        this.props.history.push('/contactus')
    }
    render() {
        return (
            <div>
                <div className='work'>
                    <center>
                        <span className='ourlife'>OUR LIFE'S</span>
                        <span className='wrk'>WORK</span><br /><br /><br />
                        <img
                            className='rob'
                            src='robot.png' />
                    </center>
                    <center><h1 className='medikare1'>Some of Studio Bulls latest projects</h1>
                    <h1 className='workh1'>We put our hearts and souls into making every project we undertake the very best it can possibly be – and we don’t stop until we get there.</h1>
                    </center>
                    <h1 className='medi'>medikare.org.in</h1>
                    <p className='workp'>(Brand and information site)</p>
                    < center> <img className='workimg' src='medikare.jpg' /></center>
                    <br/><br/>
                    <h1 className='medi'>destinys.org.in</h1>
                    <p className='workp'>(Brand and information site)</p>
                    < center> <img className='workimg' src='de.jpg' /></center>
                    <br /><br />
                    <h1 className='medi'>Chill Pill</h1>
                    <p className='workp'>(Illustrator and design)</p>
                    < center> <img className='workimg2' src='pill1.jpg' /></center>
                    <br /><br />
                    <h1 className='medi'>xxxtentacion</h1>
                    <p className='workp'>(Illustrator  and design)</p>
                    < center> <img className='workimg2' src='xxx2.jpg' /></center>
                    <br /><br />
                    <h1 className='medi'>Nairobi</h1>
                    <p className='workp'>(Illustrator  and design)</p>
                    < center> <img className='workimg2' src='nairobi23.jpg' /></center>
                    <br /><br />
                    <h1 className='medi'>Iron man & Thanos</h1>
                    <p className='workp'>(Illustrator  and design)</p>
                    < center> <img className='workimg1' src='thanos.jpg' /></center>
                    <br /><br />
                    
                    <h1 className='medi'>Ford vs Ferrari</h1>
                    <p className='workp'>(Illustrator and design)</p>
                    < center> <img className='workimg1' src='fvf.jpg' /></center>
                    <br /><br />
                    <section>
                        <div className='wave'>
                            <h2 className='exceptionalquality'>GET IN TOUCH</h2><br />
                            <center>
                            <button
                                onClick={() => this.contactus()}
                                className='learnbtn'>Contact Us
                        </button></center>
                        </div>
                    </section>
                </div>
                
            </div>
        )
    }
}
export default Work;