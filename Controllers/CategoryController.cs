using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QuizzApp.Models;
using QuizzApp.Services.IRepositories;
using QuizzApp.Services.Repositories;

namespace QuizzApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        ICategoryRepository categoryRepository = new CategoryRepository();
        ILogger<CategoryController> logger;

        public CategoryController (ILogger<CategoryController> _logger)
        {
            this.logger = _logger;
        }

        #region Get Requests

        [HttpGet]
        [Route("GetAllCategories")]

        public List<Category> GetAllCategories()
        {
            return categoryRepository.GetAllCategories();

        }

        [HttpGet]
        [Route("GetCategoryById")]

        public Category GetCategoryById(int categoryId)
        {
            return categoryRepository.GetCategoryById(categoryId);

        }



        #endregion

        #region Post Requests

        [HttpPost]
        [Route("CreateCategory")]

        public ActionResult CreateCategory(int subjectId, string category, string description, int userId)
        {
            return Ok(categoryRepository.InsertCategory(subjectId,category, description, userId));
        }

        [HttpPost]
        [Route("UpdateCategory")]

        public ActionResult UpdateCategory(int categoryId, string category, string description, int userId)
        {
            return Ok(categoryRepository.UpdateCategory(categoryId, category, description, userId));
        }


        [HttpPost]
        [Route("DeactivateCategory")]

        public ActionResult DeactivateCategory(int categoryId, int userId)
        {
            return Ok(categoryRepository.DeactivateCategory(categoryId, userId));
        }

        #endregion
    }
}
