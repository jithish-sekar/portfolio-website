import React, { Component } from 'react';
class Who extends Component {
    contactus() {
        this.props.history.push('/contactus')
    }
    render() {
        return (
            <div className='who'>
                <center>
                    <span className='whoh1'>BETTER</span>
                    <span className='think'> THINKING</span><br /><br />
                    <img
                        className='robo'
                        src='ro.png' /><br /><br />
                    <h1 className='whohh'>We're developers, designers, strategists, and awkward dancers.</h1>
                    <div className='meet'>
                        <p className='team'>Meet the team!</p>
                    </div>
                    <h1 className='strapline'></h1>
                    <br />
                    <img
                        className='pic'
                        src='jithu2 (1).jpg' />
                </center>
                <div className='edit'>
                    <p className='nam1'>JITHISH SEKAR</p>
                    <p className='nam2'>(FULL STACK WEB DEVELOPER)</p>
                    <div className='wholink'>
                        <a href='' className='link'><i class="fa fa-facebook-square"></i></a>
                        <a href='' className='link'><i class="fa fa-linkedin-square"></i></a>
                        <a href='' className='link'><i class="fa fa-github-square"></i></a>
                        <a href='' className='link'><i class="fa fa-behance-square"></i></a>
                        <a href='' className='link'><i class="fa fa-twittere-square"></i></a>
                    </div>
                </div>
                <br /><br />
                <center>
                    <img
                        className='pic'
                        src='dh.jpg' />
                </center>
                <div className='edit'>
                    <p className='nam1'>DHANUSH SUNDARAJAN</p>
                    <p className='nam2'>(GRAPHIC DESIGNER)</p>
                    <div className='wholink'>
                        <a href='' className='link'><i class="fa fa-facebook-square"></i></a>
                        <a href='' className='link'><i class="fa fa-linkedin-square"></i></a>
                        <a href='' className='link'><i class="fa fa-github-square"></i></a>
                        <a href='' className='link'><i class="fa fa-behance-square"></i></a>
                        <a href='' className='link'><i class="fa fa-twittere-square"></i></a>
                    </div>
                </div>
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

        )
    }
}
export default Who;