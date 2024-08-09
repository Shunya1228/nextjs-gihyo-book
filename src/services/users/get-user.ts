import type { ApiContext, User } from 'types'
import { fetcher } from '../../utils'

export type GetUserParams = {
  /**
   * ユーザーID
   */
  id: number
}

/**
 * ユーザーAPI（個別取得）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ユーザー
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /**
  // ユーザーAPI
  // サンプルレスポンス
  {
    "id": "1",
    "username": "taketo",
    "displayName": "Taketo Yoshida",
    "email": "taketo@example.com",
    "profileImageUrl": "/users/1.png",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  }
   */
  return await fetcher(

    //ベースURL (apiRootUrl) とユーザーID (id) を結合して、特定のユーザーを取得するためのエンドポイントを生成
    //replace(/\/$/g, '') は、ベースURLの末尾にあるスラッシュを取り除く
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getUser