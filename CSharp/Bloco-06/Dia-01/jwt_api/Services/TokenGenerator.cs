using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using jwt_api.Constants;

namespace jwt_api.Services;

public class TokenGenerator
{
    public string Generate()
    {
        var tokenHandler = new JwtSecurityTokenHandler();

        var tokenDescription = new SecurityTokenDescriptor() {
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(Encoding.ASCII.GetBytes(TokenConstants.Secret)),
                SecurityAlgorithms.HmacSha256Signature
            ),
            Expires = DateTime.Now.AddDays(1)
        };

        var token = tokenHandler.CreateToken(tokenDescription);

        return tokenHandler.WriteToken(token);
    }
}
