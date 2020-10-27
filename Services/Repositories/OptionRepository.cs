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
    public class OptionRepository : IOptionRepository
    {

        private readonly IDatabaseStrategy _databaseStrategy = new SqlDatabaseStrategy();

        #region Stored Procedures

        private const string SP_OPTION_INSERT = "Option_Insert @questionCode, @optionName, @isCorrectAnswer, @userId";

        #endregion

        #region SQL Queries

        private const string SQL_GET_OPTION_BY_SUBJECT = "EXEC Option_Select_By_Subject  @subjectCode";

        #endregion
        public int CreateOption(string questionCode, string optionName, int isCorrectAnswer, int userId)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                    questionCode=questionCode,
                    optionName=optionName,
                    isCorrectAnswer=isCorrectAnswer,
                    userId= userId                    
                };
                var affectedRows = connection.Execute(SP_OPTION_INSERT, param);
                return affectedRows;

            }
        }


        public int CreateOptions(List<Option> options, int userId) {

            using (var connection = _databaseStrategy.Connection)
            {
                var affectedRows = 0;
                connection.Execute("DELETE FROM Options WHERE questionCode= @questionCode", new {questionCode= options[0].questionCode });

                foreach (var option in options)
                { 
                   var param = new
                    {
                        questionCode = option.questionCode,
                        optionName = option.optionName,
                        isCorrectAnswer = option.isCorrectAnswer,
                        userId = userId
                    };
                    affectedRows = affectedRows+ connection.Execute(SP_OPTION_INSERT, param);
                }
                return affectedRows;

            }


        }

        public List<Option> GetOptionsBySubject(string subjectCode)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                    subjectCode = subjectCode
                };
                var data = connection.Query<Option>(SQL_GET_OPTION_BY_SUBJECT, param).ToList();
                return data;

            }
        }
    }
}
