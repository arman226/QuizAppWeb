using QuizzApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Services.IRepositories
{
    interface IQuestionRepository
    {
        public int CreateQuestionAsync(string questionCode, string title, string question, int userId, int categoryId, List<Option> options);

        public int UpdateQuestion(string questionCode, string title, string question, int userId, List<Option> options);

        public int DeactivateQuestion(string questionCode);

        public List<Question> GetAllQuestions();


        public List<Question> GetQuestionsById(int categoryId);

    }
}
