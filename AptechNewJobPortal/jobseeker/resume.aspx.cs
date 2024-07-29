using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using AptechNewJobPortal.Model;

namespace AptechNewJobPortal.jobseeker
{
    public partial class resume : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/jobseeker/login.aspx";
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
                SqlCommand command = new SqlCommand("sp_select_user_detail", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@id", id);
                if (connection.State != ConnectionState.Open) { connection.Open(); }
                SqlDataReader dataReader = command.ExecuteReader();
                if (dataReader.Read())
                {
                    userimage.Src = "../" + dataReader[0].ToString();
                    name.InnerText = dataReader[1].ToString() + " " + dataReader[2].ToString();
                    email.InnerText = dataReader[3].ToString();
                    datebirth.InnerText = dataReader[4].ToString();
                    age.InnerText = dataReader[5].ToString();
                    address.InnerText = dataReader[6].ToString();
                    areacity.InnerText = dataReader[7].ToString() + ", " + dataReader[8].ToString();
                    gender.InnerText = dataReader[9].ToString();
                    ms.InnerText = dataReader[10].ToString();
                    mn.InnerText = dataReader[11].ToString();
                    pn.InnerText = dataReader[12].ToString();
                    experience.InnerText = dataReader[13].ToString();
                    cl.InnerText = dataReader[14].ToString();
                    newlevel.InnerText = dataReader[15].ToString();

                }
                connection.Close();
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

    }
}