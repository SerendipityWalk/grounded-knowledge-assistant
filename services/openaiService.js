const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

/**
 * Call OpenAI API with a prompt
 * @param {string} prompt - The user prompt
 * @param {string} model - Model name (default: gpt-3.5-turbo)
 * @returns {Promise<string>} - The assistant's response
 */
async function callOpenAI(prompt, model = 'gpt-3.5-turbo') {
    if (!OPENAI_API_KEY) {
        throw new Error('OPENAI_API_KEY environment variable is not set');
    }

    try {
        const response = await axios.post(
            OPENAI_API_URL,
            {
                model,
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        throw new Error(`OpenAI API error: ${error.message}`);
    }
}

/**
 * Enhance a query for better semantic search
 * @param {string} query - The original query
 * @returns {Promise<string>} - The enhanced query
 */
async function enhanceQuery(query) {
    const enhancementPrompt = `Enhance this search query for finding governance and compliance tools. Make it more specific and semantic: "${query}"`;
    return await callOpenAI(enhancementPrompt);
}

module.exports = {
    callOpenAI,
    enhanceQuery,
};