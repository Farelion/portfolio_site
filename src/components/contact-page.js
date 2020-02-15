import React from 'react';

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.showContactPage = this.showContactPage.bind(this);
        this.hideContactPage = this.hideContactPage.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
        this.sendContact = this.sendContact.bind(this);

        this.state = {
            contactPage: "hidden",
            hover: false,
            sent: null
          }
    }

    
    showContactPage(){
        this.setState({
            contactPage: "visible"
        })
    }
    hideContactPage(){
        this.setState({
            contactPage: "hidden"
        })
    }

    toggleHover() {
        this.setState({
            hover: !this.state.hover
        })
    }

    sendContact(){
        this.setState({
            sent: "sent"
        })

        setTimeout(function() {
            this.setState({
                contactPage: "hidden",
                hover: false,
                sent: "reseting"
            }) 
        }.bind(this), 6000)

        setTimeout(function() {
            this.setState({
                sent: null
            }) 
        }.bind(this), 7000)
    }

    render(){
        return( 
            <>
                <div className={"show-contact-button " + this.state.contactPage + ' ' + this.state.sent} onClick={this.showContactPage}>
                    <div className="dot"></div>
                    <div className="text">Available for 
                        <p className="underline">hire</p>!
                    </div>
                </div>


                <div class="letter-image">
                    <div class={"animated-mail " + this.state.contactPage + ' ' + this.state.hover + ' ' + this.state.sent}>

                        <div className={'contact-wrapper ' + this.state.contactPage + ' ' + this.state.sent}>
                                    <button className="contact-send-button" onClick={this.sendContact} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>SEND</button>
                                    <button className="hide-contact-button" onClick={this.hideContactPage}>HIDE</button>
                                <div className="contact"></div>
                        </div>

                        <div class={"back-fold " + this.state.hover + ' ' + this.state.sent}></div>
                        <div class={"top-fold " + this.state.hover + ' ' + this.state.sent}></div>
                        <div class={"body " + this.state.hover + ' ' + this.state.sent}></div>
                        <div class={"left-fold " + this.state.hover + ' ' + this.state.sent}>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Contact;