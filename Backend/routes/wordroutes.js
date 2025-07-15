const express = require('express');
const router = express.Router();
const Word = require('../Model/word');

// GET all words
router.get('/', async (req, res) => {
  try {
    const words = await Word.find();
    res.json(words);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new word
router.post('/', async (req, res) => {
  const { text } = req.body;
  try {
    const newWord = new Word({ text });
    const saved = await newWord.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
