const express = require('express');
const bookRouter = express.Router();

function router(nav) {
    // All the books
    const books = [
        {
            title: "War and Peace",
            genre: "Historical Fiction",
            author: 'Lev Nilolayevish Tolstoy',
            read: false
        },
        {
            title: "Les Miserables",
            genre: "Historical Fiction",
            author: 'Victor Hugo',
            read: false
        },
        {
            title: "The Time Machine",
            genre: "Science Fiction",
            author: 'H. G. Wells',
            read: false
        },
        {
            title: "A Journey into the Center of the Earth",
            genre: "Science Fiction",
            author: 'Jules Verne',
            read: false
        }
    ];

// Show all books
    bookRouter.route('/').get((req, res) => {
        res.render('bookListView', {
            title: 'Books',
            nav,
            books
        });
    });

// Show a single book
    bookRouter.route('/:id').get((req, res) => {
        const {id} = req.params;
        res.render('bookView', {
            title: books[id].title,
            book: books[id],
            nav
        });
    });

    return bookRouter;
}


module.exports = router;
