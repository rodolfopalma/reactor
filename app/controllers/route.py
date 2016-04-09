from requests_oauthlib import OAuth2Session
from requests_oauthlib.compliance_fixes import facebook_compliance_fix

client_id = '988575744557213'
client_secret = '301092d0952e4b744b7c1e67d542a967'

authorization_base_url = 'https://www.facebook.com/dialog/oauth'
toke_url = 'https://graph.facebook.com/oauth/access_token'
redirect_uri = 'https://8a0c4525.ngrok.io'

facebook = OAuth2Session(client_id, redirect_uri=redirect_uri)
facebook = facebook_compliance_fix(facebook)

authorization_url, state = facebook.authorization_url(authorization_base_url)
print ('Please go here and authorize,', authorization_url)

redirect_response = input('Paste the full redirect URL here:')

facebook.fetch_token(token_url, client_secret=client_secret,
                     authorization_response=redirect_response)

r = facebook.get('https://graph.facebook.com/me?')
print(r.content)
