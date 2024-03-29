import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";


export default function GPTField() {
    const [promptInput, setPromptInput] = useState("");
    const [result, setResult] = useState();
  
    async function onSubmit(event) {
      event.preventDefault();
      try {
        const response = await fetch("../../pages/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ book: promptInput }),
        });
  
        const data = await response.json();
        if (response.status !== 200) {
          throw data.error || new Error(`Request failed with status ${response.status}`);
        }
  
        setResult(data.result);
        setPromptInput("");
      } catch(error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
      }
    }
  
    return (
        <div>
          <Head>
            <title>OpenAI Quickstart</title>
            <link rel="icon" href="/dog.png" />
          </Head>
    
          <main className={styles.main}>
            <img src="/dog.png" className={styles.icon} />
            <h3>Name my pet</h3>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="animal"
                placeholder="Enter an prompt"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
              />
              <input type="submit" value="Generate names" />
            </form>
            <div className={styles.result}>{result}</div>
          </main>
        </div>
      );
  }
  