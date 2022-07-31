import { Link } from "react-router-dom"

function ContactsList(props) {
  const { contacts } = props
  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map(contact => {
          const { firstName, lastName, id } = contact
          return (
            <li className="contact" key={id}>
              <p>
                {firstName} {lastName}
              </p>
              <p>
                <Link to={`/contacts/${id}`}> View</Link></p>
              <p id="edit"><Link to={`/contacts/${id}/edit`}>Edit</Link>
              </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactsList