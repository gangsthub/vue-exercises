
import { Router } from 'express';

const router = Router();

class Emoji {
    constructor(
        id, char
    ) {
        this.id = id;
        this.char = char;
    }
}

// Mock posts
const emojis = [
    new Emoji(1, '😀'),
    new Emoji(2, '😁'),
    new Emoji(3, '😂'),
    new Emoji(4, '🤣'),
    new Emoji(6, '😃'),
    new Emoji(7, '😄'),
    new Emoji(8, '😅'),
    new Emoji(9, '😆'),
    new Emoji(10, '😉'),
    new Emoji(11, '😊'),
    new Emoji(11, '😋'),
    new Emoji(12, '😎'),
    new Emoji(13, '😍'),
    new Emoji(14, '😘'),
    new Emoji(16, '😗'),
    new Emoji(17, '😙'),
    new Emoji(18, '😚'),
    new Emoji(19, '☺️'),
    new Emoji(20, '🙂'),
    new Emoji(21, '🤗'),
    new Emoji(22, '🤩'),
    new Emoji(23, '🤔'),
    new Emoji(24, '🤨'),
    new Emoji(26, '😐'),
    new Emoji(27, '😑'),
    new Emoji(28, '😶'),
    new Emoji(29, '🙄'),
    new Emoji(30, '😏'),
];

/* GET emojis listing. */
router.get('/emojis', function(_req, res) {
    return res.status(200).json(emojis);
});

export default router;
