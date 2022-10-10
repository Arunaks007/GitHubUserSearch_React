import { useState } from "react";

import "./styles.css";

const gitApi = "https://api.github.com/users/";

export default function App() {
  const [Username, setUsername] = useState("");
  const [url, setUrl] = useState({});

  async function getUser() {
    let data = await fetch(gitApi + Username).then((response) =>
      response.json()
    );
    // console.log(data);
    data.message === "Not Found"
      ? setUrl({ Name: data.message })
      : setUrl({ Name: data.name, dp: data.avatar_url, link: data.html_url });
  }

  return (
    <div className="App">
      <h1>Github User Search</h1>
      <input
        type="text"
        placeholder="Enter Github Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={getUser}>Submit</button>
      <div>
        <br />
        <img src={url.dp} alt="" />
        <br />
        <label>{url.Name}</label>
      </div>
      <a href={url.link}>{url.link}</a>
    </div>
  );
}
