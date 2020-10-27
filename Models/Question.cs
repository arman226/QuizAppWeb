using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models
{
    public class Question
    {
        public int questionId { get; set; }

        public string questionCode { get; set; }

        public string title { get; set; }

        public string question { get; set; }
    }
}
