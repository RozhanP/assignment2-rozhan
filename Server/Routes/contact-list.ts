import express from 'express';
const router = express.Router();

import { DisplayContactList,DisplayEditList ,DisplayDeleteList ,ProcessEditList ,ProcessDeleteList} from '../Controllers/contact-list';

import { AuthGuard } from '../Util';


router.get('/contact-list', AuthGuard,  DisplayContactList);

router.get('/edit/:id', AuthGuard, DisplayEditList);

router.post('/edit/:id', AuthGuard, ProcessEditList);

router.get('/delete/:', AuthGuard, ProcessDeleteList);


export default router;

