using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models.ViewModels
{
    public class CategoryQuestions
    {
        public Category category { get; set; }

        public List<QuestionOptions> questions { get; set; }
    }
}
