import { isObjectIdOrHexString } from 'mongoose';
import {
  getAllContactsFromDB,
  getContactByIdFormDB,
} from '../services/contacts.js';


export async function getAllContacts(req, res) {
  const contacts = await getAllContactsFromDB();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
}

export async function getContactById(req, res) {
  const { contactId } = req.params;

  if (!isObjectIdOrHexString(contactId)) {
    return res.status(400).json({
      message: 'Not valid ID'
    });
    
  }

  const contact = await getContactByIdFormDB(contactId);
  if (!contact) {
    return res.status(404).json({
      message: 'Contact not found',
    });
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}`,
    data: contact,
  });
}
