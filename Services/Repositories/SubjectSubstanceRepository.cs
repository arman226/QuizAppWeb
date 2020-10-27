using QuizzApp.Abstraction;
using QuizzApp.Data;
using QuizzApp.Models;
using QuizzApp.Models.ViewModels;
using QuizzApp.Services.IRepositories;
using System;
using System.Collections.Generic;


namespace QuizzApp.Services.Repositories
{
    public class SubjectSubstanceRepository : ISubjectSubstanceRepository
    {
        
        public List<SubjectSubstance> getAllSubjects()
        {
            ISubjectRepository subjectRepository = new SubjectRepository();
            List<SubjectSubstance> subjectSubstances= new List<SubjectSubstance>();
            List<Subject> subjects = subjectRepository.GetAllSubjects();
            foreach(var subject in subjects)
            {
                SubjectSubstance subjectSubstance = new SubjectSubstance();
                subjectSubstance.subjectDetails = subject;
                subjectSubstance.categories = getCategoryQuestionsById(subject.subjectId);
                subjectSubstances.Add(subjectSubstance);
                
            }

            return subjectSubstances;
        }

        public List<CategoryQuestions> getCategoryQuestionsById(int id)
        {
            ICategoryRepository categoryRepository = new CategoryRepository();
            List<CategoryQuestions> categoryQuestions = new List<CategoryQuestions>();
            List<Category> categories = new List<Category>();
            categories = categoryRepository.GetCategoriesBySubject(id);
            foreach(var category in categories)
            {
                CategoryQuestions categoryQ = new CategoryQuestions();
                categoryQ.category = category;
                categoryQ.questions = getQuestionOptiosByCategory(category.categoryId);
                categoryQuestions.Add(categoryQ);
            }
            return categoryQuestions;

        }

        public List<QuestionOptions> getQuestionOptiosByCategory(int categoryId)
        {
            IQuestionRepository questionRepository = new QuestionRepository();
            List<QuestionOptions> questionOptions = new List<QuestionOptions>();
            List<Question> questions = questionRepository.GetQuestionsById(categoryId);
            foreach(var question in questions)
            {
                IOptionRepository optionRepository = new OptionRepository();
                QuestionOptions questionO = new QuestionOptions();
                questionO.questionDetails = question;
                questionO.options = optionRepository.GetOptionsBySubject(question.questionCode);
                questionOptions.Add(questionO); 

            }


            return questionOptions;
        }
    }
}
