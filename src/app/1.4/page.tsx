import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="1.4.1"
        requirement="色の使用の達成基準"
        summary="赤字など、色の違いだけで、情報を伝えていない。白黒に変換しても理解できる。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="1.4.2"
        requirement="音声の制御の達成基準"
        summary="自動再生する音声は3秒以内に収める。自動再生が3秒以上続く場合はユーザーが止められるようする。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="1.4.3"
        requirement="コントラスト(最低限レベル)の達成基準"
        summary="テキストのコントラスト比を4.5:1以上にする。大きなテキスト（22ポイント(29px)以上、太字かつ18ポイント(24px)以上）の場合は、コントラスト比を3:1以上にする。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="1.4.4"
        requirement="テキストのサイズ変更の達成基準"
        summary="ブラウザの機能だけを用いて文字を200%まで拡大でき、文字が重なったり画面から見切れたりしない。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="1.4.5"
        requirement="文字画像の達成基準"
        summary="装飾目的で、テキストを画像で作っていない。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
    </div>
  );
}
