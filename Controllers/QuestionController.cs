using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QuizzApp.Helpers;
using QuizzApp.Models;
using QuizzApp.Models.ViewModels.APIViewModels;
using QuizzApp.Services.IRepositories;
using QuizzApp.Services.Repositories;

namespace QuizzApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        QuestionHelper questionHelper = new QuestionHelper();
        IQuestionRepository questionRepository = new QuestionRepository();
        IOptionRepository optionRepository = new OptionRepository();
        ILogger<QuestionController> logger;

        public QuestionController(ILogger<QuestionController> _logger)
        {
            this.logger = _logger;
        }

        #region Get Requests
        [HttpGet]
        [Route("GetQuestionCode")]

        public string GetQuestionCode(int categoryId)
        {
            return questionHelper.GenerateQuestionCode(categoryId);

        }

        [HttpGet]
        [Route("GetAllQuestions")]

        public List<Question> GetAllQuestions ()
        {
            return questionRepository.GetAllQuestions();

        }


        [HttpGet]
        [Route("GetQuestionsById")]

        public List<Question> GetQuestionsById(int categoryId)
        {
            return questionRepository.GetQuestionsById(categoryId);

        }

        #endregion

        #region Post Requests
        [HttpPost]
        [Route("CreateQuestion")]

        public ActionResult CreateQuestion(QuestionOptions subjectOptions)
        {
            try
            {


                questionRepository.CreateQuestionAsync(subjectOptions.questionCode, subjectOptions.title, subjectOptions.question, subjectOptions.userId, subjectOptions.categoryId, subjectOptions.options);
             
                return Ok("Successful");
            }
            catch(Exception e)
            {
                return Content(e.Message);      
            }
        }

        [HttpPost]
        [Route("UpdateQuestion")]

        public ActionResult UpdateQuestion(QuestionOptions subjectOptions)
        {
            try
            {
                questionRepository.UpdateQuestion(subjectOptions.questionCode, subjectOptions.title, subjectOptions.question, subjectOptions.userId, subjectOptions.options);

                return Ok("Successful");
            }
            catch (Exception e)
            {
                return Content(e.Message);
            }
        }

        [HttpPost]
        [Route("DeactivateQuestion")]

        public ActionResult DeactivateQuestion(string questionCode)
        {
            try
            {
                questionRepository.DeactivateQuestion(questionCode);
                return Ok("Successful");
            }
            catch (Exception e)
            {
                return Content(e.Message);
            }
        }

        #endregion

    }
}
