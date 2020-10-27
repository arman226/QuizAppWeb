using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Abstraction
{
    interface IDatabaseStrategy
    {
        void SeedDatabase();

        DbConnection Connection { get; }

    }
}
