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
using ServiceStack;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace QuizzApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectController : ControllerBase
    {
        ISubjectRepository subjectRepository = new SubjectRepository();
        ILogger<SubjectController> logger;

        public SubjectController(ILogger<SubjectController> subjectControllerLogger) {
            this.logger = subjectControllerLogger;
        }

        #region Get Requests
        [HttpGet]
        [Route("GetAllSubjects")]

        public List<Subject> GetAllSubjects()
        {
            return subjectRepository.GetAllSubjects();

        }

        [HttpGet]
        [Route("GetSubjectById")]

        public Subject GetSubjectById (int id)
        {
            return subjectRepository.GetSubjectById(id);
        }

        #endregion

        #region Post Requests

        [HttpPost]
        [Route("CreateSubject")]

        public ActionResult CreateSubject(string subject, string description, int user)
        {
            return Ok(subjectRepository.InsertSubject(subject,description,user));

        }

        [HttpPost]
        [Route("UpdateSubject")]

        public ActionResult UpdateSubject (int subjectId, string subject, string description, int user)
        {
            return Ok(subjectRepository.UpdateSubject(subjectId, subject, description, user));

        }

        [HttpPost]
        [Route("DeactivateSubject")]

        public ActionResult DeactivateSubject(int subjectId, int user)
        {
            return Ok(subjectRepository.DeactivateSubject(subjectId, user));

        }

        #endregion
    }
}
