using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models.ViewModels
{
    public class SubjectSubstance
    {

        public Subject subjectDetails { get; set; }

        public List<CategoryQuestions> categories { get; set; }
       

    }
}
