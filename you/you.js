//----------------------------------------
//  入力値を画面に出力する処理
//----------------------------------------

// 画面が読み込まれた時
window.addEventListener('load', (event) => {
    // 計算ボタン
    const calculationButton = document.getElementById("calculation_botton");

    // 計算ボタンを押した時の処理
    calculationButton.addEventListener('click', (e) => {
        // 入力した鉄骨の幅を取得
        const steel_width = document.getElementById("steel_width").value;

        // 入力した鉄骨の角度を取得
        const steel_angle = document.getElementById("steel_angle").value;

        // 幅と角度から重さを計算
        const steel_weight = getSteelWeight(steel_width, steel_angle);

        // 重さを画面に出力する
        document.getElementById("steel_weight").innerText = steel_weight
    })
});


//----------------------------------------
//  計算ロジック
//----------------------------------------
/**
 * 幅と角度から重さを返す
 * @param {*} steel_width 
 * @param {*} steel_angle 
 * @returns 
 */
const getSteelWeight = (steel_width, steel_angle) => {
    // 入力値が表の中の情報と一致するか検索
    for (const item of info) {
        // 入力値が表の中の情報と一致する場合は重さを返す
        if (item.steel_width == steel_width && item.steel_angle == steel_angle) {
            return item.steel_weight;
        } else {
            continue;
        }
    }

    return '入力値が正しくない';
}



//----------------------------------------
//  表の情報
//----------------------------------------
/**
 * 表の情報
 */
const info = [
    {
        steel_width: 2,
        steel_angle: 5,
        steel_weight: 55.9
    },
    {
        steel_width: 2,
        steel_angle: 10,
        steel_weight: 67.4
    },
    {
        steel_width: 2,
        steel_angle: 15,
        steel_weight: 90.6
    }
]