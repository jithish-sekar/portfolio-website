import React, { Component } from 'react';
class About extends Component {
    render() {
        return (
            <div>
                <div className='about'>
                    <center>
                        <span className='high'>HIGH</span>
                        <span className='value'>values</span>
                        {/* <h1 className='h1about'>"We collaborate with brands and agencies to create memorable experiences."</h1> */}
                        <br /><br/>
                        <img
                            className='robo'
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
                    </center>
                </div>
                <center>
                    <div className='designcode'>
                        <br /><br /><br />
                        <span className='dc'>Code</span>
                        <span>
                            <img
                                className='dclog'
                                src='http://www.adhamdannaway.com/wp-content/themes/dannaway/images/pie-chart.png' />
                        </span>
                        <span className='dc1'>Design</span>
                        <br /><br /><br />
                    </div>
                    <div className='about'>
                    <br/><br/>
                        <section>
                            <div className='wave'>
                                <h2 className='exceptionalquality'>ECXEPTIONAL QUALITY</h2><br/>
                                <button
                                    onClick={() => this.about()}
                                    className='learnbtn'>Contact US
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