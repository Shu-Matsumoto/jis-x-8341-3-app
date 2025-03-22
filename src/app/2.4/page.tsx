"use client";
import GoodBadCase from "../GoodBadCase";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showGoodTitle, setShowGoodTitle] = useState(false);
  const [title, setTitle] = useState("初期タイトル｜ExampleSite");
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <Link href="/">
        <header className="mb-4">2.4</header>
      </Link>
      <button
        onClick={() => {
          setTitle(
            showGoodTitle
              ? "初期タイトル｜ExampleSite"
              : "良い例のページタイトル｜ExampleSite"
          );
          setShowGoodTitle(!showGoodTitle);
        }}
      >
        ページタイトルを{showGoodTitle ? "悪い例" : "良い例"}に切り替える
      </button>
      <GoodBadCase
        chapter="2.4.1"
        requirement="ブロックスキップの達成基準"
        summary="ページ中の各セクションに見出しかランドマークを設置してショートカットできる。"
        badCaseChildren={
          <div>
            <p>
              悪い例:
              ページ先頭にスキップリンクがない、主要セクションに見出しがない。
            </p>
            <div style={{ height: "200px", backgroundColor: "#eee" }}>
              ヘッダーやメニューなどの繰り返し要素 (長いと仮定)
            </div>
            <div>
              メインコンテンツですが、見出しもIDもないためキーボード利用者がここへ飛べません。
            </div>
          </div>
        }
        goodCaseChildren={
          <div>
            <a href="#mainContent" className="skip-link">
              メインコンテンツへスキップ
            </a>
            <header role="banner">
              <nav role="navigation">
                {/* ナビゲーションリンクなど */}
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </nav>
            </header>
            <main id="mainContent" role="main">
              <h1>メインコンテンツの見出し</h1>
              <p>
                ここからがメインコンテンツです。スキップリンクで直接ここへ移動できます。
              </p>
            </main>
          </div>
        }
      />
      <GoodBadCase
        chapter="2.4.2"
        requirement="ページタイトルの達成基準"
        summary="ウェブページのタイトルが「ページ単体の内容｜サイト名」のように、内容を具体的に把握できる記述になっている。"
        badCaseChildren={
          <div>
            <p>
              悪い例: &lt;title&gt;Home&lt;/title&gt; のように、内容が抽象的
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>
              良い例: &lt;title&gt;製品一覧｜ExampleSite&lt;/title&gt;
              のように、ページの主題を含める
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="2.4.3"
        requirement="フォーカス順序の達成基準"
        summary="意味が通じる、適切な順序でフォーカス位置を変更していける。"
        badCaseChildren={
          <div>
            {/* tabIndex で変に順序を指定 */}
            <button tabIndex={3}>ボタンA</button>
            <button tabIndex={1}>ボタンB</button>
            <button tabIndex={2}>ボタンC</button>
            <p>tabIndex がバラバラで、フォーカスが自然な順序になりません。</p>
          </div>
        }
        goodCaseChildren={
          <div>
            {/* デフォルトの tabIndex (0 or undefined) に任せる */}
            <button>ボタンA</button>
            <button>ボタンB</button>
            <button>ボタンC</button>
            <p>HTMLのソース順にフォーカスが移動し、自然です。</p>
          </div>
        }
      />
      <GoodBadCase
        chapter="2.4.4"
        requirement="リンクの目的(コンテキスト内)の達成基準"
        summary="リンクテキストを読むか、または前後の文脈から明確にリンク先の内容を推測できる。"
        badCaseChildren={
          <div>
            <p>
              詳細は <a href="/somewhere">こちら</a> をご覧ください。
            </p>
            <p>
              リンクテキストが「こちら」だけだと、スクリーンリーダー利用者などには目的が分かりにくい。
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>
              製品Aの詳細は{" "}
              <a href="/products/a">製品Aの仕様・価格を確認する</a>{" "}
              からご覧ください。
            </p>
            <p>リンクテキストだけで「製品Aの情報へ飛ぶ」ことが理解できます。</p>
          </div>
        }
      />
      <GoodBadCase
        chapter="2.4.5"
        requirement="複数の手段の達成基準"
        summary="目的のページを見つけるための複数のナビゲーション手段がある。"
        badCaseChildren={
          <div>
            <p>悪い例: 上部のナビゲーションリンクだけしかない。</p>
            <nav>
              <ul>
                <li>
                  <a href="#">トップ</a>
                </li>
                <li>
                  <a href="#">製品一覧</a>
                </li>
              </ul>
            </nav>
            <p>検索機能やサイトマップへの導線がなく、探しづらい。</p>
          </div>
        }
        goodCaseChildren={
          <div>
            <nav>
              <ul>
                <li>
                  <a href="#">トップ</a>
                </li>
                <li>
                  <a href="#">製品一覧</a>
                </li>
                <li>
                  <a href="#">サポート</a>
                </li>
              </ul>
            </nav>
            <div>
              <label htmlFor="siteSearch">サイト内検索:</label>
              <input
                id="siteSearch"
                type="search"
                placeholder="キーワードを入力"
              />
              <button>検索</button>
            </div>
            <p>
              <a href="/sitemap">サイトマップ</a>{" "}
              も用意しており、複数の方法で目的のページへアクセスできます。
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="2.4.6"
        requirement="見出し及びラベルの達成基準"
        summary="見出しは、コンテンツの主題を説明している。ラベルは、入力内容や目的、形式、入力必須かどうかなどが理解できるように説明をしている。"
        badCaseChildren={
          <div>
            <h2>フォーム</h2>
            {/* ラベルがないテキストフィールド */}
            <input type="text" placeholder="名前" />
            <button>送信</button>
            <p>
              ラベルがないため、スクリーンリーダーで何を入力する欄か分かりにくい。
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            <h2>お問い合わせフォーム</h2>
            <div>
              <label htmlFor="name">お名前（必須）</label>
              <input id="name" type="text" required />
            </div>
            <div>
              <label htmlFor="email">メールアドレス</label>
              <input id="email" type="email" />
            </div>
            <button>送信</button>
            <p>
              見出しで「お問い合わせフォーム」と示し、各入力欄に対して適切なラベルを付与しています。
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="2.4.7"
        requirement="フォーカスの可視化の達成基準"
        summary="フォーカスインジケーターが表示されている。"
        badCaseChildren={
          <div>
            {/* outline: none; でフォーカスが見えない例 */}
            <button style={{ outline: "none" }}>
              フォーカスが見えないボタン
            </button>
            <p>
              CSSで <code>outline: none;</code> を指定しており、
              キーボード操作時にどこにフォーカスがあるのか分かりません。
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            {/* フォーカス時に枠線などのインジケーターを表示 */}
            <style jsx>{`
              button:focus {
                outline: 2px solid blue; /* フォーカスを明示 */
                outline-offset: 2px;
              }
            `}</style>
            <button>フォーカスが可視化されるボタン</button>
            <p>
              キーボード操作時に青色の枠線が表示され、どこにフォーカスがあるか分かりやすい。
            </p>
          </div>
        }
      />
    </div>
  );
}
