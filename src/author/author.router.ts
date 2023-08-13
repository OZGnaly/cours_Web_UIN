import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as AuthorService from "./author.service";

export const AuthRouter = express.Router();

// Get All author
AuthRouter.get("/", async (req: Request, res: Response) => {
    try {
        const authors = await AuthorService.listAuthors();
        return res.status(200).json(authors)
    } catch (error: any) {
        return res.status(500).json(error.message)
    }
});

// GET: A single Author
AuthRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10)
    try {
        const author = await AuthorService.getAuthorById(id)
        if (author) {
            return res.status(200).json(author)
        }
        return res.status(404).json("Author Not Found")

    }catch (error: any) {
        return res.status(500).json(error.message)
    }
});

// POST: Create an author
// params: firstName , lastName
AuthRouter.post(
    "/",
    body("firstName").isString(),
    body("lastName").isString(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            const author = req.body;
            const newAuthor = await AuthorService.createAuthor(author);
            return res.status(201).json(newAuthor);

        } catch (error: any) {
            return res.status(500).json(error.message)
        }
    }
);

// Put: Updating an author
// params: firstName , lastName
AuthRouter.put(
    "/:id",
    body("firstName").isString(),
    body("lastName").isString(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        const id: number = parseInt(req.params.id, 10)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            const author = req.body;
            console.log("this is the value of the body: => ", author)
            const updatedAuthor = await AuthorService.updateAuthor(author, id);
            return res.status(200).json(updatedAuthor);

        } catch (error: any) {
            return res.status(500).json(error.message)
        }
    }
);

// Delete : delete an author based on the id
AuthRouter.delete(
    "/:id",
    async (req: Request, res: Response) => {
        const id: number = parseInt(req.params.id, 10);
        try {
            await AuthorService.deleteAuthor(id);
            return res.status(204).json("author successfully delete");
        } catch (error: any) {
            return res.status(500).json(error.message)
        }

    }
);