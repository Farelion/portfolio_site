import React from 'react';
import './styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Cursor from './components/cursor.js'
import {TweenLite, Linear} from 'gsap/all'

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

componentDidMount(){
  function animateWithRandomNumber(myClass, from, to) {
    TweenLite.fromTo(myClass, Math.floor((Math.random() * 20) + 1), { y: from }, { y: to,
        onComplete: animateWithRandomNumber,
        onCompleteParams: [myClass, from, to],
        ease: Linear.easeNone });
}

const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"]
itemsDown.forEach(e => animateWithRandomNumber(e, -1080, 1080))
const itemsUp = [".light1", ".light2", ".light3",".light9", ".light10", ".light17"]
itemsUp.forEach(e => animateWithRandomNumber(e, 1080, -1080))
}


  render(){
    return (
      <>
          <div className="container">
          <svg className="background__lights" id="lines" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 1080" xmlSpace="preserve" preserveAspectRatio="none">
        <g className="lines">
          <rect className="line" x="1253.6" width="4.5" height={1080} />
          <rect className="line" x="873.3" width="1.8" height={1080} />
          <rect className="line" x={1100} width="1.8" height={1080} />
          <rect className="line" x="1547.1" width="4.5" height={1080} />
          <rect className="line" x={615} width="4.5" height={1080} />
          <rect className="line" x="684.6" width="1.8" height={1080} />
          <rect className="line" x="1369.4" width="1.8" height={1080} />
          <rect className="line" x="1310.2" width="0.9" height={1080} />
          <rect className="line" x="1233.4" width="0.9" height={1080} />
          <rect className="line" x="124.2" width="0.9" height={1080} />
          <rect className="line" x="1818.4" width="4.5" height={1080} />
          <rect className="line" x="70.3" width="4.5" height={1080} />
          <rect className="line" x="1618.6" width="1.8" height={1080} />
          <rect className="line" x="455.9" width="1.8" height={1080} />
          <rect className="line" x="328.7" width="1.8" height={1080} />
          <rect className="line" x="300.8" width="4.6" height={1080} />
          <rect className="line" x="1666.4" width="0.9" height={1080} />
        </g>
        <g className="lights">
          <path className="light1 light" d="M619.5,298.4H615v19.5h4.5V298.4z M619.5,674.8H615v9.8h4.5V674.8z M619.5,135.1H615v5.6h4.5V135.1z         M619.5,55.5H615v68.7h4.5V55.5z" />
          <path className="light2 light" d="M1258.2,531.9h-4.5v8.1h4.5V531.9z M1258.2,497.9h-4.5v17.9h4.5V497.9z M1258.2,0h-4.5v25.3h4.5V0z         M1258.2,252.2h-4.5v42.4h4.5V252.2z" />
          <path className="light3 light" d="M875.1,123.8h-1.8v4h1.8V123.8z M875.1,289.4h-1.8v24.1h1.8V289.4z M875.1,0h-1.8v31.4h1.8V0z M875.1,50.2         h-1.8v11.5h1.8V50.2z" />
          <path className="light4 light" d="M1101.8,983.8h-1.8v8.2h1.8V983.8z M1101.8,1075.9h-1.8v4.1h1.8V1075.9z M1101.8,873.7h-1.8v4.2h1.8V873.7z         M1101.8,851h-1.8v18.2h1.8V851z" />
          <path className="light5 light" d="M686.4,822.7h-1.8v3.8h1.8V822.7z M686.4,928.4h-1.8v23h1.8V928.4z M686.4,1043.8h-1.8v36.2h1.8V1043.8z" />
          <path className="light6 light" d="M1551.6,860.9h-4.4v-34.1h4.4V860.9z M1551.6,533.5h-4.4v-13.9h4.4V533.5z M1551.6,1080h-4.4v-89.1h4.4V1080z" />
          <path className="light7 light" d="M1311.1,707.7h-0.9V698h0.9V707.7z M1311.1,436.8h-0.9v-58.9h0.9V436.8z M1311.1,140.7h-0.9V48h0.9V140.7z" />
          <path className="light8 light" d="M125.1,514.5h-0.9v-9.7h0.9V514.5z M125.1,243.6h-0.9v-58.9h0.9V243.6z" />
          <path className="light9 light" d="M305.4,806.7h-4.6v-42.5h4.6V806.7z M305.4,398.5h-4.6v-17.3h4.6V398.5z M305.4,1080h-4.6V968.8h4.6V1080z" />
          <path className="light10 light" d="M1822.9,170.7h-4.5v13.7h4.5V170.7z M1822.9,435.1h-4.5v6.8h4.5V435.1z M1822.9,55.9h-4.5v4h4.5V55.9z         M1822.9,0h-4.5v48.3h4.5V0z" />
          <path className="light11 light" d="M1666.4,331.5h0.9v9.7h-0.9V331.5z M1666.4,602.4h0.9v58.9h-0.9V602.4z M1666.4,898.5h0.9v92.7h-0.9V898.5z" />
          <path className="light12 light" d="M1620.4,200.7h-1.8v6.4h1.8V200.7z M1620.4,469.1h-1.8v39h1.8V469.1z M1620.4,0h-1.8v51h1.8V0z M1620.4,81.3         h-1.8V100h1.8V81.3z" />
          <path className="light13 light" d="M74.8,201h-4.5v16.2h4.5V201z M74.8,512.3h-4.5v8.1h4.5V512.3z M74.8,65.8h-4.5v4.6h4.5V65.8z M74.8,0h-4.5         v56.8h4.5V0z" />
          <path className="light14 light" d="M1371.2,655.3h-1.8v6.3h1.8V655.3z M1371.2,829.7h-1.8v37.9h1.8V829.7z M1371.2,1020.3h-1.8v59.7h1.8V1020.3z" />
          <path className="light15 light" d="M1234.3,898.1h-0.9v-4.9h0.9V898.1z M1234.3,762.5h-0.9v-29.5h0.9V762.5z M1234.3,614.4h-0.9v-46.4h0.9V614.4z         " />
          <path className="light16 light" d="M457.7,1010.8h-1.8v-18.1h1.8V1010.8z M457.7,507.5h-1.8V398h1.8V507.5z" />
          <path className="light17 light" d="M330.5,170.7h-1.8v13.7h1.8V170.7z M330.5,435.1h-1.8v6.8h1.8V435.1z M330.5,55.9h-1.8v4h1.8V55.9z M330.5,0         h-1.8v48.3h1.8V0z" />
        </g>
      </svg>
          
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
                   I create apps mostly in JavaScript/React and I would like to continue learning those, but I'm always willing to learn new technologies/languages required for work.  
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
                          <div className="item-tag">non-commercial</div>
                          <div className="item-title">Portfolio</div>
                          <div className="item-text">My own portfolio site, in fact you're checking it out right now!</div>
                          <div className="item-links">
                            <a href="https://farel.netlify.app/" className="link-left"><FontAwesomeIcon icon={faLink}/></a>
                            <div className="link-center"></div>
                            <a href="https://github.com/Farelion/portfolio_site" className="link-right"><FontAwesomeIcon icon={faGithub}/></a>
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
          
        </div>
      </>
    );
  }
}

export default App;
