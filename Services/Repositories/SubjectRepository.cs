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
    public class SubjectRepository : ISubjectRepository
    {
        private readonly IDatabaseStrategy _databaseStrategy = new SqlDatabaseStrategy();
       
        #region Queries
        private const string SQL_GET_ALL_SUBJECTS = "EXEC Subject_Select_All";
        private const string SQL_GET_SUBJECT_BY_ID = "EXEC Subject_Get_By_Id @subjectId";
        #endregion

        #region Stored Procedures
        private const string SP_SUBJECT_INSERT = "Subject_Insert @subject, @description, @userId";
        private const string SP_SUBJECT_UPDATE = "Subject_Update @subjectId, @subject, @description, @userId";
        private const string SP_SUBJECT_DEACTIVATE = "Subject_Deactivate @subjectId, @userId";

        #endregion

        

        

        public List<Subject> GetAllSubjects()
        {
            using(var connection =  _databaseStrategy.Connection)
            {
                var data = connection.Query<Subject>(SQL_GET_ALL_SUBJECTS).ToList();
                return data;
                
            }



        }

        public Subject GetSubjectById(int id)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new { subjectId = id };
                var data = connection.Query<Subject>(SQL_GET_SUBJECT_BY_ID, param).FirstOrDefault();
                return data;

            }
        }

        public int InsertSubject(string subject, string description, int user)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new 
                {
                    subject = subject,
                    description= description,
                    userId= user
                };
                var affectedRows = connection.Execute(SP_SUBJECT_INSERT, param);
                return affectedRows;

            }
        }

        public int UpdateSubject(int subjectId, string subject, string description, int user)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new 
                { 
                    subjectId=subjectId,
                    subject = subject, 
                    description = description,
                    userId = user 
                };
                var affectedRows = connection.Execute(SP_SUBJECT_UPDATE, param);
                return affectedRows;

            }
        }

        public int DeactivateSubject(int subjectId, int userId)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new 
                { 
                    subjectId = subjectId,
                    userId= userId
                };
                var data = connection.Execute(SP_SUBJECT_DEACTIVATE, param);
                return data;

            }
        }
    }
}
