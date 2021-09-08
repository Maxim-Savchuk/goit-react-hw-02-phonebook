export const ContactList = ({ contacts }) => {
    return (
        <div>
            <ul>
                {contacts.map((contact, index) => {
                    return (
                        <li key={index}>{contact}</li>
                    )
                })}
            </ul>
        </div>)
}