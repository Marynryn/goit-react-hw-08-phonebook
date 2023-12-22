import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";
import { ListContacts } from "components/ListContacts/ListContacts";

const Contacts = () => {


    return (
        <div>
            <h1 style={{ fontSize: 48 }}>Phonebook</h1>
            <Form />
            <h2 style={{ fontSize: 46 }}>Contacts</h2>
            <Filter />
            <ListContacts />
        </div >

    )
}

export default Contacts;