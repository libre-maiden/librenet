import React, {Component} from 'react';
import axios from "axios";
import API_URL from '../api'

import './styles/PostList.css';
import { Button } from 'reactstrap';


class PostList extends Component {
    state = { details: [], };

    componentDidMount() {
        let data;

        axios.get(API_URL)
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
                    <div className='PostList'>
                        <div key={pk}>
                            <h2>{output.title}</h2>
                            <p>{output.text}</p>
                            <p>Дата выпуска: {output.date}</p>
                            <Button color="primary">Читать</Button>
                        </div>
                    </div>
                ) )}
            </div>
        );
    }
}

export default PostList;