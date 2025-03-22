"use client";
import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">3.3</header>
      </Link>
      <GoodBadCase
        chapter="3.3.1"
        requirement="エラーの特定の達成基準"
        summary="エラー発生時に、エラー発生箇所が明示され、適切な説明がある。"
        badCaseChildren={
          <div>
            <form>
              <label htmlFor="emailBad">メールアドレス</label>
              <input id="emailBad" type="text" />
              <button>送信</button>
            </form>
            <p>
              送信後、単に「エラーです」とだけ表示され、どこがエラーか不明。
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            <form>
              <label htmlFor="emailGood">メールアドレス</label>
              <input
                id="emailGood"
                type="email"
                aria-describedby="errorEmail"
              />
              <button>送信</button>
            </form>
            <p id="errorEmail" style={{ color: "red" }}>
              メールアドレスが正しく入力されていません。
            </p>
            <p>
              エラー箇所（メールアドレス欄）と具体的な説明を表示し、ユーザーが修正できる。
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="3.3.2"
        requirement="ラベル又は説明の達成基準"
        summary="入力フォームには、入力内容や形式、入力必須かどうかなどを利用者が理解できるようなラベルまたは説明がある。"
        badCaseChildren={
          <div>
            <p>悪い例: 「名前」だけで、必須かどうかも形式も書かれていない。</p>
            <label htmlFor="nameBad">名前</label>
            <input id="nameBad" type="text" />
          </div>
        }
        goodCaseChildren={
          <div>
            <p>良い例: 必須項目や形式をラベルで明確に伝える。</p>
            <label htmlFor="nameGood">
              お名前（必須）<span style={{ color: "red" }}>*</span>
            </label>
            <input
              id="nameGood"
              type="text"
              aria-required="true"
              placeholder="山田 太郎"
            />
          </div>
        }
      />
      <GoodBadCase
        chapter="3.3.3"
        requirement="ラベル又は説明の達成基準"
        summary="入力フォームには、入力内容や形式、入力必須かどうかなどを利用者が理解できるようなラベルまたは説明がある。"
        badCaseChildren={
          <div>
            <p>
              悪い例: 「入力エラーです」とだけ表示され、どう直せばよいか不明。
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>
              良い例: 「メールアドレスの形式が正しくありません。例:
              user@example.com」
            </p>
            <p>具体的な修正例やフォーマット例を提示している。</p>
          </div>
        }
      />
      <GoodBadCase
        chapter="3.3.4"
        requirement="エラー回避(法的，金融及びデータ)の達成基準"
        summary="法的な手続やデータの削除をする場合の基準。送信の確認・チェック・取り消しができる。"
        badCaseChildren={
          <div>
            <p>
              悪い例:
              「削除ボタン」を押したら即データが削除され、取り消しできない。
            </p>
            <button>データを削除</button>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>良い例: 確認ダイアログや取り消し手段を用意する。</p>
            <button
              onClick={() => {
                const confirmDelete = confirm("本当に削除しますか？");
                if (confirmDelete) {
                  alert("削除しました");
                } else {
                  alert("削除をキャンセルしました");
                }
              }}
            >
              データを削除
            </button>
          </div>
        }
      />
    </div>
  );
}
