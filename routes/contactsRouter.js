import express from "express";
import {
  listContactsAll,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  patchUpdateContact,
} from "../controllers/contactsControllers.js";

import validateBody from "../helpers/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
  patchSchema,
} from "../schemas/contactsSchemas.js";
import { isValidId } from "../helpers/isValidId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", listContactsAll);

contactsRouter.get("/:id", getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put("/:id", validateBody(updateContactSchema), updateContact);

contactsRouter.patch("/:id", validateBody(patchSchema), patchUpdateContact);

export default contactsRouter;
