using jwt_api.Models;
using jwt_api.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace jwt_api.Controllers;

[HttpPost]

public ActionResult<UserViewModel> Authenticate([FromBody] User user)
{
    UserViewModel userViewModel = new UserViewModel();
    try
    {

    }
    catch
    {

    }
    return userViewModel;
}