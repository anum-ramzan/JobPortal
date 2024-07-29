using AptechNewJobPortal.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AptechNewJobPortal
{
    public partial class accountrecovery : System.Web.UI.Page
    { 
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void ChangePasswordButton_Click(object sender, EventArgs e)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_update_user_password", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@uid",Session["PasswordId"].ToString());
                    command.Parameters.AddWithValue("@password", txtChangePassword.Value);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    int returnRow = command.ExecuteNonQuery();
                    if (returnRow > 0)
                    {
                        PasswordStatus.Value = "1";
                    }
                    else
                    {
                        PasswordStatus.Value = "0";
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }
    }
}