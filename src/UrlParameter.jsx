import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // useLocationよりsearch(?以降のURL)を取り出す
  const { search } = useLocation();
  // URLSearchParams(JS技法)よりsearchに関数が使えるように便利にする
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterのページです</h1>
      <p>パラメーターは{id}です。</p>
      <p>クエリパラメーターは{query.get("name")}です。</p>
    </div>
  );
};
