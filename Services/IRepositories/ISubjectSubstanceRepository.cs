using QuizzApp.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Services.IRepositories
{
    interface ISubjectSubstanceRepository
    {
        public List<SubjectSubstance> getAllSubjects();

        public List<CategoryQuestions> getCategoryQuestionsById(int id);

        public List<QuestionOptions> getQuestionOptiosByCategory(int categoryId);
    }
}
