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
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/jobseeker/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }
            //else
            //{
            //    UserDashBoardInfo(Session["UserId"].ToString());
            //}
        }

        //public void UserDashBoardInfo(string id)
        //{
        //    try
        //    {
        //        SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
        //        SqlCommand command = new SqlCommand("sp_select_front_detail", connection);
        //        command.CommandType = CommandType.StoredProcedure;
        //        command.Parameters.AddWithValue("@id", id);
        //        if (connection.State != ConnectionState.Open) { connection.Open(); }
        //        SqlDataReader dataReader = command.ExecuteReader();
        //        if (dataReader.Read())
        //        {
        //            user_image.Src = dataReader[0].ToString();
        //            user_name.InnerText = dataReader[1].ToString();
        //            lbl_email.Text = dataReader[2].ToString();
        //            lbl_phone.Text = dataReader[3].ToString();
        //            lbl_area.Text = dataReader[4].ToString();
        //            lbl_city.Text = dataReader[5].ToString();
        //            lbl_age.Text = dataReader[6].ToString();
        //            lbl_experience.Text = dataReader[7].ToString();
        //        }
        //        connection.Close();
        //    }
        //    catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        //}
    }
}