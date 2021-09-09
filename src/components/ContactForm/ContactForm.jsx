import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        const { name, number } = this.state;

        onSubmit(name, number);

        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;

        return (
            <div className={s.Container}>
                <form className={s.Form} onSubmit={this.handleSubmit}>
                    <label className={s.Label}>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            className={s.Input}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className={s.Label}>
                        Number
                        <input
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            className={s.Input}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit" className={s.Button}>Add contact</button>
                </form>
            </div>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}