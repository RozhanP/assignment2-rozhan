import express from 'express';
import { CallbackError } from 'mongoose';

import Contacts from '../Models/contact-list';

import { UserDisplayName } from '../Util';

export function DisplayContactList(req: express.Request, res: express.Response, next: express.NextFunction):void
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
export function DisplayEditList(req: express.Request, res: express.Response, next: express.NextFunction):void
{
    let id = req.params.id;
    Contacts.findById(id,{},{},function(err,contactToEdit)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'Edit',page: 'edit',contact: contactToEdit, displayName: UserDisplayName(req)})

    });
}

export function ProcessEditList(req: express.Request, res: express.Response, next: express.NextFunction):void
{
    let id = req.params.id; 
    let updatedContact =new Contacts
    ({
        "_id":id,
        "Contact Name":req.body.contactName,
        "Contact Number":req.body.contactNumber,
        "Email Address":req.body.emailAddress
    });
    Contacts.updateOne({_id:id},updatedContact,function(err:CallbackError)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('/contact-list');
 
    });

}
export function ProcessDeleteList(req: express.Request, res: express.Response, next: express.NextFunction):void
{
let id = req.params.id;
Contacts.remove({_id:id},function(err:CallbackError)
{
    if(err)
    {
        console.error(err);
        res.end(err);
    }
    res.redirect('contact-list');

});
}
