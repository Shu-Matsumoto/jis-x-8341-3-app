import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="2.4.1"
        requirement="ブロックスキップの達成基準"
        summary="ページ中の各セクションに見出しかランドマークを設置してショートカットできる。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="2.4.2"
        requirement="ページタイトルの達成基準"
        summary="ウェブページのタイトルが「ページ単体の内容｜サイト名」のように、内容を具体的に把握できる記述になっている。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="2.4.3"
        requirement="フォーカス順序の達成基準"
        summary="意味が通じる、適切な順序でフォーカス位置を変更していける。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="2.4.4"
        requirement="リンクの目的(コンテキスト内)の達成基準"
        summary="リンクテキストを読むか、または前後の文脈から明確にリンク先の内容を推測できる。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="2.4.5"
        requirement="複数の手段の達成基準"
        summary="目的のページを見つけるための複数のナビゲーション手段がある。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="2.4.6"
        requirement="見出し及びラベルの達成基準"
        summary="見出しは、コンテンツの主題を説明している。ラベルは、入力内容や目的、形式、入力必須かどうかなどが理解できるように説明をしている。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="2.4.7"
        requirement="フォーカスの可視化の達成基準"
        summary="フォーカスインジケーターが表示されている。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
    </div>
  );
}
