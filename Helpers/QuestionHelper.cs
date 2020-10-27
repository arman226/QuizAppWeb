using Dapper;
using QuizzApp.Abstraction;
using QuizzApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Helpers
{
    public class QuestionHelper
    {
        private readonly IDatabaseStrategy _databaseStrategy = new SqlDatabaseStrategy();

        #region Queries
        private const string SQL_GENERATE_QUESTION_CODE = "EXEC Helper_QuestionCode_Generate  @categoryId";
        #endregion

        #region Stored Procedures Question_Insert


        #endregion

        public string GenerateQuestionCode(int categoryId)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                    categoryId = categoryId
                };
                var data = connection.Query<string>(SQL_GENERATE_QUESTION_CODE, param).FirstOrDefault() ;
                return data;

            }
        }
    }
}
