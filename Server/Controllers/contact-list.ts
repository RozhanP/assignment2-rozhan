import express from 'express';

import Contacts from '../Models/contact-list

import { UserDisplayName } from '../Util';

export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Contacts.find(function(err, contactsCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contacts List', page: 'contact-list', contact:contactsCollection, displayName: UserDisplayName(req) });
    });
}