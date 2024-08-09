//fetch API を使用して HTTP リクエストを行い、その結果を JSON 形式で返す
//エラーが発生した場合には適切にエラーメッセージをスロー

export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const res = await fetch(resource, init)

  //エラーハンドリング res.ok プロパティはレスポンスが成功した際にtrueになる
  if (!res.ok) {

    //エラーレスポンスを JSON 形式で取得
    const errorRes = await res.json()

    //取得したメッセージを基に新しいエラーオブジェクトを作成する。もし message が存在しない場合には、デフォルトのエラーメッセージを表示
    const error = new Error(
      errorRes.message ?? 'APIリクエスト中にエラーが発生しました',
    )

    throw error
  }

  return res.json()
}