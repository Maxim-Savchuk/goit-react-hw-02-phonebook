import s from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
    return (
        <label className={s.label}>
            Filter contacts by name
            <input
                type="text"
                value={filter}
                onChange={onChange}
                className={s.Input} />
        </label>
    )
}