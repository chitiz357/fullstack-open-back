import express from 'express';
import { apiInfo } from '../info/connection';
import * as note from '../notes/connection';
import * as person from '../person/connection';

export const router = express.Router();

/**
 * infos
 */
router.get('/info', apiInfo);

/**
 * person routes
 */
router.get('/person', person.getPerson);
router.get('/person/:id', person.getOnePerson);
router.post('/person', person.postPerson);
router.delete('/person/:id', person.delPerson);

/**
 * notes routes
 */
router.post('/notes', note.postNote);
router.get('/notes', note.getAllNotes);
router.get('/notes/:id', note.getOneNote);
router.delete('/notes/:id', note.deleteNote);
