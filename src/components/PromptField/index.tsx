import { useState } from 'react';

function PromptField() {
  const [prompt, setPrompt] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  }

  return (
    <div>
      <label htmlFor="prompt">ChatGPT Prompt:</label>
      <input id="prompt" type="text" value={prompt} onChange={handleChange} />
    </div>
  );
}