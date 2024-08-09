// typesは後ほど定義
import { ApiContext, User } from 'types'
// 先ほど定義したsrc/utils/index.tsから読み込み
import { fetcher } from '../../utils'

export type SigninParams = {
  /**
   * ユーザー名
   * サンプルユーザーのユーザー名は "user"
   */
  username: string
  /**
   * パスワード
   * サンプルユーザーのパスワードは "password"
   */
  password: string
}

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */

//サインイン関数
const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(

    //末尾のスラッシュを削除し、/auth/signin を付け加え
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST', //HTTPメソッド、POSTでサインインをリクエスト
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin