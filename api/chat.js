export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { messages } = req.body || {};
    const apiKey = process.env.GEMINI_API_KEY || "";

    if (!Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Messages must be a non-empty array' });
    }

    const lastUserMessage = messages.filter(m => m.role === 'user').pop()?.content || "";
    const systemPrompt = messages.find(m => m.role === 'system')?.content || "";

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        role: 'user',
                        parts: [{ text: `${systemPrompt}\n\nUser Question: ${lastUserMessage}` }]
                    }
                ]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: data?.error?.message || 'Failed to fetch from Gemini'
            });
        }

        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        return res.status(200).json({
            choices: [
                {
                    message: {
                        role: 'assistant',
                        content: reply
                    }
                }
            ]
        });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
