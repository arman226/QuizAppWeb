using QuizzApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Services.IRepositories
{
    interface ICategoryRepository
    {
        public List<Category> GetAllCategories();

        public List<Category> GetCategoriesBySubject(int id);

        public Category GetCategoryById(int id);

        

        public int InsertCategory(int subjectId, string category, string description, int userId);

        public int UpdateCategory(int categoryId, string category, string description, int userId);

        public int DeactivateCategory(int categoryId, int userId);
    }
}
