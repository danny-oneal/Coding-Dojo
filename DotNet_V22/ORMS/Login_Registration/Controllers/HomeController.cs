using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using LoginRegistration.Models;
using Microsoft.AspNetCore.Identity;

using LoginRegistration.Lib;

namespace LoginRegistration.Controllers
{
    public class HomeController : Controller
    {
        private DBContext db;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, DBContext context)
        {
            _logger = logger;
            db = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }



        [HttpPost("register")]
        public IActionResult Register(User newUser)
        {
            if (ModelState.IsValid)
            {
                if (db.Users.Any(u => u.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email is already in use!");
                    return View("Register");
                }
                else
                {
                    PasswordHasher<User> Hasher = new PasswordHasher<User>();
                    newUser.Password = Hasher.HashPassword(newUser, newUser.Password);

                    db.Add(newUser);
                    db.SaveChanges();
                    HttpContext.Session.SetInt32("uid", newUser.UserId);
                    return RedirectToAction("Success");
                }
            }
            else
            {
                return View("Index");
            }
        }

        [HttpPost("login")]
        public IActionResult Login(LoginUser userSubmission)
        {
            if (ModelState.IsValid)
            {
                User? userInDb = db.Users.FirstOrDefault(u => u.Email == userSubmission.LoginEmail);
                if (userInDb == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("SomeView");
                }
                PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
                // Verify provided password against hash stored in db        
                var result = hasher.VerifyHashedPassword(userSubmission, userInDb.Password, userSubmission.LoginPassword);                                    // Result can be compared to 0 for failure        
                if (result == 0)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("SomeView");
                }
                HttpContext.Session.SetInt32("uid", userInDb.UserId);
                return RedirectToAction("Success");
            }
            else
            {
                return View("Index");
            }
        }

        [AuthCheck]
        [HttpGet("success")]
        public IActionResult Success()
        {
            return View();
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}