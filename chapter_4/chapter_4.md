# Chapter4

## React開発の始め方

### Create React App

　Reactプロジェクトを開始する時の最も一般的な方法である。Reactの開発元であるFaceBook社が提供しているもので、コマンド1つでReactプロジェクトを開始することができる。

`Reactプロジェクトを作成するコマンド`

```bash
$ npx create-react-app [プロジェクト名]
```

`my-appという名前でReactプロジェクトを作成する場合`

```bash
$ npx create-react-app my-app
```

　実行したフォルダ内にmy-appという名前のフォルダができるのでそこに移動し、スタートコマンドを実行することで、ローカル環境でReactを立ち上げることができる。

`ローカル環境でコマンドを立ち上げる`

```bash
$ cd my-app
$ npm start
```

上記コマンドを実行後、ブラウザでhttp://localhost:3000/にアクセスする。



## Props

### Propsとは

　Propsはコンポーネントに渡す引数のようなもので、コンポーネントは受け取ったPropsに応じて表示するスタイルや内容を変化させる。

　例えばある文字を表示するコンポーネントがあるとして「通常時は黒文字、エラー時は赤文字」のような仕様の場合に黒文字用のコンポーネントと赤文字用のコンポーネントをわざわざ作るようなことをするとコンポーネントの数が膨大になり、コンポーネントの再利用がうまくできない状態になる。



### children

 Propsにはこれまでタグ内で任意の名称を設定していた。それ以外に特別なPropsとして**children**というものが存在する。コンポーネントも通常のHTMLタグと同様以下のように任意の要素を囲って仕様することができる。

　この囲まれた部分がchildrenとしてpropsに設定される。

`例: childrenの設定`

```javascript
// childrenが未設定
<ColoredMessage />
  
// childrenとしてsatoichiを設定
<ColoredMessage>satoichi</ColoredMessage>
```

　これでテキストメッセージについてはchildrenを使用して渡すことができるようになった。childrenは文字だけではなく、タグで囲んだ要素も渡すことができる。



## State(useState)

　React開発では画面に表示するデータや、可変の状態を全てStateとして管理していく。



### Stateとは

　Stateは、コンポーネントの状態を表す値である。

　Webアプリを作る場合、様々な状態を画面は持っている。画面の状態の例としては以下のものがある。

- エラーがあるか
- モーダルウィンドウを開いているか
- ボタンを押せるか
- テキストボックスに何を入力したか

このような「状態」は全てStateとして管理し、イベント実行時等に更新処理を行うことで動的アプリケーションを実現していく。



### useState

　現在主流となっている関数コンポーネントではReact Hooksと総称される機能群の中の`useState`という関数を用いてStateを扱っている。`useState`はReactの中に用意されているため、使用する場合は以下のようにimportする必要がある。

`書式: useStateのimport`

```react
import { useState } from "react";
```

　`useState`関数の返却値は配列の形で==1つ目にState変数、2つ目にそのStateを更新するための関数==が設定される。

`書式: useStateの使用例`

```javascript
const [num, setNum] = useState();
```

　この場合,`num`が状態を持った変数、`setNum`がそれを更新する関数となる。そして`useState`は関数なので使用する時は`()`をつけて関数を実行する。

　変数名は自由につけることができるが暗黙のルールとして上記のように変数名が`num`であれば更新関数名は`setNum`のようにする。

　上記の場合はnumの初期値は`undefined`となるが、State変数に初期値を設定したいケースもある。その場合は`useState`関数を実行する際に引数を指定する。



`書式: Stateの初期値を設定方法`

```react
const [num, setNum] = useState(0);
```

　このように値を指定することでStateの初期値を制御できる。



## 再レンダリングと副作用(useEffect)

### 再レンダリング

　ボタンを押してStateをカウントアップした時、画面をリロードしていないのに、数値が変わって画面の表示が変更されている。これは==コンポーネントが再レンダリング==されているためである。

　Stateが更新された時に関数コンポーネントは再び頭から処理が実行され、またStateが更新されたらまた頭から・・・とグルグル回りながら差分があるDOMを検知し、変更を反映して画面を表示している。

　この「変更を検知してコンポーネントを再処理」することを**再レンダリング**という。



### 副作用とuseEffect

　useEffectはコンポーネントの副作用を制御する機能である。useStateと同様にReactからimportする。

`書式: useEffectの初期値の設定方法`

```javascript
import { useEffect } from "react";
```

そして以下の構文で使用する。

`書式: useEffectの宣言`

```react
useEffect(実行する関数, [依存する値]);
```

　useEffectの役割は==「ある値が変わった時に限り、ある処理を実行する」==機能になる。

　第1引数にはアロー関数で処理を記述し、第2引数は必ず配列で指定する。複数指定する場合は`[num, num2]`のように書く。

　`useEffect`は依存配列に指定している値が変わった時に加え、コンポーネント時(一番最初)にも必ず実行される。

　そのため、useEffectの第2引数に`[]`を設定すると、「コンポーネントを表示した初回のみ実行するような処理」を記述できる。これは画面を表示して初期データを取得する時などによく使用される。

　コンポーネントは==再レンダリングを繰り返している==。Stateの数が多くなってくると再レンダリングの回数も増えてきて、「再レンダリングの度にこの処理を実行するのはコスト(時間)が無駄にかかるからこの値が変わった時だけにしたい」という場面があるためである。



## exportの種類

`書式: export側(normal export)`

```react
export const SomeComponent = () => {};
```

`書式: import側(normal export)`

```react
import { SomeComponent } from "./SomeComponent";
```

　このnormal export以外にも`default export`というものも存在する。`default export`の場合は以下に使用する。

`書式: export側(default export)`

```react
const SomeComponent = () => {};
export default SomeComponent;
```



`書式: import側(default export)`

```react
import SomeComponent from "./SomeComponent";
```

　export側は`export default ~`という形で指定し、import側は`{}`は必要なく、任意の名前をつけてimportできるようになる。