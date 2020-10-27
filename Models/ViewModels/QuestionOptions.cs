using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models.ViewModels
{
    public class QuestionOptions
    {
        public Question questionDetails { get; set; }

        public List<Option> options { get; set; }
    }
}
