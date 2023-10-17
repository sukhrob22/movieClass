import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './movies-add-form.css';

class MoviesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            viewers: '',
        };
    }

    changeHandlerInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    addFormHandler = (e) => {
        e.preventDefault();
        this.props.addForm({
            name: this.state.name,
            viewers: this.state.viewers,
            id: uuidv4(),
        });
        this.setState({
            name: '',
            viewers: '',
        });
    };

    render() {
        const { name, viewers } = this.state;
        // const { addForm } = this.props;
        return (
            <div className='movies-add-form'>
                <h3>Yangi kino qo'shish</h3>
                <form
                    className='add-form   d-flex'
                    onSubmit={this.addFormHandler}
                >
                    <input
                        type='text'
                        className='form-control new-post-label'
                        placeholder='Qanday kino'
                        onChange={this.changeHandlerInput}
                        name='name'
                        value={name}
                    />
                    <input
                        type='number'
                        className='form-control new-post-label'
                        placeholder="Nechi marotaba ko'rilgan"
                        onChange={this.changeHandlerInput}
                        name='viewers'
                        value={viewers}
                    />
                    <button type='submit' className='btn btn-outline-dark'>
                        Qo'shish
                    </button>
                </form>
            </div>
        );
    }
}

// const MoviesAddForm = () => {
//     return (
//         <div className='movies-add-form'>
//             <h3>Yangi kino qo'shish</h3>
//             <form className='add-form  d-flex'>
//                 <input
//                     type='text'
//                     className='form-control new-post-label'
//                     placeholder='Qanday kino'
//                 />
//                 <input
//                     type='number'
//                     className='form-control new-post-label'
//                     placeholder="Nechi marotaba ko'rilgan"
//                 />
//                 <button type='submit' className='btn btn-outline-dark'>
//                     Qo'shish
//                 </button>
//             </form>
//         </div>
//     );
// };

export default MoviesAddForm;
