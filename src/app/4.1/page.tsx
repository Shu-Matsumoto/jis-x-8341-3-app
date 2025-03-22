"use client";
import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">4.1</header>
      </Link>
      <GoodBadCase
        chapter="4.1.1"
        requirement="構文解析の達成基準"
        summary="HTMLの文法に沿ったマークアップを行う。"
        badCaseChildren={
          <div>
            <p>悪い例: タグが閉じられていない、属性の書式が誤っているなど。</p>
            <pre>{`<div>
  <span>テキスト
</div>`}</pre>
            <p>上記のようにタグが不正にネストされている。</p>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>良い例: タグの開始・終了を正しく対応させる。</p>
            <pre>{`<div>
  <span>テキスト</span>
</div>`}</pre>
          </div>
        }
      />
      <GoodBadCase
        chapter="4.1.2"
        requirement="名前(name)，役割(role)及び値(value)の達成基準"
        summary="HTMLで表現できるUIは独自に作らない。カルーセルやタブなどHTMLにないUIを作るときはWAI-ARIAを使って作る。"
        badCaseChildren={
          <div>
            <p>悪い例: 独自のタブUIだが、ARIA属性が一切ない。</p>
            <div className="tab" onClick={() => alert("タブ切り替え")}>
              タブ1
            </div>
            <div>タブ1のコンテンツ</div>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>
              良い例: タブUIに適切な role, aria-controls, aria-selected を付与。
            </p>
            <div role="tablist" aria-label="サンプルタブ">
              <button
                role="tab"
                aria-selected="true"
                aria-controls="tab-panel-1"
              >
                タブ1
              </button>
              <button
                role="tab"
                aria-selected="false"
                aria-controls="tab-panel-2"
              >
                タブ2
              </button>
            </div>
            <div id="tab-panel-1" role="tabpanel" aria-labelledby="tab1">
              タブ1のコンテンツ
            </div>
            <div id="tab-panel-2" role="tabpanel" aria-labelledby="tab2" hidden>
              タブ2のコンテンツ
            </div>
          </div>
        }
      />
    </div>
  );
}
