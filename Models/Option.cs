using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models
{
    public class Option
    {
        public string questionCode { get; set; }

        public string optionName { get; set; }

        public int isCorrectAnswer { get; set; }

       
    }
}
