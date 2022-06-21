"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeleteList = exports.ProcessEditList = exports.DisplayEditList = exports.DisplayContactList = void 0;
const contact_list_1 = __importDefault(require("../Models/contact-list"));
const Util_1 = require("../Util");
function DisplayContactList(req, res, next) {
    contact_list_1.default.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contacts List', page: 'contact-list', contact: contactsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayContactList = DisplayContactList;
function DisplayEditList(req, res, next) {
    let id = req.params.id;
    contact_list_1.default.findById(id, {}, {}, function (err, movieToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayEditList = DisplayEditList;
function ProcessEditList(req, res, next) {
    let id = req.params.id;
    let updatedContact = new contact_list_1.default({
        "_id": id,
        "Contact Name": req.body.contactName,
        "Contact Number": req.body.contactNumber,
        "Email Address": req.body.emailAddress
    });
    contact_list_1.default.updateOne({ _id: id }, updatedContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('/contact-list');
    });
}
exports.ProcessEditList = ProcessEditList;
function ProcessDeleteList(req, res, next) {
}
exports.ProcessDeleteList = ProcessDeleteList;
//# sourceMappingURL=contact-list.js.map