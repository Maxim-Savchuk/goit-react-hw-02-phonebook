// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export const ContactForm = ({ name, onSubmit, onInput }) => {
    return (
        <div className={s.Container}>
            <form className={s.Form} onSubmit={onSubmit}>
                <label className={s.Label}>
                    Name
                    <input
                        type="text"
                        name={"name"}
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        className={s.Input}
                        onInput={onInput}
                    />
                </label>

                <button type="submit" className={s.Button}>Add contact</button>
            </form>
        </div>
    );
};