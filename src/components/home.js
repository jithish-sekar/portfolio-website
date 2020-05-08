import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { name: "destinys.org.in", url: "de.jpg", link:'medikare.org.in' },
                { name: "medikare.org.in", url: "medikare.jpg" },
                { name: "pills", url: "pill1.jpg" },
            ],
            currenImagePosition: 0
        }
    }

    getImageSlider = () => {
        let slider = []
        let imageToLoad = this.state.images[this.state.currenImagePosition];
        slider.push(<div className="image-holder">  <img src={imageToLoad.url}></img> {imageToLoad.name}</div>)
        return slider;
    }

    goToPrevSlide = () => {
        let newPosition = this.state.currenImagePosition - 1
        if (this.state.images[newPosition]) {
            this.setState({ currenImagePosition: newPosition })
        }
    }

    goToNextSlide = () => {
        let newPosition = this.state.currenImagePosition + 1
        if (this.state.images[newPosition]) {
            this.setState({ currenImagePosition: newPosition })
        }

    }
    contactus() {
        this.props.history.push('/contactus')
    }

    render() {
        return (
            <div className='home'>
                <center>
                    <img
                        className='log'
                        src='bul (1) (1).png'
                        />
                    <br />
                    <h1 className='homeh'>A higher plain</h1>
                    <h2 className='homeh2'>We build brands and beautiful websites for clients who need a little help to create something truly special. We do it with love in India for clients all around the world...</h2>
                    <br />
                    <h3 className='homeh3'>Tap to discover</h3>
                    <br /><br />
                    <div>
                        {this.getImageSlider()}
                    </div>
                    <br /><br />
                    <button
                        onClick={() => this.goToNextSlide()}
                        className='btn1'><i class="fa fa-arrow-right"></i></button>
                    <button
                        onClick={() => this.goToPrevSlide()}
                        className='btn1'><i class="fa fa-arrow-left"></i></button>
                    <br /><br /><br /><br />
                    <section>
                        <div className='wave'>
                            <h2 className='exceptionalquality'>GET IN TOUCH</h2><br/>
                            <button
                                onClick={() => this.contactus()}
                                className='learnbtn'>Contact Us
                        </button>
                        </div>
                    </section>
                </center>
            </div>

        )
    }
}
export default Home;