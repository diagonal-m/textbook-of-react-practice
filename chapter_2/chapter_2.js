// osascript -l JavaScript chapter_2.js

// varによる変数の宣言
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var関数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// letによる変数の宣言
let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

// constで定義した変数の上書き
const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
//val3 = "const変数を上書き"

// オブジェクトを定義
const obj1 = {
  name: "satoichi",
  age: 25
};
console.log(obj1);

// プロパティ値を変更
obj1.name = "SATOICHI";
console.log(obj1);

// プロパティを追加
obj1.address = "Tokyo";
console.log(obj1);

// 配列を定義
const arr1 = ["dog", "cat"]
console.log(arr1)

// 1つ目の値を変更
arr1[0] = "bird";
console.log(arr1);

// 値を追加
arr1.push("monkey");
console.log(arr1);

const name = "satoichi";
const age = 25;
const message = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message)

// 従来の関数を定義
// function func1(value) {
//   return value;
// }
// 実行した結果を出力
// console.log(func1("func1です"));

// 関数を定義して変数に格納
const func1 = function (value) {
  return value;
};
// 実行した結果を出力
console.log(func1("func1です"))

// アロー関数を定義
// const func2 = (value) => {
//   return value;
// };

// 実行した結果を出力
// console.log(func2("func2です"));

// アロー関数を定義(引数が1つなのでカッコを省略)
const func2 = value => {
  return value;
};
// 実行した結果を出力
console.log(func2("func2です"));

// 処理を単一行で返すので{}を省略
const func3 = (num1, num2) => num1 + num2;
// 実行した結果を出力
console.log(func3(10, 20));

// ()を用いて1行としてまとめる
const func4 = (val1, val2) => (
  {
    name: val1,
    age: val2
  }
)
// 実行した結果を出力
console.log(func4("satoichi", 25));

// デフォルト値の設定
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);

sayHello();
sayHello("satoichi");

// nameを削除
const myProfile = {
  age: 24,
}
// 存在しないname
const { name2 } = myProfile;

const message2 = `こんにちは!${name2}さん!`

console.log(message2);

const myProfile2 = {
  age: 24
}
const { name3 = "ゲスト" } =　myProfile2;
const message3 = `こんにちは!${name3}さん!`
console.log(message3)

const arr2 = [1, 2];
console.log(arr2);
console.log(...arr2);

const summaryFunc = (num1, num2) => console.log(num1 + num2);

// 普通に配列の値を渡す場合
summaryFunc(arr2[0], arr2[1]);

// スプレッド構文を用いた方法
summaryFunc(...arr2)

const arr3 = [1, 2, 3, 4, 5];

// 分割代入時に残りをまとめる
const [num1, num2, ...arr4] = arr3;

console.log(num1);
console.log(num2);
console.log(arr4);

const nameArr = ["satoichi", "sato", "toichi"];
// for文を使って配列処理
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});

console.log(nameArr2)