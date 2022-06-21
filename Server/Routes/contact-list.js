"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const contact_list_1 = require("../Controllers/contact-list");
const Util_1 = require("../Util");
router.get('/contact-list', Util_1.AuthGuard, contact_list_1.DisplayContactList);
router.get('/edit/:id', Util_1.AuthGuard, contact_list_1.DisplayEditList);
router.post('/edit/:id', Util_1.AuthGuard, contact_list_1.ProcessEditList);
router.get('/delete/:', Util_1.AuthGuard, contact_list_1.ProcessDeleteList);
exports.default = router;
//# sourceMappingURL=contact-list.js.map