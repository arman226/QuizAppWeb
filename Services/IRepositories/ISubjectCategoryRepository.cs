using QuizzApp.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Services.IRepositories
{
    interface ISubjectCategoryRepository
    {
        public SubjectCategory getSubjectCategoryById(int id);
    }
}
