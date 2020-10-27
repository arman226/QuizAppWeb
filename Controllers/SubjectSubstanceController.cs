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
    public class SubjectSubstanceController : ControllerBase
    {
        ISubjectSubstanceRepository subjectSubstanceRepository = new SubjectSubstanceRepository();
        ILogger<SubjectSubstanceController> logger;
        public SubjectSubstanceController(ILogger<SubjectSubstanceController> subjectControllerLogger)
        {
            this.logger = subjectControllerLogger;
        }

        [HttpGet]
        [Route("GetAllSubjects")]

        public List<SubjectSubstance> GetAllSubjects()
        {
            return subjectSubstanceRepository.getAllSubjects();
        }
    }
}
