import s from './ContactList.module.css';

export const ContactItem = ({ name, number }) => {
    return (
        <li className={s.Item}>{name}: {number}</li>
    )
}