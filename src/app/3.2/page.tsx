"use client";
import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">3.2</header>
      </Link>
      <GoodBadCase
        chapter="3.2.1"
        requirement="フォーカス時の達成基準"
        summary="フォーカスがキャンセルされたり、フォーカスした瞬間になにかが動作することがない。"
        badCaseChildren={
          <div>
            <p>悪い例: フォーカスが当たった瞬間にアラートが出る。</p>
            <input
              onFocus={() =>
                alert("フォーカスを当てた瞬間に動作します（悪い例）")
              }
              placeholder="フォーカスするとアラートが出ます"
            />
          </div>
        }
        goodCaseChildren={
          <div>
            <p>
              良い例: フォーカスを当てても、ユーザー操作なしでは動作しない。
            </p>
            <input placeholder="フォーカスしても勝手に動作しません" />
          </div>
        }
      />
      <GoodBadCase
        chapter="3.2.2"
        requirement="入力時の達成基準"
        summary="文字や情報を入力している時に予告なくページを移動したり情報を送信したりしない。"
        badCaseChildren={
          <div>
            <p>悪い例: セレクトボックスを変更した瞬間にページが移動する。</p>
            <select
              onChange={() => {
                window.location.href = "/another-page";
              }}
            >
              <option>選択してください</option>
              <option value="1">オプション1</option>
              <option value="2">オプション2</option>
            </select>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>
              良い例: 「変更を適用」ボタンを用意し、ユーザーが明示的に操作する。
            </p>
            <select>
              <option>選択してください</option>
              <option value="1">オプション1</option>
              <option value="2">オプション2</option>
            </select>
            <button>変更を適用</button>
          </div>
        }
      />
      <GoodBadCase
        chapter="3.2.3"
        requirement="一貫したナビゲーションの達成基準"
        summary="ナビゲーション要素は、毎回同じ順序、表記で実装されている。"
        badCaseChildren={
          <div>
            <p>悪い例: ページAとページBでメニュー項目の順番が違う。</p>
            <ul>
              <li>トップ</li>
              <li>製品一覧</li>
              <li>お問い合わせ</li>
            </ul>
            <p>（別ページ）</p>
            <ul>
              <li>お問い合わせ</li>
              <li>トップ</li>
              <li>製品一覧</li>
            </ul>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>良い例: どのページでも同じ順序・表記を保つ。</p>
            <ul>
              <li>トップ</li>
              <li>製品一覧</li>
              <li>お問い合わせ</li>
            </ul>
          </div>
        }
      />
      <GoodBadCase
        chapter="3.2.4"
        requirement="一貫した識別性の達成基準"
        summary="サービスの中で同じ機能は、同じ表現になっている。"
        badCaseChildren={
          <div>
            <p>
              悪い例: 「検索」アイコンとしてページAでは虫眼鏡、
              ページBでは拡大鏡アイコンを使い、かつラベルが「探す」だったり「検索」だったりする。
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>
              良い例:
              どのページでも検索機能は虫眼鏡アイコンと「検索」というラベルで統一。
            </p>
          </div>
        }
      />
    </div>
  );
}
