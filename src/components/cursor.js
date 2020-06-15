import React, {Component} from 'react';

class Cursor extends Component {
    componentDidMount() {

        // eventlistener mousemove passing cords of cursor to div that follows cursor
        document.addEventListener('mousemove', (e) => {
            const cursor = document.querySelector(".sticky-cursor")
            cursor.style.left = e.clientX + `px`
            cursor.style.top = e.clientY + `px`

        });


        // select all buttons, links

        let buttons = document.querySelectorAll("button");
        let links = document.querySelectorAll("a");

        // addeventlisteners to buttons
        buttons.forEach(function(elem) {
            elem.addEventListener('mouseenter', () => {
                const cursor = document.querySelector(".sticky-cursor")
                cursor.classList.add('cursor-hover');
    
            });

            elem.addEventListener('mouseleave', () => {
                const cursor = document.querySelector(".sticky-cursor")
                cursor.classList.remove('cursor-hover');
    
            });
        });

        // addeventlisteners to links
        links.forEach(function(elem) {
            elem.addEventListener('mouseenter', () => {
                const cursor = document.querySelector(".sticky-cursor")
                cursor.classList.add('cursor-hover');
    
            });

            elem.addEventListener('mouseleave', () => {
                const cursor = document.querySelector(".sticky-cursor")
                cursor.classList.remove('cursor-hover');
    
            });
        });



    }
    render() {
        return (
            <div className='sticky-cursor'></div>
        )
    }
}

export default Cursor;