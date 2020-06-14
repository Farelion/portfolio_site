import React from 'react';
import './styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.showAll = this.showAll.bind(this);
    this.showCommercial = this.showCommercial.bind(this);
    this.showNonCommercial = this.showNonCommercial.bind(this);
    this.state = {
      allHighlight: "selected",
      commercial: 'visible',
      nonCommercial: 'visible',
      xMain: 0,
      yMain: 0
    }
  }

  handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    this.setState({
      xMain: clientX,
      yMain: clientY,
    }, () => {
      setTimeout(() => {
        this.setState({
          xTrailing: clientX,
          yTrailing: clientY,
        })
      }, 100);
    })
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
     const {
      xMain,
      yMain,
    } = this.state;

    return (
      <>
          <div className='container' onMouseMove={e => this.handleMouseMove(e)}>
            <div className='cursors'>
              <div className='cursor' style={{ 
                  left: xMain, 
                  top: yMain,
                }}
              />
            </div>
        
            <div className="big-text-wrapper">
              <div className="big-text-top-wrapper">
                <div id="big-text-top" className="big-text-top">Marcin Czownicki </div>
              </div>
              <div className="big-text-bot-wrapper">
                <div id="big-text-bot" className="big-text-bot">Front-end Developer</div>
              </div>

              <div className="scroll-down-wrapper">
                  <div className="scroll-down-arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
              </div>
            </div>


            <div className="site-wrapper">
            
              <div className="about-me-wrapper">
                <div className="about-me">
                  <div className="about-me-header">Welcome, I'm Marcin.</div>
                  <div className="about-me-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th
                  </div>
                  <div className="about-me-info"> 
                    <div className="info-github"> <FontAwesomeIcon icon={faGithubSquare}/> github.com/Farelion </div>
                    <div className="info-mail"><FontAwesomeIcon icon={faEnvelope}/> marcinczownicki@gmail.com </div>  
                  </div>
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
                      
                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="item-wrap">
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">Lorem Ipsum</div>
                          <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                          <div className="item-links">
                            <a href="https://github.com/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>

                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="item-wrap">
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">Lorem Ipsum</div>
                          <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                          <div className="item-links">
                            <a href="https://github.com/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>

                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="item-wrap">
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">Lorem Ipsum</div>
                          <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                          <div className="item-links">
                            <a href="https://github.com/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>

                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="item-wrap">
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">Lorem Ipsum</div>
                          <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                          <div className="item-links">
                            <a href="https://github.com/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>


                      <div className={'content-item ' + this.state.commercial}>
                        <div className="item-wrap">
                          <div className="item-tag">commercial</div>
                          <div className="item-title">Ślubu nie będzie</div>
                          <div className="link-center"></div>
                          <div className="item-text">First commercial project for wedding planning business.</div>
                          <div className="item-links">
                            <a href="https://slubuniebedzie.com/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                          </div>
                        </div>
                      </div>

                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="item-wrap">
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">Lorem Ipsum</div>
                          <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                          <div className="item-links">
                            <a href="https://github.com/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>

                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="item-wrap">
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">Lorem Ipsum</div>
                          <div className="item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                          <div className="item-links">
                            <a href="https://github.com/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
              </div>

            <div className="mobile-footer">
              <div className="about-me-info"> 
                    <div className="info-github"> <FontAwesomeIcon icon={faGithubSquare}/> github.com/Farelion </div>
                    <div className="info-mail"><FontAwesomeIcon icon={faEnvelope}/> marcinczownicki@gmail.com </div>  
              </div>
            </div>
            
          </div>
        </div>
      </>
    );
  }
}

export default App;
