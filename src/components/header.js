import React, { Component } from 'react';
class HeaderComponent extends Component {
    home() {
        this.props.history.push('/home')
    }
    work() {
        this.props.history.push('/work')
    }
    who() {
        this.props.history.push('/who')
    }
    about() {
        this.props.history.push('/about')
    }

    render() {
        return (

            <div className='head'>
                <nav className='headernav'>
                    <div>
                        <h1 className='built'>BUILT BY</h1>
                        <div className='hdr'>
                            <span
                                onClick={() => this.home()}
                                className='headernavspan'
                            >Home</span>
                            <span
                                onClick={() => this.work()}
                                className='headernavspan'
                            >Work</span>
                            <img
                                onClick={() => this.home()}
                                className='headerlogo'
                                alt="img"
                                src='logo1.png' />
                            <span
                                onClick={() => this.who()}
                                className='headernavspan'
                            >Who</span>
                            <span
                                onClick={() => this.about()}
                                className='headernavspan'
                            >About</span>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default HeaderComponent;