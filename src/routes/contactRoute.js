import express from 'express';
import {createContact, readAllContacts, readOneContact, deleteContact } from '../controllers/contactController';

const contactRouter = express.Router();

contactRouter.post('/insertContact', createContact);
contactRouter.get('/selectContact/:id', readOneContact);
contactRouter.get('/selectContacts', readAllContacts);
contactRouter.delete('/deleteContact/:id', deleteContact);

export default contactRouter;
