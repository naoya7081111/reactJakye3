import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/708">URL Prameter</Link>
      <br />
      <Link to="/page2/708?name=hogehoge">Query Prameter</Link>
    </div>
  );
};
