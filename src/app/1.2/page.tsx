import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="1.2.1"
        requirement="音声だけ及び映像だけ（収録済み）の達成基準"
        summary="音声または映像コンテンツに、音声または映像以外の代替手段で理解できるコンテンツがある。たとえば、収録済みの音声のみの場合はテキストによる書き起こしが提供されている。収録済みの映像の場合は、テキストによる書き起こしか、映像の内容を説明する音声が提供されている。"
        badCaseChildren={
          <audio controls>
            <source
              src="https://www.nasa.gov/62231main_vega_launch.mp3"
              type="audio/mpeg"
            />
          </audio>
        }
        goodCaseChildren={
          <div>
            <audio controls>
              <source
                src="https://www.nasa.gov/62231main_vega_launch.mp3"
                type="audio/mpeg"
              />
            </audio>
            <p>
              音声内容:
              この音声は、ベガロケットの打ち上げ時のエンジン音を収録したものです。
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="1.2.2"
        requirement="キャプション（収録済み）の達成基準"
        summary="収録済みの音声コンテンツに字幕があり、聴覚障害のある人も内容を理解できる。"
        badCaseChildren={
          <video controls width="640">
            <source
              src="https://commons.wikimedia.org/wiki/File:Volcano_Lava_Sample.webm"
              type="video/webm"
            />
            お使いのブラウザは動画タグをサポートしていません。
          </video>
        }
        goodCaseChildren={
          <div>
            <video controls width="640">
              <source
                src="https://youtu.be/L8I7KmbgT_c?feature=shared"
                type="video/webm"
              />
              <track
                src="https://www.w3.org/WAI/WCAG21/Techniques/general/G87/example.vtt"
                kind="subtitles"
                srcLang="ja"
                label="日本語字幕"
              />
              お使いのブラウザは動画タグをサポートしていません。
            </video>
          </div>
        }
      />
      <GoodBadCase
        chapter="1.2.3"
        requirement="音声解説又はメディアに対する代替コンテンツ(収録済み)の達成基準"
        summary="収録済みの映像に、音声解説（シーンの移り変わりや登場人物の表情などの視覚的な情報を音声で説明したもの）または、テキストによる書き起こし（視覚的な情報、会話や笑い声なども含む）が提供されている。"
        badCaseChildren={
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8lXdyD2Yzls"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        }
        goodCaseChildren={
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8lXdyD2Yzls?cc_load_policy=1&cc_lang_pref=ja"
              title="YouTube video player with descriptions"
              allowFullScreen
            ></iframe>
            <p>
              この動画では、映像のシーンについて音声解説が追加され、視覚障害者も理解できるようになっています。
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="1.2.4"
        requirement="キャプション（ライブ）の達成基準"
        summary="リアルタイムに配信する映像や音声にキャプションが提供されている。"
        badCaseChildren={
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/live_stream?channel=UCkAGrHCLFmlK3H2kd6isipg"
              title="YouTube live stream"
              allowFullScreen
            ></iframe>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>ライブ配信中: 自動生成されたキャプションが表示されます。</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/live_stream?channel=UCkAGrHCLFmlK3H2kd6isipg&cc_load_policy=1"
              title="YouTube live stream with captions"
              allowFullScreen
            ></iframe>
          </div>
        }
      />
      <GoodBadCase
        chapter="1.2.5"
        requirement="情報及び関係性の達成基準"
        summary="収録済みの映像に、音声解説を含む（利用者がオン・オフできる）音声トラックが付与されているか、映像の音声解説つきバージョンが提供されている。"
        badCaseChildren={
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8lXdyD2Yzls"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        }
        goodCaseChildren={
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8lXdyD2Yzls?cc_load_policy=1&cc_lang_pref=ja"
              title="YouTube video player with descriptions"
              allowFullScreen
            ></iframe>
            <p>音声解説が有効になっているため、視覚障害者にも対応できます。</p>
          </div>
        }
      />
    </div>
  );
}
