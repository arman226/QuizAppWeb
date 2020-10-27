using QuizzApp.Abstraction;
using QuizzApp.Data;
using QuizzApp.Models.ViewModels;
using QuizzApp.Services.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Services.Repositories
{
    public class SubjectCategoryRepository : ISubjectCategoryRepository
    {
        private readonly IDatabaseStrategy _databaseStrategy = new SqlDatabaseStrategy();
        ISubjectRepository subjectRepository = new SubjectRepository();
        ICategoryRepository categoryRepository = new CategoryRepository();
        public SubjectCategory getSubjectCategoryById(int id)
        {
            SubjectCategory subjectCategory = new SubjectCategory();

            subjectCategory.subjectDetails = subjectRepository.GetSubjectById(id);

            subjectCategory.categories = categoryRepository.GetCategoriesBySubject(id);


            return subjectCategory;
        }
    }
}
