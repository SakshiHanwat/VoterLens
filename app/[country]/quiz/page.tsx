import React from 'react';

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function QuizPage({ params }: PageProps) {
  const { country } = await params;
  return (
    <div className="p-8">
      <h1>Quiz for {country}</h1>
    </div>
  );
}
