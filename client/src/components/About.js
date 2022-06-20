import React, {Component} from 'react';

import './styles/About.css';

class About extends Component {
    state = {
        title: "О проекте",
        text: "Librenet - русскоязычный интернет-проект, посвящённый открытым и свободным компьютерным технологиям. Веб-портал предоставляет пользователям ежедневные новости в области свободного программного обеспечения, Linux, BSD и UNIX-подобных операционных систем, а также в сфере IT в целом."
    };

    render() {
        return (
            <div className='About'>
                <h2 className='title'>{this.state.title}</h2>
                <p className='text'>{this.state.text}</p>
            </div>
        );
    }
}

export default About;