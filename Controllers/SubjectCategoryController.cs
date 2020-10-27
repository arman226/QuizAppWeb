using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QuizzApp.Models.ViewModels;
using QuizzApp.Services.IRepositories;
using QuizzApp.Services.Repositories;

namespace QuizzApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectCategoryController : ControllerBase
    {
        ISubjectCategoryRepository subjectCategoryRepository = new SubjectCategoryRepository();
        ILogger<SubjectCategoryController> logger;

        public SubjectCategoryController(ILogger<SubjectCategoryController> subjectControllerLogger)
        {
            this.logger = subjectControllerLogger;
        }

        [HttpGet]
        [Route("GetSubjectCategoryBySubjectId")]

        public SubjectCategory GetSubjectCategoryBySubjectId(int subjectId)
        {
            return subjectCategoryRepository.getSubjectCategoryById(subjectId);

        }
    }
}


