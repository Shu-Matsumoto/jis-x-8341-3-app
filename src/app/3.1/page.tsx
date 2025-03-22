"use client";
import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">3.1</header>
      </Link>
      <GoodBadCase
        chapter="3.1.1"
        requirement="ページの言語の達成基準"
        summary="ページの言語が、明示的に指定されている（HTMLのlang属性で言語が指定されている）。"
        badCaseChildren={
          <div>
            <p>悪い例: &lt;html&gt; タグに lang が指定されていない。</p>
            <p>
              HTMLソース:
              <pre>{`<html>
  <head>
    ...
  </head>
  <body> ... </body>
</html>`}</pre>
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>
              良い例: &lt;html lang="ja"&gt;
              のように、ページの主言語を指定している。
            </p>
            <p>
              HTMLソース:
              <pre>{`<html lang="ja">
  <head>
    ...
  </head>
  <body> ... </body>
</html>`}</pre>
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="3.1.2"
        requirement="一部分の言語の達成基準"
        summary="一部分に用いられている他の言語が、どんな言語なのかブラウザが理解できる（lang属性で言語が指定されている）。"
        badCaseChildren={
          <div>
            <p>
              悪い例: 日本語ページの中で、英語フレーズをそのまま書いているが
              <code>lang</code> 属性がない。
            </p>
            <p>例: 「ここでは Hello World を表示します。」</p>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>
              良い例: 英語フレーズを <code>span lang="en"</code> などで明示。
            </p>
            <p>
              例: 「ここでは <span lang="en">Hello World</span> を表示します。」
            </p>
          </div>
        }
      />
    </div>
  );
}
