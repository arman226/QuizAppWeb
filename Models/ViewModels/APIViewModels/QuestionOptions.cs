using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models.ViewModels.APIViewModels
{
    public class QuestionOptions
    {
        public string questionCode { get; set; }
        public string title { get; set; }

        public string question { get; set; }

        public int userId { get; set; }

        public int categoryId { get; set; }

        public List<Option> options { get; set; }
    }
}
