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

namespace AptechNewJobPortal.employer
{
    public partial class edit_profile : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/employer/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }
            else
            {
                UserPersonalInfo(Session["UserId"].ToString());

            }
        }
        public void UserPersonalInfo(string id)
        {
            try
            {
                SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
                SqlCommand command = new SqlCommand("sp_select_profile_update", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@id", id);
                if (connection.State != ConnectionState.Open) { connection.Open(); }
                SqlDataReader dataReader = command.ExecuteReader();
                if (dataReader.Read())
                {
                    txtfname.Value = dataReader[0].ToString();
                    txt_lname.Value = dataReader[1].ToString();
                    personalData_gender.Value = dataReader[2].ToString();
                    txtbd.Value = dataReader[3].ToString();
                    txtcnic.Value = dataReader[4].ToString();
                    maritalId.Value = dataReader[6].ToString();
                    txtmobile.Value = dataReader[6].ToString();
                    txtmobile2.Value = dataReader[7].ToString();
                    txt_address.Value = dataReader[8].ToString();
                    areaId.Value = dataReader[9].ToString();
                    experienceId.Value = dataReader[10].ToString();
                    careerId.Value = dataReader[11].ToString();
                }
                connection.Close();
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

    }
}