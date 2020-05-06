import React, { Component } from 'react';
class Contactus extends Component {
    render() {
        return (
            <div className='home'>
                <center>
                    <img
                        className='log'
                        src='newbull.png' /><br/><br/><br/>
                    <h1 className='touch'>Get in touch</h1><br/>
                    <form className='validation'><br/>
                        <label className='info'>Name:</label>
                        <br />
                        <input className='box' type="text" name="Name" /><br /><br/>
                        <label className='info'>Email id:</label>
                        <br />
                        <input className='box' type="text" name="email_id" /><br /><br/>
                        <label className='info'> Mobile:</label>
                        <br />
                        <input className='box' type="text" name="Mobile" /><br /><br />
                        <label className='info'> City:</label>
                        <br />
                        <input className='box' type="text" name="City" /><br /><br />

                        <input
                            className='learnbtn'
                            type="submit" value="Submit" /><br/><br/>
                    </form><br/><br/>
                </center>
            </div>
        )
    }
}
export default Contactus;