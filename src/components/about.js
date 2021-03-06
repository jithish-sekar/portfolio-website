import React, { Component } from 'react';
class About extends Component {

    contactus() {
        this.props.history.push('/contactus')
    }
    render() {
        return (
            <div>
                <div className='about'>
                    <center>
                        <br/>
                        <span className='high'>HIGH</span>
                        <span className='value'>values</span>
                        <br /><br/>
                        <img
                            className='robo'
                            alt="img"
                            src="newrobo.png" />
                        <div className='strategies'>
                            <div className="p-30px">
                                <span className='span1'>
                                    Discover
                        </span>
                                <span>
                                    <li className='li1'>Research</li>
                                    <li className='li1'>Strategy</li>
                                    <li className='li1'>Ideation</li>
                                </span>
                            </div>
                            <div className="p-30px">
                                <span className='span1'>
                                    Design
                        </span>
                                <li className='li1'>Ux</li>
                                <li className='li1'>Branding</li>
                                <li className='li1'>Visual Design</li>
                            </div>
                            <div className="p-30px">
                                <span className='span1'>
                                    Develop
                        </span>

                                <span>
                                    <li className='li1'>Code</li>
                                    <li className='li1'>Debug</li>
                                    <li className='li1'>Console</li>
                                </span>
                            </div>
                        </div>
                        <h1 className='h1about'>"We collaborate with brands and agencies to create memorable experiences."</h1>
                        <br/>
                    </center>
                </div>
                <center>
                    <div className='designcode'>
                        <br /><br /><br />
                        
                        <span className='dc'>Design</span>
                        <span>
                            <img
                                className='dclog'
                                alt="img"
                                src='design.png' />
                        </span>
                        <span className='dc1'>Code</span>
                        <br /><br /><br />
                    </div>
                    <div className='about'>
                    <br/><br/>
                        <section>
                            <div className='wave'>
                                <h2 className='exceptionalquality'>GET IN TOUCH</h2><br/>
                                <button
                                    onClick={() => this.contactus()}
                                    className='learnbtn'>Contact us
                                </button>
                            </div>
                        </section>
                    </div>
                </center>
            </div>
        )
    }
}
export default About;