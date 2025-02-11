import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="3.2.1"
        requirement="フォーカス時の達成基準"
        summary="フォーカスがキャンセルされたり、フォーカスした瞬間になにかが動作することがない。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="3.2.2"
        requirement="入力時の達成基準"
        summary="文字や情報を入力している時に予告なくページを移動したり情報を送信したりしない。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="3.2.3"
        requirement="一貫したナビゲーションの達成基準"
        summary="ナビゲーション要素は、毎回同じ順序、表記で実装されている。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="3.2.4"
        requirement="一貫した識別性の達成基準"
        summary="サービスの中で同じ機能は、同じ表現になっている。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
    </div>
  );
}
