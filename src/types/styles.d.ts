/* eslint-disable @typescript-eslint/ban-types */
/**
 * Responsiveプロパティ
 */
export type ResponsiveProp<T> = {
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}
export type Responsive<T> = T | ResponsiveProp<T>

/**
 * Flex
 */
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start'

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'

//CSSのjustify-contentプロパティやalign-contentプロパティなどで使用できる値を型として定義するためのTypeScriptの型エイリアスを作成
type ContentDistribution =
  | 'space-around' //子要素の間の空白を均等に配置し、最初と最後の子要素の外側にも同じ空白を配置
  | 'space-between' //子要素の間に均等な空白を配置し、最初と最後の子要素はコンテナの端に配置
  | 'space-evenly' //子要素の間の空白と、最初と最後の子要素の外側の空白がすべて均等になるように配置
  | 'stretch' //子要素が可能な限りコンテナ内で伸びるように配置

  //、CSSプロパティで使用できるいくつかのグローバル値を型として定義するためのTypeScriptのユーティリティ型
type CSSPropertyGlobals =
  | '-moz-initial' //Mozilla製品（主にFirefox）で使用される初期化値です。この値はプロパティをブラウザのデフォルト値にリセットします。
  | 'inherit' //プロパティの値が親要素から継承
  | 'initial' //ブラウザのデフォルト値にリセット
  | 'revert' //プロパティをユーザーエージェントスタイルシートまたはユーザー定義のスタイルに戻す
  | 'unset' //inheritかinitialのどちらかに従って値を設定します。具体的には、プロパティが継承可能ならinherit、継承不可能ならinitialとして扱います。

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals // グローバル値（例: 'inherit', 'initial' など）
  | SelfPosition // セルフポジション（例: 'center', 'flex-start' など）
  | 'baseline'  // 基準線に揃える
  | 'normal' // デフォルトの揃え方
  | 'stretch'  // 要素をストレッチしてコンテナに揃える
  // コードの自動補完
  | (string & {})   // 任意のカスタム値（例えば、特定の値を使いたい場合など）

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'baseline'
  | 'normal'
  | (string & {})

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {})

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | (string & {})

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'

export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'

export type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {})

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch'
  | (string & {})

/**
 * Grid
 */
type GridLine = 'auto' | (string & {})

export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  | (string & {})

export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {})

export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | 'column'
  | 'dense'
  | 'row'
  | (string & {})

export type CSSPropertyGridArea = CSSPropertyGlobals | GridLine | (string & {})