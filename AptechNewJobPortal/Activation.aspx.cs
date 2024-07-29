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
    public partial class Activation : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["ActivationCode"] == null)
            {
                Response.Redirect("~/default.aspx");
            }
            else
            {
                SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
                SqlCommand command = new SqlCommand("sp_profile_activation", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@activation", Request.QueryString["ActivationCode"]);
                connection.Open();
                int f = (int)command.ExecuteScalar();
                if (f > 0)
                {

                }
                else
                {
                    Response.Redirect("~/ActivationInvalid.aspx");
                }
                connection.Close();
            }




        }
    }
}