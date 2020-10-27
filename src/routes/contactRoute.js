import express from 'express';
import {auth} from '../middleware/authentication'
import {createContact, readAllContacts, readOneContact, deleteContact} from '../controllers/contactController';

const contactRouter = express.Router();

contactRouter.post('/insertContact', createContact);
contactRouter.get('/selectContact/:id', auth,readOneContact);
contactRouter.get('/selectContacts', auth, readAllContacts);
contactRouter.delete('/deleteContact/:id', auth, deleteContact);

export default contactRouter;
