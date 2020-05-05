import React, { Component } from 'react';
class Footerpage extends Component {
    footerhome() {
        this.props.history.push('/home')
    }
    footerabout() {
        this.props.history.push('/aboutus')
    }
    footerdevelopers() {
        this.props.history.push('/developers')
    }
    render() {
        return (

            <div className='footer'>
                {/* <img
                    className='bgimgfooter1'
                    src='logo3.png' />
               
                    <br /> */}
                    <div className='linkfb'>
                        <a href='' className='link'><i class="fab fa-facebook-square"></i></a>
                        <a href='' className='link'><i class="fab fa-linkedin-square"></i></a>
                        <a href='' className='link'><i class="fab fa-github-square"></i></a>
                        <a href='' className='link'><i class="fab fa-behance-square"></i></a>
                        <a href='' className='link'><i class="fab fa-twittere-square"></i></a>
                    </div>
                    <span
                        className='ftrp'>Home</span>
                    <span
                        className='ftrp'>Work</span>
                    <span
                        className='ftrp'>Who</span>
                    <span
                        className='ftrp'>About</span>
                    <br />
                    <span className='copyryt'>&#169; 2020 copyright:<a href="">studiobulls.org.in</a></span>
               
            </div>

        )
    }
}
export default Footerpage;