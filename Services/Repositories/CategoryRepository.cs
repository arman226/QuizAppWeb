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
    public class CategoryRepository : ICategoryRepository
    {
        private readonly IDatabaseStrategy _databaseStrategy = new SqlDatabaseStrategy();

        #region Queries

        private const string SQL_GET_ALL_CATEGORIES = "EXEC Category_Select_All";
        private const string SQL_GET_CATEGORY_BY_ID = "EXEC Category_Get_By_Id @categoryId";
        private const string SQL_GET_CATEGORY_BY_SUBJECTID = "EXEC Categories_Get_By_Subject @subjectId";

        #endregion

        #region Stored Procedures

        private const string SP_CATEGORY_INSERT = "Category_Insert @subjectId, @category, @description, @userId";
        private const string SP_CATEGORY_UPDATE = "Category_Update @categoryId, @category, @description, @userId";
        private const string SP_CATEGORY_DEACTIVATE = "Category_Deactivate @categoryId, @userId";

        #endregion
        public List<Category> GetAllCategories()
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var data = connection.Query<Category>(SQL_GET_ALL_CATEGORIES).ToList();
                return data;

            }
        }

        public Category GetCategoryById(int id)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new { categoryId = id };
                var data = connection.Query<Category>(SQL_GET_CATEGORY_BY_ID, param).FirstOrDefault();
                return data;

            }

        }

        public List<Category> GetCategoriesBySubject(int id)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new { subjectId= id };
                var data = connection.Query<Category>(SQL_GET_CATEGORY_BY_SUBJECTID, param).ToList();
                return data;

            }
        }

        public int InsertCategory(int subjectId, string category, string description, int userId)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                    subjectId= subjectId,
                    category = category,
                    description = description,
                    userId = userId
                };
                var affectedRows = connection.Execute(SP_CATEGORY_INSERT, param);
                return affectedRows;

            }
        }

        public int UpdateCategory(int categoryId, string category, string description, int userId)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                    categoryId = categoryId,
                    category = category,
                    description = description,
                    userId = userId
                };
                var affectedRows = connection.Execute(SP_CATEGORY_UPDATE, param);
                return affectedRows;

            }
        }

        public int DeactivateCategory(int categoryId, int userId)
        {
            using (var connection = _databaseStrategy.Connection)
            {
                var param = new
                {
                     categoryId = categoryId,
                    userId = userId
                };
                var data = connection.Execute(SP_CATEGORY_DEACTIVATE, param);
                return data;

            }
        }

      
    }
}
