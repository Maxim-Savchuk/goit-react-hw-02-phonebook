import { ContactItem } from "components/ContactList/ContactItem"

export const ContactList = ({ contacts }) => {
    return (
        <div>
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <ContactItem key={id} name={name} number={number} />
                    )
                })}
            </ul>
        </div>)
}