using jwt_api.Models;
using jwt_api.Repository;
using jwt_api.Services;
using jwt_api.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace jwt_api.Controllers;

public class AuthController : Controller
{
    [HttpPost]
    [Route("authenticate")]
    [AllowAnonymous]
    public ActionResult<UserViewModel> Authenticate([FromBody] User user)
    {
        UserViewModel userViewModel = new UserViewModel();
        try
        {
            userViewModel.User = new UserRepository().Get(user);
            if (userViewModel.User == null)
            {
                return NotFound("User not found");
            }
            userViewModel.Token = new TokenGenerator().Generate();
            // userViewModel.User.Password = string.Empty;

        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
        return userViewModel;
    }
}
