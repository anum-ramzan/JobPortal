using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Web.UI.WebControls;
using System.Security.Cryptography;
using System.Text;
using System.Net;

namespace AptechNewJobPortal.Model
{
    public class MethodReusability
    {
        //Error Method
        public static void ErrorMessage(Exception ex)
        {
            SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
            SqlCommand command = new SqlCommand("sp_insert_error", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@error_msg", ex.Message);
            command.Parameters.AddWithValue("@error_source", ex.ToString());
            command.Parameters.AddWithValue("@error_date", DateTime.Now.ToString());
            if (connection.State != ConnectionState.Open)
            {
                connection.Open();
            }
            command.ExecuteNonQuery();
            connection.Close();
        }

        //total employers registered, job seeker , job posted and job apply
        public static int CounterTotal(string sp_name)
        {
            int total;
            SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
            SqlCommand command = new SqlCommand(sp_name, connection);
            command.CommandType = CommandType.StoredProcedure;
            if (connection.State != ConnectionState.Open)
            {
                connection.Open();
            }
            total = (int)command.ExecuteScalar();
            connection.Close();
            return total;
        }

        //method for auto ids
        public static int AutoId(string spname)
        {
            SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
            SqlCommand command = new SqlCommand(spname, connection);
            command.CommandType = CommandType.StoredProcedure;
            if (connection.State != ConnectionState.Open) { connection.Open(); }
            int a = (int)command.ExecuteScalar();
            connection.Close();
            return a;
        }

        // methods for those returning only one value string valu use of executescalar()
        public static string ReturnSingleValue(string sp_name, string parameter, object value)
        {
            string name = "";

            try
            {
                SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
                SqlCommand command = new SqlCommand(sp_name, connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue(parameter, value);
                if (connection.State != ConnectionState.Open) { connection.Open(); }
                name = (string)command.ExecuteScalar();
                connection.Close();
            }
            catch (Exception ex) { ErrorMessage(ex); }

            return name;
        }

        //dropdown
        public static void DropDown(DropDownList ddl_name, string procedure_name, string value_column, string text_column, string zero_index)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {

                    SqlCommand command = new SqlCommand("select * from " + procedure_name, connection);
                    SqlDataAdapter adp = new SqlDataAdapter(command);

                    DataTable dt = new DataTable();
                    adp.Fill(dt);

                    ddl_name.DataValueField = value_column;
                    ddl_name.DataTextField = text_column;

                    ddl_name.DataSource = dt;
                    ddl_name.DataBind();
                    ddl_name.Items.Insert(0, new ListItem("Please Select " + zero_index, "0"));

                }
            }
            catch (Exception ex) { ErrorMessage(ex); }
        }


        // methods for those returning only one value string valu use of executescalar()
        public static int ReturnSingleIntValue(string sp_name)
        {
            int name = 0;

            try
            {
                SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
                SqlCommand command = new SqlCommand(sp_name, connection);
                command.CommandType = CommandType.StoredProcedure;
                if (connection.State != ConnectionState.Open) { connection.Open(); }
                name = (int)command.ExecuteScalar();
                connection.Close();
            }
            catch (Exception ex) { ErrorMessage(ex); }

            return name;
        }

        // methods for those returning only one value string valu use of executescalar()
        public static int ReturnSingleIntValue(string sp_name, string parameter, object value)
        {
            int name = 0;

            try
            {
                SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
                SqlCommand command = new SqlCommand(sp_name, connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue(parameter, value);
                if (connection.State != ConnectionState.Open) { connection.Open(); }
                name = (int)command.ExecuteScalar();
                connection.Close();
            }
            catch (Exception ex) { ErrorMessage(ex); }

            return name;
        }

        //Encryption MEthod
        public static string Encrypt(string input, string key)
        {
            byte[] inputArray = UTF8Encoding.UTF8.GetBytes(input);
            TripleDESCryptoServiceProvider tripleDES = new TripleDESCryptoServiceProvider();
            tripleDES.Key = UTF8Encoding.UTF8.GetBytes(key);
            tripleDES.Mode = CipherMode.ECB;
            tripleDES.Padding = PaddingMode.PKCS7;
            ICryptoTransform cTransform = tripleDES.CreateEncryptor();
            byte[] resultArray = cTransform.TransformFinalBlock(inputArray, 0, inputArray.Length);
            tripleDES.Clear();
            return Convert.ToBase64String(resultArray, 0, resultArray.Length);
        }

        //Decryption MEthod
        public static string Decrypt(string input, string key)
        {
            byte[] inputArray = Convert.FromBase64String(input);
            TripleDESCryptoServiceProvider tripleDES = new TripleDESCryptoServiceProvider();
            tripleDES.Key = UTF8Encoding.UTF8.GetBytes(key);
            tripleDES.Mode = CipherMode.ECB;
            tripleDES.Padding = PaddingMode.PKCS7;
            ICryptoTransform cTransform = tripleDES.CreateDecryptor();
            byte[] resultArray = cTransform.TransformFinalBlock(inputArray, 0, inputArray.Length);
            tripleDES.Clear();
            return UTF8Encoding.UTF8.GetString(resultArray);
        }


        public static void UserLoginHistory(string id)
        {
            string IPAddress = null;
            try
            {
                IPHostEntry Host = default(IPHostEntry);
                string Hostname = null;
                Hostname = System.Environment.MachineName;
                Host = Dns.GetHostEntry(Hostname);
                foreach (IPAddress IP in Host.AddressList)
                {
                    if (IP.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
                    {
                        IPAddress = Convert.ToString(IP);
                    }
                }
                SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
                SqlCommand command = new SqlCommand("sp_insert_login_history", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@id", MethodReusability.AutoId("sp_login_history"));
                command.Parameters.AddWithValue("@userid", id);
                command.Parameters.AddWithValue("@time", DateTime.Now.ToString());
                command.Parameters.AddWithValue("@ip", IPAddress);
                if (connection.State != ConnectionState.Open) { connection.Open(); }
                int a = (int)command.ExecuteNonQuery();
                connection.Close();
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }
    }
}