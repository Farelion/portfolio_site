import React from 'react';
import './styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Cursor from './components/cursor.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.showAll = this.showAll.bind(this);
    this.showCommercial = this.showCommercial.bind(this);
    this.showNonCommercial = this.showNonCommercial.bind(this);
    this.state = {
      allHighlight: "selected",
      commercial: 'visible',
      nonCommercial: 'visible'
    }
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
                   I'm self-taught Front-end developer based in Wrocław and currently seeking new job opportunities.
                   I create apps mostly in JavaScript/React.  
                  </div>
                  <div className="about-me-info"> 
                    <div className="info-github"><a href="https://github.com/Farelion/"> <FontAwesomeIcon icon={faGithubSquare}/> github.com/Farelion </a></div>
                    <div className="info-mail"><FontAwesomeIcon icon={faEnvelope}/> marcinczownicki@gmail.com</div>   
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
                          <div className="item-title">Project Wooder</div>
                          <div className="item-text">Simple PSD to HTML/CSS/JS project to show off. </div>
                          <div className="item-links">
                            <a href="https://farelion.github.io/project-wooder/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/Farelion/project-wooder" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>

                      <div className={'content-item ' + this.state.commercial}>
                        <div className="item-wrap">
                          <div className="item-tag">commercial</div>
                          <div className="item-title">Ślubu nie będzie</div>
                          <div className="link-center"></div>
                          <div className="item-text">First commercial project for wedding planning business. It's made from scratch WordPress theme.</div>
                          <div className="item-links">
                            <a href="https://slubuniebedzie.com/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                          </div>
                        </div>
                      </div>

                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="item-wrap">
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">Weather App</div>
                          <div className="item-text">Classic Weather app project in React. </div>
                          <div className="item-links">
                            <a href="https://weather-app-farel.netlify.app/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/Farelion/weather_app" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>
                      
                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="item-wrap">
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">When to Play</div>
                          <div className="item-text">Node/Express App for displaying Riot API data created to automate simple task.</div>
                          <div className="item-links">
                            <a href="https://github.com/Farelion/when_to_play" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>

                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="work-in-prog">WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS</div>
                        <div className="item-wrap">
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">Lootfinder (react)</div>
                          <div className="item-text">Web app that makes finding WoW items easier.</div>
                          <div className="item-links">
                            <a href="https://lootfinder.netlify.app/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/Farelion/lf-react" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>

                      </div>

                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="item-wrap">
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">Lootfinder DB Creator</div>
                          <div className="item-text">Database file creator for "Lootfinder" project.</div>
                          <div className="item-links">
                            <a href="https://github.com/Farelion/lf-db-creator" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>

                      <div className={'content-item ' + this.state.nonCommercial}>
                        <div className="item-wrap">
                          <div className="item-tag"></div>
                          <div className="item-title">NEW EXCITING PROJECT!</div>
                          <div className="item-text">Coming soon.</div>
                          <div className="item-links">
                            <a href="https://github.com/Farelion?tab=repositories" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/Farelion?tab=repositories" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
              </div>

            <div className="mobile-footer">
              <div className="about-me-info"> 
                    <div className="info-github"><a href="https://github.com/Farelion/"> <FontAwesomeIcon icon={faGithubSquare}/> github.com/Farelion </a></div>
                    <div className="info-mail"><a href="mailto:marcinczownicki@gmail.com"><FontAwesomeIcon icon={faEnvelope}/> marcinczownicki@gmail.com </a></div>  
              </div>
            </div>
            
          </div>
          <Cursor/>
      </>
    );
  }
}

export default App;
