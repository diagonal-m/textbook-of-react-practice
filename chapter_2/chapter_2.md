# Chapter2

## const、letでの変数宣言

### varでの変数宣言の問題点

　従来のJavaScriptでは変数の宣言にvarを用いていた。

`書式: varによる変数の宣言`

```javascript
var val1 = "var変数";
```

　ただ、このvarでの変数宣言にはいくつか問題点があり、モダンJavaScript開発では使用されることはほとんどなくなった。その問題点というのは**上書き**可能であることや**再宣言可能**であることである。

`例: 変数の上書き・再宣言`

```javascript
// varによる変数の宣言
var val1 = "var変数";
console.log(val1);

// var関数は上書き可能
val1 = "var関数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);
```



#### 上書き可能

　一度定義した変数に別の値を代入することができること。上書きしたい場合も多々あるが、プログラミングを書いていると上書きされたくないケースも多いので無条件に上書きされてしまうと不便。



#### 再宣言可能

　全く同じ変数名を複数箇所で変数定義できること。プログラムの実行順序によってどちらの変数が使用されるか読み解くのが煩雑なので再宣言は基本的にできないほうが望ましい。



 varでの変数宣言のみではプロジェクトの規模が大きくなると意図しない時に変数を上書いてしまったり、再宣言をしてしまったりという問題があり、ES2015では新たな変数宣言の方法として`const`と`let`が追加された。



### letでの変数宣言

　letで再宣言をすることは不可能です。ただしletは変数を上書きすることは可能尾である。以下はletで宣言した変数の上書きをする例である。

`例: letによる変数の上書き例`

```javascript
// letによる変数の宣言
let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "let変数を上書き";
console.log(val2)
```

`例: 再宣言の実行`

```javascript
let var2 = "let変数";
console.log(val2);

// letは再宣言不可能
let val2 = "let変数を再宣言" // エラー
```

再宣言をしようとするとエラーとなる。



### constでの変数宣言

　constは再宣言も上書きも不可能という最も厳密な変数宣言となる。

`例: constで定義した変数の上書き`

```javascript
// constで定義した変数の上書き
const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
val3 = "const変数を上書き"
```

上書きをしようとするとエラーになる。

　このようにconstでの変数宣言は上書きを事前に検知し教えてくれるため、間違えて上書きしてしまったという事態を避けることができる。



### constで定義した変数を変更できる例

　文字列や数値等のプリミティブ型と呼ばれる種類のデータはconstで定義した場合、上書き不可能になる。しかし、オブジェクトや配列等のオブジェクト型と呼ばれるものに関してはconstで定義していても中の値を変更することができる。



`例: オブジェクトのプロパティ値を変更、追加する例`

```javascript
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
```

このようにconstで定義していてもオブジェクトの中身は自由に変更することができる。以下はconstで定義した配列の値を変更、追加する例である。



`例: 配列の値を変更、追加する例`

```javascript
// 配列を定義
const arr1 = ["dog", "cat"]
console.log(arr1)

// 1つ目の値を変更
arr1[0] = "bird";
console.log(arr1);

// 値を追加
arr1.push("monkey");
console.log(arr1);
```

このように配列の場合も同様にconstで定義していても値は自由に変更できる。



### React開発で使用する変数宣言

　React開発ではconstで変数宣言をすることがほとんどになる。React開発の中で動的に変わるような値はStateという別の概念で値を管理していくことになる。



## テンプレート文字列

　テンプレート文字列は、文字列の中で変数を展開するための新しい記法である。

`例: テンプレート文字列の利用`

```javascript
const name = "satoichi";
const age = 25;
const message = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message)
```



## アロー関数`() => {}`

　アロー関数はES2015で追加された新しい関数の記法である。従来よりもシンプルに関数を記述することができる。



### 従来の関数

　以下は「引数として受けとった値をそのまま返却する関数を実行しコンソールに結果を出力する」という例。

`例: 従来の関数`

```javascript
// 従来の関数を定義
function func1(value) {
  return value;
}
// 実行した結果を出力
console.log(func1("func1です"));
```

　このように従来はJavaScriptで関数を定義する場合、`function`という記述の後に関数名や引数、処理内容を記述していた。また以下のように宣言した関すうを一度変数に格納してから実行することもできる。

`例: 従来の関数`

```javascript
// 関数を定義して変数に格納
const func1 = function (value) {
  return value;
};
// 実行した結果を出力
console.log(func1("func1です"))
```



### アロー関数

　新たな関数の定義方法であるアロー関数では`function`は使用せず以下のように関数を宣言できる。

`例: アロー関数`

```javascript
// アロー関数を定義
const func2 = (value) => {
  return value;
};

// 実行した結果を出力
console.log(func2("func2です"));
```



### アロー関数の書き方の注意点

　アロー関数には特徴的な省略記法がいくつかある。1つ目は==引数が1の場合はカッコを省略できる==という点である。

`例: アロー関数の省略記法`

```javascript
// アロー関数を定義(引数が1つなのでカッコを省略)
const func2 = value => {
  return value;
};
// 実行した結果を出力
console.log(func2("func2です"));
```



2つ目は==処理を単一行で返却する場合は波かっことreturnを省略できる==

`例: returnの省略`

```javascript
// 処理を単一行で返すので{}を省略
const func3 = (num1, num2) => num1 + num2;
// 実行した結果を出力
console.log(func4(10, 20));
```



## デフォルト値

