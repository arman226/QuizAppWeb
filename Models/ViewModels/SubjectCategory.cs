using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models.ViewModels
{
    public class SubjectCategory
    {
        public Subject subjectDetails { get; set; }
        public List<Category> categories { get; set; }
    }
}
