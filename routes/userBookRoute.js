import { Router } from "express";
import { createUserBook, deleteUserBook, getUserBooks, updateUserBook } from "../controller/userBookController.js";

const router = Router()

router.post( '/', createUserBook)
router.get( "/:uid/:bid", getUserBooks)
router.put( '/:uid/:bid', updateUserBook)
router.delete( "/:uid/:bid", deleteUserBook)

export default router;