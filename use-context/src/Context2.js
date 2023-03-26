/**
 * Context2 - useContext を使う複数ファイルからなるサンプル
 * 
 * プロバイダーで定義したテキストメッセージを子孫コンポーネントで読み出す
 * 
 *   contexts/MyContext2.js - コンテキストとプロバイダーの定義
 *   components/First2.js   - 1番目の中間コンポーネント
 *   components/Second2.js  - 2番目の中間コンポーネント
 *   components/Third2.js   - コンシューマーコンポーネント
 */
import MyProvider2 from "./contexts/MyContext2";
import First2 from "./components/First2";

// プロバイダーでラップ
const Context2 = () => {
    return (
        <MyProvider2>
            <First2 />
        </MyProvider2>
    );
};

export default Context2;