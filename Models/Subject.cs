using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Models
{
    public class Subject
    {

        public int subjectId { get; set; }       
        public string subject { get; set; }
        public string description { get; set; }
    }

}
