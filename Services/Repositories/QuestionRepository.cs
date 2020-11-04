using Dapper;
using QuizzApp.Abstraction;
using QuizzApp.Data;
using QuizzApp.Models;
using QuizzApp.Services.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Services.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly IDatabaseStrategy _databaseStrategy = new SqlDatabaseStrategy();
        IOptionRepository optionRepository = new OptionRepository();
        #region Stored Procedures
        private const string SP_QUESTION_INSERT = "Question_Insert @questionCode, @title, @question, @userId, @categoryId";
        private const string SP_QUESTION_UPDATE = "Question_Update @questionCode, @title, @question, @userId";
        private const string SP_QUESTION_DEACTIVATE = "Question_Deactivate @questionCode";
        #endregion

        #region SQL Queries 
        private const string SQL_QUESTION_GET_ALL = "EXEC Question_Select_All";
        private const string SQL_QUESTION_GET_BY_ID = "EXEC Questions_Get_By_Id @categoryId";
        private const string SQL_QUESTIONINFO_GET_BY_ID = "EXEC Get_QuestionInfo_By_Id @questionId";

        #endregion
        public int CreateQuestionAsync(string questionCode, string title, string question, int userId, int categoryId, List<Option> options)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                    questionCode = questionCode,
                    title = title,
                    question= question,
                    userId= userId,
                    categoryId= categoryId

                };
                var affectedRows = connection.Execute(SP_QUESTION_INSERT, param);
                optionRepository.CreateOptions(options, userId);

                return affectedRows;
            }
        
        }

        public int UpdateQuestion(string questionCode, string title, string question, int userId, List<Option> options)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                    questionCode = questionCode,
                    title = title,
                    question = question,
                    userId = userId
                };
                var affectedRows = connection.Execute(SP_QUESTION_UPDATE, param);

                optionRepository.CreateOptions(options, userId);


                return affectedRows;

            }
            }

        public List<Question> GetAllQuestions()
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var data = connection.Query<Question>(SQL_QUESTION_GET_ALL).ToList();
                return data;

            }
        }

        public List<Question> GetQuestionsById(int categoryId)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                    categoryId = categoryId
                };
                var data = connection.Query<Question>(SQL_QUESTION_GET_BY_ID, param).ToList();
                return data;

            }
        }

        public int DeactivateQuestion(string questionCode)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                    questionCode = questionCode
                };
                var affectedRows = connection.Execute(SP_QUESTION_DEACTIVATE, param);
                return affectedRows;
            }
        }

        public Question GetQuestionInfoById(int questionId)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                    questionId = questionId
                };
                var data = connection.Query<Question>(SQL_QUESTIONINFO_GET_BY_ID, param).FirstOrDefault();
                return data;

            }
        }
    }
}
