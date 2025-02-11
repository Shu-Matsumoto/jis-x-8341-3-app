import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="3.3.1"
        requirement="エラーの特定の達成基準"
        summary="エラー発生時に、エラー発生箇所が明示され、適切な説明がある。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="3.3.2"
        requirement="ラベル又は説明の達成基準"
        summary="入力フォームには、入力内容や形式、入力必須かどうかなどを利用者が理解できるようなラベルまたは説明がある。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="3.3.3"
        requirement="ラベル又は説明の達成基準"
        summary="入力フォームには、入力内容や形式、入力必須かどうかなどを利用者が理解できるようなラベルまたは説明がある。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="3.3.4"
        requirement="エラー回避(法的，金融及びデータ)の達成基準"
        summary="法的な手続やデータの削除をする場合の基準。送信の確認・チェック・取り消しができる。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
    </div>
  );
}
