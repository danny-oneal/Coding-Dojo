using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using ProductsCategories.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

using ProductsCategories.Lib;

namespace ProductsCategories.Controllers
{
    [Route("categories")]
    public class CategoryController : Controller
    {
        private DBRepository db;
        private readonly ILogger<CategoryController> _logger;

        public CategoryController(ILogger<CategoryController> logger, DBRepository context)
        {
            _logger = logger;
            db = context;
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            List<Category> categories = db.Categories.ToList();
            ViewBag.Categories = categories;
            return View();
        }

        [HttpPost("create")]
        public IActionResult Create(Category category)
        {
            if (ModelState.IsValid)
            {
                db.Add(category);
                db.SaveChanges();
                return RedirectToAction("New");
            }

            List<Category> categories = db.Categories.ToList();
            ViewBag.Categories = categories;
            return View("New");
        }

        [HttpGet("{id}")]
        public IActionResult View(int id)
        {
            Category category = db.Categories.Include(c => c.Products).ThenInclude(p => p.Product).FirstOrDefault(c => c.CategoryId == id);
            List<Product> products = db.Products.ToList();
            List<Product> eligibleProductsToAdd = products.Where(p => !category.Products.Any(pc => pc.ProductId == p.ProductId)).ToList();
            ViewBag.Products = eligibleProductsToAdd;
            return View(category);
        }

        [HttpPost("{categoryId}/addProduct")]
        public IActionResult AddProduct(int categoryId, int productId)
        {
            ProductCategory productCategory = new ProductCategory
            {
                ProductId = productId,
                CategoryId = categoryId
            };

            db.ProductCategories.Add(productCategory);
            db.SaveChanges();

            return RedirectToAction("View", new { id = categoryId });
        }

        [HttpPost("{categoryId}/removeProduct")]
        public IActionResult RemoveProduct(int productId, int categoryId)
        {
            ProductCategory productCategory = db.ProductCategories.FirstOrDefault(pc => pc.ProductId == productId && pc.CategoryId == categoryId);

            db.ProductCategories.Remove(productCategory);
            db.SaveChanges();

            return RedirectToAction("View", new { id = categoryId });
        }
    }
}