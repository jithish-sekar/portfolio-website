import React, { Component } from 'react';
class Work extends Component {
    render() {
        return (
            <div>
                <div className='work'>
                    <center>
                        <span className='ourlife'>OUR LIFE'S</span>
                        <span className='wrk'>WORK</span><br /><br /><br />
                        <img
                            className='robo'
                            src='robot.png' />
                        <h1 className='workh1'>We put our hearts and souls into making every project we undertake the very best it can possibly be – and we don’t stop until we get there.</h1>
                    </center>
                    <center><h1 className='medikare1'>Some of Studio Bulls latest projects</h1></center>
                    <h1 className='medi'>medikare.org.in</h1>
                    <p className='workp'>(Brand and information site)</p>
                    < center> <img className='workimg' src='medikare.jpg' /></center>
                    <br/><br/>
                    <h1 className='medi'>destinys.org.in</h1>
                    <p className='workp'>(Brand and information site)</p>
                    < center> <img className='workimg' src='de.jpg'/></center>
                </div>
            </div>
        )
    }
}
export default Work;