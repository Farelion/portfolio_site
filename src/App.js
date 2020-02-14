import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';


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
    (function() {
      function scrollHorizontally(e) {
          e = window.event || e;
          var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
          document.getElementById('pc').scrollLeft -= (delta * 60);
          e.preventDefault();
      }
      if (document.getElementById('pc').addEventListener) {
          // IE9, Chrome, Safari, Opera
          document.getElementById('pc').addEventListener("mousewheel", scrollHorizontally, false);
          // Firefox
          document.getElementById('pc').addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
          // IE 6/7/8
          document.getElementById('pc').attachEvent("onmousewheel", scrollHorizontally);
      }
  })();
  }


  render(){
    return (
      <div className="site-wrapper">

        <div className="about-me-wrapper">
          <div className="about-me">
            <div className="about-me-header">Lorem Ipsum is simply dummy text</div>
            <div className="about-me-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th
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
              <div className={'content-item ' + this.state.commercial}>comer</div>
              <div className={'content-item ' + this.state.nonCommercial}>nonc</div>
              <div className={'content-item ' + this.state.nonCommercial}>nonc</div>
              <div className={'content-item ' + this.state.nonCommercial}>nonc</div>
              <div className={'content-item ' + this.state.nonCommercial}>nonc</div>
              <div className={'content-item ' + this.state.nonCommercial}>nonc</div>
              <div className={'content-item ' + this.state.nonCommercial}>nonc</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
