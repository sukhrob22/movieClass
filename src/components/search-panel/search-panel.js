import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    updateTermHandler = (e) => {
        // bu yerdagi  funksiya app.js dagi funksiyadan farq qialdi
        const term = e.target.value.toLowerCase();
        this.setState({ term });
        this.props.updateTermHandler(term);
    };

    render() {
        return (
            <input
                type='text'
                className='form-control search-input'
                placeholder='Kinolar qidirish'
                onChange={this.updateTermHandler}
                value={this.state.term}
            />
        );
    }
}

export default SearchPanel;
