import { Router } from 'express';
import getlorem from 'getlorem';

const router = Router();

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

class Post {
    constructor(
        id, title, extract, content, author
    ) {
        this.id = id;
        this.title = title;
        this.extract = extract;
        this.content = content;
        this.author = author;
    }
}

// Mock posts
const posts = [
    new Post(1,
        getlorem.words(rand(4, 8)),
        getlorem.sentences(rand(1, 2)),
        getlorem.paragraphs(rand(4, 10)),
        'Christine Darden'
    ),
    new Post(2,
        getlorem.words(rand(4, 8)),
        getlorem.sentences(rand(1, 2)),
        getlorem.paragraphs(rand(4, 10)),
        'Dorothy Vaughan'
    ),
    new Post(3,
        getlorem.words(rand(4, 8)),
        getlorem.sentences(rand(1, 2)),
        getlorem.paragraphs(rand(4, 10)),
        'Katherine Johnson'
    ),
    new Post(4,
        getlorem.words(rand(4, 8)),
        getlorem.sentences(rand(1, 2)),
        getlorem.paragraphs(rand(4, 10)),
        'Mary Jackson'
    ),
    new Post(5,
        getlorem.words(rand(4, 8)),
        getlorem.sentences(rand(1, 2)),
        getlorem.paragraphs(rand(4, 10)),
        'Christine Darden'
    ),
    new Post(6,
        getlorem.words(rand(4, 8)),
        getlorem.sentences(rand(1, 2)),
        getlorem.paragraphs(rand(4, 10)),
        'Dorothy Vaughan'
    ),
];

/* GET posts listing. */
router.get('/posts', function(req, res, next) {
    return res.status(200).json(posts);
});

/* GET user by ID. */
router.get('/posts/:id', function(req, res, next) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < posts.length + 1) {
        return res.status(200).json(posts[id - 1]);
    } else {
        return res.sendStatus(404);
    }
});

export default router;
