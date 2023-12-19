const express = require('express');
const OpenAI = require('openai');
const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.openaikey });

router.post('/', async (req, res) => {
    try {
        const gptResponse = await openai.chat.completions.create({
            messages: [{ role: 'user', content: req.body.message }],
            model: 'gpt-3.5-turbo'
        });

        res.json(gptResponse.choices[0].message.content);
    } catch (error) {
        res.status(500).json({ message: 'Error while processing your request', error });
    }
});

module.exports = router;
