import express from 'express';
import {auth, admin} from '../middleware/authentication';
import {createContact, readAllContacts, readOneContact, deleteContact} from '../controllers/contactController';

const contactRouter = express.Router();

contactRouter.post('/insertContact', createContact);
contactRouter.get('/selectContact/:id', auth,readOneContact);
contactRouter.get('/selectContacts', [auth,admin], readAllContacts);
contactRouter.delete('/deleteContact/:id', [auth,admin], deleteContact);

export default contactRouter;
