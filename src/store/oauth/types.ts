export type OauthState = {
  code: string,
  token: string,
  blizzardVerifiedBtag: string,
};

export type BlizzardToken = {
  access_token: string,
  token_type: string,
  expires_in: number
}