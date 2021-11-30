# Chapter8

## TypeScriptの基本

### 基本的な型の種類

**基本的な型**

　型は指定したい変数のあとに`:(コロン)`型の種類というように記述する。

`

`書式: string(文字列)型`

```react
// : stringで指定
let str: string = "A";
str = "10"; // OK
str = 10; // NG
```

　文字列しか入らないような変数は`string`型を指定する。string型を指定している変数に文字列以外を代入しようとするとエラーになる。

　数値しか入らないような変数は`number`型を指定する。number型を指定している変数に数値以外を代入しようとするとエラーになる。

`書式: number(数値)型`

```react
// : numberで指定
let num: number = 0;
num = 10; // OK
num = "10" // NG
```

　trueかfalseしか入らないような変数は`boolean`型を指定する。boolean型を指定している変数に真偽値以外を代入しようとするとエラーになる。

`書式: Array(配列)型`

```react
// : Array<型> または : 型名[]で指定
// 数値を格納する配列の場合
const arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];
arr1.push(10); // OK
arr2.push(10); // OK
arr1.push("10"); // NG
arr2 = 10; // NG
```

　配列の変数には`Array`型を指定する。指定方法が2種類あるが、どちらで指定しても同じである。`Array<number>`のように`<>`の中に型を指定する方法を**Generics(ジェネリクス)**と呼ぶ。

　数値の配列型を指定している変数に数値以外を追加しようとしたりしてもエラーとなる。

`書式: null型`

```react
// : null指定
let null1: null = null:
null1 = null: // OK
null1 = 10; // NG
```



`書式: undefined型`

```react
// : undefinedで指定
let undefined1: undefined = undefined;
```



`書式: any型`

```react
// : any型で指定
let any1: any;
```



**関数の型指定**

 関数の型は「引数の型」と「返却値の型」をそれぞれ指定できる。カッコの中に引数、カッコの外に返却値の型を指定する。

`書式: 関数の型、void型`

```react
// : voidで指定
// 関数の型は(引数: 引数の型名): 返却値の型名 => {}
const funcA = (num: number): void => {
  console.log(num);
};
funcA(10); // OK
funcA('10'); // NG
```

　上記の例では引数にnumber型が指定されているので数値以外を関数に渡そうとするとエラーになる。

　また`void`型というのは==関数が何も返却しない==ことを意味する。TypeScriptは**型推論**があるため関数内で何も指定していなければ自動的にvoid型になるが、上記のように明示的にvoid型を指定しておくと関数内でreturn文を記述するとエラーになる。



`書式: オブジェクトの型`

```react
// : { : 型名, : 型名 ...}で指定
const obj: { str: string, num: number } = {
  str: "A",
  num: 10,
};
obj.str = "B"; // OK
obj.num = 20; // OK
obj.str = 10; // NG
obj.num = null; // NG
```

　オブジェクトに対してはオブジェクトの各プロパティ毎に型を指定することができる。指定された型以外の変数をプロパティに設定しようとするとエラーになる。



### 複合的な型

`書式: intersection(交差)型`

```react
// 型 & 型で指定
const obj: { str: string } & { num: number } = {
  str: "A",
  num: 10,
};
obj.str = "20"; // OK
obj.num = "10"; // NG
```

　intersectionは複数の型を合体して新たな型定義を作成できる。&で複数の型を指定することで使用する。下記のように同じ型定義のプロパティ(str: string)が存在する場合もマージされて問題なく機能する。

`例: 同じ型定義のプロパティ(str: string)が存在する場合`

```react
type TypeA = {
  str: string;
  num: number;
}
type TypeB = {
  str: string;
  bool: boolean;
}
// TypeAとTypeBから新しいTypeCを作成
const obj: TypeC = {
  str: "A",
  num: 10,
  bool: false,
};
```

　`type`構文とはTypeScriptで型を定義するための構文である。型定義を変数化して使い回すことで毎回複雑な型を書く必要がなくなり、型情報を一元管理できるため開発効率が上昇する。Intersectionを使用するとことで上記のように２つの型定義から新たな型を作成し、変数に設定することができる。

`書式: union(合併, 共用体)型`

```react
// 型 | 型で指定
let val1: string | number = "";
val1 = "A"; // OK
val1 = 10; // OK
val1 = []; // OK
```



### Generics(ジェネリクス)

　ジェネリクスは型の定義を使用時に動的に変更できるという機能を提供する。

`例: 型の定義例`

```react
type CustomType<T> = {
  val: T;
}
```

　`<T>`の部分がジェネリクス特有の書き方である。型の後に`<T>`のように型の変数のようなものを定義しておくことで`val: T`のように動的にプロパティvalの型を扱うことができる。ここで`T`というのはなんでもよく、大文字１文字で表されるのが一般的である。

　上記の`CustomType`を使用する際は以下のように使用する。

`書式: CustomTypeの使用方法`

```react
const strObj: CustomType<string> = { val: "A" };
```

　使用する際は`<>`の中に任意の型名を指定する。このようにすることでプロパティvalはstring型となるのでstring以外の値は受け付けなくなる。

　ジェネリクスは使用する側が任意に型を指定して自由に使うことができる性質上、ライブラリの型定義などで良く用いられる。

　reactでもuseStateを定義するStateに型をつける時は以下のようにジェネリクスを使うことになる。

`例: useState定義時におけるジェネリクスの利用`

```react
const [str, setStr] = useState<string>("");
```

　上記のstrはstring型として定義されるので、例えば数値で更新しようとするとエラーとなる。

