import React from 'react';
import './styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, TweenLite, Ease  } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
 
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showAll = this.showAll.bind(this);
    this.showCommercial = this.showCommercial.bind(this);
    this.showNonCommercial = this.showNonCommercial.bind(this);
    this.controller = new ScrollMagic.Controller();

    this.state = {
      allHighlight: "selected",
      commercial: 'visible',
      nonCommercial: 'visible'
    }
  }

  componentDidMount() {
      new ScrollMagic.Scene({
        triggerElement: ".big-text-wrapper",
        duration: 500, // scroll distance
        offset: 500 // start this scene after scrolling for 50px
      })
      .setTween("#big-text-top", {
        x: 2000,
      })
      .setPin("#big-text-top")
      .addTo(this.controller); 

      new ScrollMagic.Scene({
        triggerElement: ".big-text-wrapper",
        duration: 500, // scroll distance
        offset: 500 // start this scene after scrolling for 50px
      })
        .setTween("#big-text-bot", {
          x: -2000,
        })
        .setPin("#big-text-bot")
        .addTo(this.controller); 
  }

  showAll(){
    this.setState({
      allHighlight: "selected",
      commercial: 'visible',
      commercialHighlight: "not-selected",
      nonCommercial: 'visible',
      nonCommercialHighlight: "not-selected"
    })
  }

  showCommercial(){
    this.setState({
      allHighlight: "not-selected",
      commercial: 'visible',
      commercialHighlight: "selected",
      nonCommercial: 'hidden',
      nonCommercialHighlight: "not-selected"
    })
  }

  showNonCommercial(){
    this.setState({
      allHighlight: "not-selected",
      commercial: 'hidden',
      commercialHighlight: "not-selected",
      nonCommercial: 'visible',
      nonCommercialHighlight: "selected"
    })
  }

  render(){
    return (
      <>
        <div className="big-text-wrapper">
          <div className="big-text-top-wrapper">
            <div id="big-text-top" className="big-text-top">Marcin Czownicki </div>
          </div>
          <div className="big-text-bot-wrapper">
            <div id="big-text-bot" className="big-text-bot">Front-end developer</div>
          </div>
          
        </div>
        <div className="site-wrapper">
          <div className="about-me-wrapper">
            <div className="about-me">
              <div className="about-me-header">Welcome, I'm Marcin.</div>
              <div className="about-me-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th
              </div>
              <div className="about-me-mail">marcinczownicki@gmail.com</div>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio">
              <div className="portfolio-controls">
                <button className={this.state.allHighlight} onClick={this.showAll}>All</button>
                <button className={this.state.commercialHighlight} onClick={this.showCommercial}>Commercial</button>
                <button className={this.state.nonCommercialHighlight} onClick={this.showNonCommercial}>Non-commercial</button>
              </div>
              <div id="pc" className="portfolio-content">

                <div className="content-item-group-date">2020</div>
                <div className={'content-item ' + this.state.commercial}>
                  <div className="item-wrap">
                    <div className="item-tag">commercial</div>
                    <div className="item-title">Lorem Ipsum</div>
                    <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    <div className="item-links">
                      <a href="" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                      <div className="link-center"></div>
                      <a href="" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>

                <div className={'content-item ' + this.state.nonCommercial}>
                  <div className="item-wrap">
                    <div className="item-tag">Lorem Ipsum</div>
                    <div className="item-title">Lorem Ipsum</div>
                    <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    <div className="item-links">
                      <a href="" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                      <div className="link-center"></div>
                      <a href="" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>

                <div className={'content-item ' + this.state.nonCommercial}>
                  <div className="item-wrap">
                    <div className="item-tag">Lorem Ipsum</div>
                    <div className="item-title">Lorem Ipsum</div>
                    <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    <div className="item-links">
                      <a href="" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                      <div className="link-center"></div>
                      <a href="" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>

                <div className={'content-item ' + this.state.nonCommercial}>
                  <div className="item-wrap">
                    <div className="item-tag">Lorem Ipsum</div>
                    <div className="item-title">Lorem Ipsum</div>
                    <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    <div className="item-links">
                      <a href="" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                      <div className="link-center"></div>
                      <a href="" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>

                <div className={'content-item ' + this.state.nonCommercial}>
                  <div className="item-wrap">
                    <div className="item-tag">Lorem Ipsum</div>
                    <div className="item-title">Lorem Ipsum</div>
                    <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    <div className="item-links">
                      <a href="" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                      <div className="link-center"></div>
                      <a href="" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>

                <div className="content-item-group-date">2019</div>
                <div className={'content-item ' + this.state.nonCommercial}>
                  <div className="item-wrap">
                    <div className="item-tag">Lorem Ipsum</div>
                    <div className="item-title">Lorem Ipsum</div>
                    <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    <div className="item-links">
                      <a href="" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                      <div className="link-center"></div>
                      <a href="" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>

                <div className={'content-item ' + this.state.nonCommercial}>
                  <div className="item-wrap">
                    <div className="item-tag">Lorem Ipsum</div>
                    <div className="item-title">Lorem Ipsum</div>
                    <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    <div className="item-links">
                      <a href="" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                      <div className="link-center"></div>
                      <a href="" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>

                <div className={'content-item ' + this.state.nonCommercial}>
                  <div className="item-wrap">
                    <div className="item-tag">Lorem Ipsum</div>
                    <div className="item-title">Lorem Ipsum</div>
                    <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    <div className="item-links">
                      <a href="" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                      <div className="link-center"></div>
                      <a href="" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
