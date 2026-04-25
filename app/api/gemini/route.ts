import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { systemPrompt, userMessage, country, language } = await req.json()

    if (!process.env.GEMINI_API_KEY || 
        process.env.GEMINI_API_KEY === 'placeholder') {
      return NextResponse.json({
        text: `I'm VoterLens AI! To get real election information 
        for ${country}, please add your Gemini API key to .env.local. 
        Get a free key at aistudio.google.com`,
        error: false
      })
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${systemPrompt}\n\nUser: ${userMessage}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          }
        })
      }
    )

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      'Sorry, I could not get a response. Please try again.'

    return NextResponse.json({ text, error: false })
  } catch (error) {
    return NextResponse.json({ 
      text: 'Something went wrong. Please try again.',
      error: true 
    })
  }
}