　デフォルト値の設定は、関数の引数やオブジェクトの分割代入時に使用する。



### 引数のデフォルト値

`例: デフォルト値の設定`

```javascript
// デフォルト値の設定
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);

sayHello();
sayHello("satoichi");
```



### オブジェクト分割代入のデフォルト値

　オブジェクトの分割代入時にもデフォルト値を使用することができる。以下のような処理があったりする。

```javascript
// nameを削除
const myProfile = {
  age: 24,
}
// 存在しないname
const { name } = myProfile;

const message = `こんにちは!${name}さん!`
```

 分割代入時にデフォルト値を設定することで以下のように処理を行うことができる。

`例: 分割代入時にデフォルト値を設定`

```javascript
const myProfile = {
  age: 24
}
const { name = "ゲスト" } =　myProfile;
const message = `こんにちは!${name}さん!`
console.log(message3)
```



## スプレッド構文`...`

### 要素の展開

　スプレッド構文は`...`という形でドットを3つ繋げて使用する。配列に対して使用することで内部の要素を順番に展開する。

```javascript
const arr2 = [1, 2];

const summaryFunc = (num1, num2) => console.log(num1 + num2);

// 普通に配列の値を渡す場合
summaryFunc(arr2[0], arr2[1]);

// スプレッド構文を用いた方法
summaryFunc(...arr2)
```



### 要素をまとめる

　スプレッド構文は「要素をまとめる」というニュアンスでも使用することができる。

`例: 要素をまとめる`

```javascript
const arr3 = [1, 2, 3, 4, 5];

// 分割代入時に残りをまとめる
const [num1, num2, ...arry4] = arr3;

console.log(num1);
console.log(num2);
console.log(arr4);
```



## map, filter

### 従来のfor文

　従来配列をループして処理する場合、for文を使用していた。以下は名前が格納された配列をループして出力するサンプルである。

```javascript
const nameArr = ["satoichi", "sato", "toichi"];
// for文を使って配列処理
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}
```

 　配列の要素の数分ループ処理を回して、ループ毎にindexを1ずつ増加させ、配列の要素にindexを用いてアクセスすることで順番に処理する仕組みである。



### `map`関数の使い方

　map関数では配列の順番に処理して処理した結果を配列として受け取ることができる。

`例: 配列.map()`

```javascript
const nameArr = ["satoichi", "sato", "toichi"];
const nameArr2 = nameArr.map();
```

　まずmap関数は配列に対して、`配列.map()`という形で使用していく。

`例: 配列.map()`

```javascript
const nameArr = ["satoichi", "sato", "toichi"];
const nameArr2 = nameArr.map(() => {});
```

`()`の中には関数を書く。上記はアロー関数の雛形をまず記述したところである。関数は任意の名前をつけた引数をとることができ、そこに配列の中の値が入ってくる。そして返却する要素を関数内でreturnする

`例: 配列.map()`

```javascript
const nameArr = ["satoichi", "sato", "toichi"];

const nameArr2 = nameArr.map((name) => {
  return name;
});
```

　上記は順に処理する中で値をそのまま返してるので同じ、配列が設定されているという無意味な処理だが、基本的なmapの使い方である。

`例: map関数を使用`

```javascript
const nameArr = ["satoichi", "sato", "toichi"];

// mapを使って配列処理
nameArr.map((name) => console.log(name));
```

　アロー関数を1行で書いてコンソールへの出力を記述している。for文と比較してもシンプルに書けることがわかる。



### filter関数の使い方

　filter関数はmap関数とほとんど使い方が同じだが、returnの後に条件式を記述して一致されるもののみが返却される関数となる。

　以下は数字が格納された配列から奇数のみを取り出す例である。

`例: filter関数で奇数のみ取り出す`

```javascript
// filter関数で奇数のみ取り出す
const numArr = [1, 2, 3, 4, 5];

// 奇数のみ抽出
const newNumber = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(newNumber);
```

　このようにfilter関数は条件に一致する値のみ配列の中から取り出すことができる。



### indexの扱い

`例: map関数の引数で要素順に取り出す`

```javascript
const nameArr = ["satoichi", "sato", "toichi"];
// 第2引数にindexが入ってくる
nameArr.map((name, index) => console.log(`${index+1}番目は${name}です`));
```

　このようにmap内の関数は第二引数を書くことができ、書いた場合はそこに0から順番にindexの情報が格納される。「何番目か」という概念が必要な場合はmapやfilterで第二引数を活用する。



## 三項演算子

`三項演算子`

```
ある条件 ? 条件がtrueの時の処理 : 条件がfalseの時の処理
```

```javascript
// 三項演算子を使用した例
const val_1 = 1 > 0 ? "true！" : "false！";
console.log(val_1);
```



「入力値が数値の場合は3桁区切りの表記に変換、数値以外の場合はメッセージを表示する」という処理が以下のように書ける。

`例: 入力値に対するメッセージを出す`

```javascript
const printFormattedNum = (num) => {
  const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
    console.log(formattedNum);
};

printFormattedNum(1300);
printFormattedNum("1300");
```

　`typeof ~`は変数等の型を判定してくれるもので、`toLocalString()`は数値を3桁カンマ区切りに変換してくれる。

```javascript
// 2つの引数の合計が100を超えているか判定する関数
const checkSumOver100 = (num1, num2) => {
  return num1 + num2 > 100 ? "over100" : "under100";
};
console.log(checkSumOver100(50, 40));
console.log(checkSumOver100(50, 70));
```

