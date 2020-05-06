import React, { Component } from 'react';
class Who extends Component {
    render() {
        return (
            <div className='who'>
                <center>
                    <span className='whoh1'>BETTER</span>
                    <span className='think'> THINKING</span><br/><br/>
                    <img
                            className='robo'
                            src='robo.png' />
                    <h1 className='whohh'>We're developers, designers, strategists, and awkward dancers.</h1>
                    <div className='meet'>
                        <p className='team'>Meet the team!</p>
                     </div>
                    <h1 className='strapline'></h1>
                        <br/>
                    <img
                        className='pic'
                        src='jithu2.jpg' />
                </center>
                <p className='nam1'>JITHISH SEKAR</p>
                <p className='nam2'>(FULL STACK WEB DEVELOPER)</p>
                <div className=''>
                        <a href='' className='link'><i class="fa fa-facebook-square"></i></a>
                        <a href='' className='link'><i class="fa fa-linkedin-square"></i></a>
                        <a href='' className='link'><i class="fa fa-github-square"></i></a>
                        <a href='' className='link'><i class="fa fa-behance-square"></i></a>
                        <a href='' className='link'><i class="fa fa-twittere-square"></i></a>
                    </div>
            </div>

        )
    }
}
export default Who;