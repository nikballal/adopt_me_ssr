import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import fs from "fs"; //file-system module
import App from "../src/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/frontend/index.html").toString();

const parts = html.split("not rendered"); //splits the html file from line 1-14, and line 15-18 (includes </div> on line 14

const app = express();

app.use("/frontend", express.static("dist/frontend"));
app.use((req, res) => {
  const reactMarkup = (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(parts[0] + renderToString(reactMarkup) + parts[1]); //server side rendering
  res.end();
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
