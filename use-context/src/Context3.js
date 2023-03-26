/**
 * Context3 - useContext を使うデータの参照/操作を含むサンプル
 * 
 * プロバイダーで定義したカウントデータ及びインクリメントAPIを子孫コンポーネントで参照/操作する
 * 
 *   contexts/MyContext3.js         - コンテキストとプロバイダーの定義
 *   components/First3.js  - 1番目の中間コンポーネント
 *   components/Second3.js - 2番目の中間コンポーネント
 *   components/Third3.js  - コンシューマーコンポーネント
 */
import MyProvider3 from "./contexts/MyContext3";
import First3 from "./components/First3";

// プロバイダーでラップ
const Context3 = () => {
    return (
        <MyProvider3>
            <First3 />
        </MyProvider3>
    );
};

export default Context3;