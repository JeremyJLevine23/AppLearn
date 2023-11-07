using Microsoft.AspNetCore.Mvc;
using AppLearn.Models;
using AppLearn.ViewModels;

namespace AppLearn.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
