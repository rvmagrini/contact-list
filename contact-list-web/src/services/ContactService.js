import axios from 'axios';

const CONTACT_API_BASE_URL = "http://localhost:8080/api/v1/contacts";

class ContactService {

    getContacts() {
        return axios.get(CONTACT_API_BASE_URL);
    }

}

export default new ContactService()