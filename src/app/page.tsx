import Link from "next/link";

const data = [
  { principle: "知覚可能", guideline: "代替テキスト", numbering: "1.1.1", link: "/1.1", criteria: "非テキストコンテンツの達成基準", level: "A", description: "ロゴ・イラスト・写真など画像に、その画像が指し示している情報が代替テキストとして記載されている。" },
  { principle: "知覚可能", guideline: "時間依存メディア", numbering: "1.2.1", link: "/1.2", criteria: "音声だけ及び映像だけ（収録済み）の達成基準", level: "A", description: "音声または映像コンテンツに、音声または映像以外の代替手段で理解できるコンテンツがある。たとえば、収録済みの音声のみの場合はテキストによる書き起こしが提供されている。収録済みの映像の場合は、テキストによる書き起こしか、映像の内容を説明する音声が提供されている。" },
  { principle: "知覚可能", guideline: "時間依存メディア", numbering: "1.2.2", link: "/1.2", criteria: "キャプション（収録済み）の達成基準", level: "A", description: "収録済みの音声コンテンツに字幕があり、聴覚障害のある人も内容を理解できる。" },
  { principle: "知覚可能", guideline: "時間依存メディア", numbering: "1.2.3", link: "/1.2", criteria: "音声解説又はメディアに対する代替コンテンツ(収録済み)の達成基準", level: "A", description: "収録済みの映像に、視覚情報を補足する音声解説やテキストが提供されている。" },
  { principle: "知覚可能", guideline: "時間依存メディア", numbering: "1.2.4", link: "/1.2", criteria: "キャプション（ライブ）の達成基準", level: "AA", description: "リアルタイムに配信する映像や音声にキャプションが提供されている。" },
  { principle: "知覚可能", guideline: "時間依存メディア", numbering: "1.2.5", link: "/1.2", criteria: "音声解説(収録済み)の達成基準", level: "AA", description: "収録済みの映像に音声解説が含まれるか、音声解説つきバージョンが提供されている。" },
  { principle: "知覚可能", guideline: "適応可能", numbering: "1.3.1", link: "/1.3", criteria: "情報及び関係性の達成基準", level: "A", description: "ページの情報が適切にHTMLで構造化されている。" },
  { principle: "知覚可能", guideline: "適応可能", numbering: "1.3.2", link: "/1.3", criteria: "意味のある順序の達成基準", level: "A", description: "コンテンツが意味の通る順序で並べられている。" },
  { principle: "知覚可能", guideline: "適応可能", numbering: "1.3.3", link: "/1.3", criteria: "感覚的な特徴の達成基準", level: "A", description: "「右の写真」など、感覚に依存した表現をしない。" },
  { principle: "知覚可能", guideline: "判別可能", numbering: "1.4.1", link: "/1.4", criteria: "色の使用の達成基準", level: "A", description: "色だけで情報を伝えない。" },
  { principle: "知覚可能", guideline: "判別可能", numbering: "1.4.2", link: "/1.4", criteria: "音声の制御の達成基準", level: "A", description: "音声の自動再生を3秒以内に制御できる。" },
  { principle: "知覚可能", guideline: "判別可能", numbering: "1.4.3", link: "/1.4", criteria: "コントラスト(最低限レベル)の達成基準", level: "AA", description: "テキストのコントラスト比を4.5:1以上にする。" },
  { principle: "知覚可能", guideline: "判別可能", numbering: "1.4.4", link: "/1.4", criteria: "テキストのサイズ変更の達成基準", level: "AA", description: "ブラウザの機能だけを用いて文字を200%まで拡大できる。" },
  { principle: "知覚可能", guideline: "判別可能", numbering: "1.4.5", link: "/1.4", criteria: "文字画像の達成基準", level: "AA", description: "装飾目的で、テキストを画像で作らない。" },
  { principle: "操作可能", guideline: "キーボード操作可能", numbering: "2.1.1", link: "/2.1", criteria: "キーボードの達成基準", level: "A", description: "キーボード操作だけでウェブページを利用できる。" },
  { principle: "操作可能", guideline: "キーボード操作可能", numbering: "2.1.2", link: "/2.1", criteria: "キーボードトラップなしの達成基準", level: "A", description: "フォーカスを閉じ込めない。" },
  { principle: "操作可能", guideline: "十分な時間", numbering: "2.2.1", link: "/2.2", criteria: "タイミング調整可能の達成基準", level: "A", description: "利用者が制限時間を調整または解除できる。" },
  { principle: "操作可能", guideline: "十分な時間", numbering: "2.2.2", link: "/2.2", criteria: "一時停止，停止及び非表示の達成基準", level: "A", description: "自動再生のコンテンツを止められる。" },
  { principle: "操作可能", guideline: "発作の防止", numbering: "2.3.1", link: "/2.3", criteria: "3 回のせん光，又はしきい値以下の達成基準", level: "A", description: "画面の点滅が規定以下である。" },
  { principle: "操作可能", guideline: "ナビゲーション可能", numbering: "2.4.1", link: "/2.4", criteria: "ブロックスキップの達成基準", level: "A", description: "セクション間のスキップリンクを提供する。" },
  { principle: "操作可能", guideline: "ナビゲーション可能", numbering: "2.4.2", link: "/2.4", criteria: "ページタイトルの達成基準", level: "A", description: "ウェブページのタイトルが具体的で内容を把握できるものになっている。" },
  { principle: "操作可能", guideline: "ナビゲーション可能", numbering: "2.4.3", link: "/2.4", criteria: "フォーカス順序の達成基準", level: "A", description: "フォーカスの移動順序が意味の通るものになっている。" },
  { principle: "操作可能", guideline: "ナビゲーション可能", numbering: "2.4.4", link: "/2.4", criteria: "リンクの目的(コンテキスト内)の達成基準", level: "A", description: "リンクのテキストやその文脈からリンク先の目的が明確にわかる。" },
  { principle: "操作可能", guideline: "ナビゲーション可能", numbering: "2.4.5", link: "/2.4", criteria: "複数の手段の達成基準", level: "AA", description: "目的のページにたどり着くために複数のナビゲーション手段を提供する。" },
  { principle: "操作可能", guideline: "ナビゲーション可能", numbering: "2.4.6", link: "/2.4", criteria: "見出し及びラベルの達成基準", level: "AA", description: "見出しやラベルが、内容や目的を適切に説明している。" },
  { principle: "操作可能", guideline: "ナビゲーション可能", numbering: "2.4.7", link: "/2.4", criteria: "フォーカスの可視化の達成基準", level: "AA", description: "フォーカスがどこにあるのか視覚的に分かるようにする。" },
  { principle: "理解可能", guideline: "読みやすさ", numbering: "3.1.1", link: "/3.1", criteria: "ページの言語の達成基準", level: "A", description: "ページの主要な言語がHTMLのlang属性で指定されている。" },
  { principle: "理解可能", guideline: "読みやすさ", numbering: "3.1.2", link: "/3.1", criteria: "一部分の言語の達成基準", level: "AA", description: "ページ内で使用される他の言語も適切に指定されている。" },
  { principle: "理解可能", guideline: "予測可能", numbering: "3.2.1", link: "/3.2", criteria: "フォーカス時の達成基準", level: "A", description: "フォーカスを移動したときに予期しない動作を起こさない。" },
  { principle: "理解可能", guideline: "予測可能", numbering: "3.2.2", link: "/3.2", criteria: "入力時の達成基準", level: "A", description: "入力中に予期しないページ遷移や操作が発生しない。" },
  { principle: "理解可能", guideline: "予測可能", numbering: "3.2.3", link: "/3.2", criteria: "一貫したナビゲーションの達成基準", level: "AA", description: "同じナビゲーションが一貫した順序で提供されている。" },
  { principle: "理解可能", guideline: "予測可能", numbering: "3.2.4", link: "/3.2", criteria: "一貫した識別性の達成基準", level: "AA", description: "同じ機能は一貫して同じ表現になっている。" },
  { principle: "理解可能", guideline: "入力支援", numbering: "3.3.1", link: "/3.3", criteria: "エラーの特定の達成基準", level: "A", description: "エラー発生箇所を明確にし、適切な説明を提供する。" },
  { principle: "理解可能", guideline: "入力支援", numbering: "3.3.2", link: "/3.3", criteria: "ラベル又は説明の達成基準", level: "A", description: "ラベルや説明を提供し、入力内容をわかりやすくする。" },
  { principle: "理解可能", guideline: "入力支援", numbering: "3.3.3", link: "/3.3", criteria: "エラー修正の提案の達成基準", level: "AA", description: "入力エラーが発生した場合に修正方法を提案する。" },
  { principle: "理解可能", guideline: "入力支援", numbering: "3.3.4", link: "/3.3", criteria: "エラー回避(法的，金融及びデータ)の達成基準", level: "AA", description: "法的手続きや重要なデータ送信時にエラー回避手段を提供する。" },
  { principle: "堅牢性", guideline: "互換性", numbering: "4.1.1", link: "/4.1", criteria: "構文解析の達成基準", level: "A", description: "HTMLの文法に沿った正しいマークアップを行う。" },
  { principle: "堅牢性", guideline: "互換性", numbering: "4.1.2", link: "/4.1", criteria: "名前(name)，役割(role)及び値(value)の達成基準", level: "A", description: "UI要素の名前や役割、値を正しく指定する。" },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr>
              {["原則", "ガイドライン", "付番", "達成基準", "適合レベル", "概要"].map((heading) => (
                <th key={heading} className="border border-gray-300 p-2">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{row.principle}</td>
                <td className="border border-gray-300 p-2">{row.guideline}</td>
                <td className="border border-gray-300 p-2">
                  <Link href={row.link}>{row.numbering}</Link>
                </td>
                <td className="border border-gray-300 p-2">{row.criteria}</td>
                <td className="border border-gray-300 p-2">{row.level}</td>
                <td className="border border-gray-300 p-2">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
