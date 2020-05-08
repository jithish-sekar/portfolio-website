import React, { Component } from 'react';
import axios from 'axios';
class Contactus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            email_id: '',
            Mobile: '',
            City: ''
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler(e) {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:80/save/data', this.state)
            .then(response => {
            console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    myclick() {
        alert("Successfully submitted Will contact you shortly");
    }

    
    

    render() {
        const { Name, email_id, Mobile, City } = this.state
        return (
            <div className='home'>
                <center>
                    <img
                        className='log'
                        src='bul (1) (1).png' /><br /><br /><br />
                    <h1 className='touch'>Get in touch</h1><br />

                    <form
                        onSubmit={e => this.submitHandler(e)}
                        className='validation'><br />
                        <label className='info'>Name:</label>
                        <br />
                        <input className='box'
                            type="text"
                            name="Name"
                            value={Name}
                            onChange={this.changeHandler}
                        />
                        <br /><br />
                        <label className='info'>Email id:</label>
                        <br />
                        <input className='box'
                            type="text"
                            name="email_id"
                            value={email_id}
                            onChange={this.changeHandler}
                        /><br /><br />
                        <label className='info'> Mobile:</label>
                        <br />
                        <input className='box'
                            type="text"
                            name="Mobile"
                            value={Mobile}
                            onChange={this.changeHandler}
                        /><br /><br />
                        <label className='info'> City:</label>
                        <br />
                        <input className='box'
                            type="text"
                            name="City"
                            value={City}
                            onChange={this.changeHandler}
                        /><br /><br />

                        <button
                            onClick={()=>this.myclick()}
                            className='learnbtn'
                            type="submit">
                            Submit
                        </button>
                        <br /><br />
                    </form><br /><br />

                </center>
            </div>
        )
    }
}
export default Contactus;