import { db } from "../src/utils/db.server";

type Author = {
    firstName: string;
    lastName: string;
}

type Book = {
    title: string;
    isFiction: boolean;
    datePublished: Date;
}

function getAuthor(): Array<Author> {
    return [
        {
            firstName: 'J.K.',
            lastName: 'Rowling'
        },
        {
            firstName: 'J.R.R.',
            lastName: 'Tolkien'
        },
        {
            firstName: 'George R.R.',
            lastName: 'Martin'
        },  
        {
            firstName: 'Stephen',
            lastName: 'King'
        },
        {
            firstName: 'Neil',
            lastName: 'Gaiman'
        }
    ]

}

function getBook(): Array<Book> {
    return [
        {
            title: 'Harry Potter and the Philosopher\'s Stone',
            isFiction: true,
            datePublished: new Date('1997-06-26')
        },
        {
            title: 'Harry Potter and the Chamber of Secrets',
            isFiction: true,
            datePublished: new Date('1998-07-02')
        },
        {
            title: 'Harry Potter and the Prisoner of Azkaban',
            isFiction: true,
            datePublished: new Date('1999-07-08')
        },
        {
            title: 'Harry Potter and the Goblet of Fire',
            isFiction: true,
            datePublished: new Date('2000-07-08')
        },
        {
            title: 'Harry Potter and the Order of the Phoenix',
            isFiction: true,
            datePublished: new Date('2003-06-21')
        },
        {
            title: 'Harry Potter and the Half-Blood Prince',
            isFiction: true,
            datePublished: new Date('2005-07-16')
        },
        {
            title: 'Harry Potter and the Deathly Hallows',
            isFiction: true,
            datePublished: new Date('2007-07-21')
        },
        {
            title: 'The Hobbit',
            isFiction: true,
            datePublished: new Date('1937-09-21')
        },
        {
            title: 'The Fellowship of the Ring',
            isFiction: true,
            datePublished: new Date('1954-07-29')
        },
        {
            title: 'The Two Towers',
            isFiction: true,
            datePublished: new Date('1954-11-11')
        },
        {
            title: 'The Return of the King',
            isFiction: true,
            datePublished: new Date('1955-10-20')
        },
        {
            title: 'A Game of Thrones',
            isFiction: true,
            datePublished: new Date('1996-08-01')
        },
        {
            title: 'A Clash of Kings',
            isFiction: true,
            datePublished: new Date('1998-11-16')
        },
        {
            title: 'A Storm of Swords',
            isFiction: true,
            datePublished: new Date('1998-11-16')
        }
    ]
}