import React, { Component } from 'react';
class Footerpage extends Component {
    home() {
        this.props.history.push('/home')
    }
    about() {
        this.props.history.push('/about')
    }
    who() {
        this.props.history.push('/who')
    }
    work() {
        this.props.history.push('/work')
    }
    render() {
        return (

            <div className='footer'>
                {/* <img
                    className='bgimgfooter1'
                    src='logo3.png' />
               
                    <br /> */}
                <div className='linkfb'>
                    <a href='' className='link'><i class="fa fa-facebook-square"></i></a>
                    <a href='' className='link'><i class="fa fa-linkedin-square"></i></a>
                    <a href='' className='link'><i class="fa fa-github-square"></i></a>
                    <a href='' className='link'><i class="fa fa-behance-square"></i></a>
                    <a href='' className='link'><i class="fa fa-twittere-square"></i></a>
                </div>
                <span
                    onClick={() => this.home()}
                    className='ftrp'>Home</span>
                <span
                    onClick={() => this.work()}
                    className='ftrp'>Work</span>
                <span
                    onClick={() => this.who()}

                    className='ftrp'>Who</span>
                <span
                    onClick={()=>this.about()}
                    className='ftrp'>About</span>
                <br />
                <span className='copyryt'>&#169; 2020 copyright-<a href="" target="_blank">studiobulls</a></span>

            </div>

        )
    }
}
export default Footerpage;