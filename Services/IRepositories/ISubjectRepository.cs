using QuizzApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Services.IRepositories
{
    interface ISubjectRepository
    {

        #region Get
        public List<Subject> GetAllSubjects();

        public Subject GetSubjectById(int id);

        #endregion

        #region Insert
        public int InsertSubject(string subject, string description, int user);

        #endregion

        #region Update
        public int UpdateSubject(int subjectId, string subject, string description, int user);
        #endregion

        #region Deactivate
        public int DeactivateSubject(int subjectId, int userId);


        #endregion
    }
}
