using jwt_api.Models;

namespace jwt_api.ViewModels
{
    public class UserViewModel
    {
        public User? User { get; set; }
        public string? Token { get; set; }
    }
}
