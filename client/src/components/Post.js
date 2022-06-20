import React, {Component} from 'react';

import axios from "axios";


class Post extends Component {
    state = { details: [], };

    componentDidMount() {
        let data;

        axios.get('http://localhost:8000/api/app/')
            .then(res => {
                data = res.data;
                this.setState({
                    details: data
                });
            })
            .catch(err => {  })
    }

    render() {
        return(
            <div>
                {this.state.details.map((output, pk) => (
                    <div className='Post'>
                        <div key={pk}>
                            <h2>{output.title}</h2>
                            <p>{output.text}</p>
                            <p>{output.date}</p>
                        </div>
                    </div>
                ) )}
            </div>
        );
    }
}

export default Post;