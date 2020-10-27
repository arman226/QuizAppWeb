using QuizzApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Services.IRepositories
{
    interface IOptionRepository
    {
        public int CreateOption(string questionCode, string optionName, int isCorrectAnswer, int userId);

        public int CreateOptions(List<Option> options, int userId);

        public List<Option> GetOptionsBySubject(string subjectCode);

    }
}
