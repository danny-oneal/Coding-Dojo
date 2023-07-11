using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using SessionWorkshop.Models;

namespace SessionWorkshop.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("process")]
        public IActionResult Process(string name)
        {
            if (String.IsNullOrEmpty(name))
            {
                HttpContext.Session.SetString("Name", "Anonymous");
            }
            else
            {
                HttpContext.Session.SetString("Name", name);
            }
            if (HttpContext.Session.GetInt32("Operand") == null)
            {
                HttpContext.Session.SetInt32("Operand", 22);
            }
            return RedirectToAction("dashboard");
        }

        [HttpGet("mutate/{operand}")]
        public IActionResult MutateOperand(string operand)
        {
            if (HttpContext.Session.GetInt32("Operand") != null)
            {
                switch (operand)
                {
                    case "add-one":
                        HttpContext.Session.SetInt32("Operand", (int)HttpContext.Session.GetInt32("Operand") + 1);
                        break;
                    case "minus-one":
                        HttpContext.Session.SetInt32("Operand", (int)HttpContext.Session.GetInt32("Operand") - 1);
                        break;
                    case "times-two":
                        HttpContext.Session.SetInt32("Operand", (int)HttpContext.Session.GetInt32("Operand") * 2);
                        break;
                    case "random":
                        HttpContext.Session.SetInt32("Operand", (int)HttpContext.Session.GetInt32("Operand") + new Random().Next(1, 11));
                        break;
                }
            }

            return RedirectToAction("dashboard");
        }

        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            if (String.IsNullOrEmpty(HttpContext.Session.GetString("Name")))
            {
                HttpContext.Session.SetString("Name", "Anonymous");
            }
            if (HttpContext.Session.GetInt32("Operand") == null)
            {
                HttpContext.Session.SetInt32("Operand", 22);
            }
            return View();
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("");
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
    }
}