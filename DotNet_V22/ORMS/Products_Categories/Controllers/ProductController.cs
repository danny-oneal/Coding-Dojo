using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using ProductsCategories.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

using ProductsCategories.Lib;

namespace ProductsCategories.Controllers
{
    [Route("products")]
    public class ProductController : Controller
    {
        private DBRepository db;
        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger, DBRepository context)
        {
            _logger = logger;
            db = context;
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            List<Product> products = db.Products.ToList();
            ViewBag.Products = products;
            return View();
        }

        [HttpPost("create")]
        public IActionResult Create(Product product)
        {
            if (ModelState.IsValid)
            {
                db.Add(product);
                db.SaveChanges();
                return RedirectToAction("New");
            }

            List<Product> products = db.Products.ToList();
            ViewBag.Products = products;

            return View("New");
        }

        [HttpGet("{id}")]
        public IActionResult View(int id)
        {
            Product product = db.Products.Include(p => p.Categories).ThenInclude(c => c.Category).FirstOrDefault(p => p.ProductId == id);
            List<Category> categories = db.Categories.ToList();
            List<Category> eligibleCategoriesToAdd = categories.Where(c => !product.Categories.Any(pc => pc.CategoryId == c.CategoryId)).ToList();
            ViewBag.Categories = eligibleCategoriesToAdd;
            return View(product);
        }

        [HttpPost("{productId}/addCategory")]
        public IActionResult AddCategory(int productId, int categoryId)
        {
            ProductCategory productCategory = new ProductCategory
            {
                ProductId = productId,
                CategoryId = categoryId
            };

            db.ProductCategories.Add(productCategory);
            db.SaveChanges();

            return RedirectToAction("View", new { id = productId });
        }

        [HttpPost("{productId}/removeCategory")]
        public IActionResult RemoveCategory(int productId, int categoryId)
        {
            ProductCategory productCategory = db.ProductCategories.FirstOrDefault(pc => pc.ProductId == productId && pc.CategoryId == categoryId);

            db.ProductCategories.Remove(productCategory);
            db.SaveChanges();

            return RedirectToAction("View", new { id = productId });
        }
    }
}