using QuizzApp.Abstraction;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.Data
{
    public class SqlDatabaseStrategy : IDatabaseStrategy
    {
        public SqlDatabaseStrategy()
        {

        }
      public void SeedDatabase()
        {
            //throw new NotImplementedException();
        }
        public DbConnection Connection
        {
            get
            {
                //***
                //*** Create a new connection if null or disposed
                //***
                if (_connection == null)
                {
                    _connection = new SqlConnection("Data Source=localhost;Initial Catalog=QuizzApp;Integrated Security=True");
                    _connection.Open();
                }
                //***
                //*** Open the connection if the connection state is anything other than disposed
                //***
                else if (_connection.State != ConnectionState.Open)
                {
                    _connection.Open();
                }

                return _connection;
            }
        }

        private DbConnection _connection;
    }
}
