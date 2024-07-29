using AptechNewJobPortal.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace AptechNewJobPortal.employer
{
    public partial class Employer : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                Response.Redirect("/jobseeker/login.aspx");
            }
            else
            {
                username.InnerText = MethodReusability.ReturnSingleValue("sp_select_fullname", "@id", Session["userId"].ToString());
                UserDashBoardInfo(Session["UserId"].ToString());
            }
        }

        public void UserDashBoardInfo(string id)
        {
            try
            {
                SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString);
                SqlCommand command = new SqlCommand("sp_select_front_detail", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@id", id);
                if (connection.State != ConnectionState.Open) { connection.Open(); }
                SqlDataReader dataReader = command.ExecuteReader();
                if (dataReader.Read())
                {
                    Img1.Src = dataReader[0].ToString();
                    username.InnerText = dataReader[1].ToString();
                    //Label1.Text = dataReader[2].ToString();
                    //Label2.Text = dataReader[3].ToString();
                    //lbl_area.Text = dataReader[4].ToString();
                    //lbl_city.Text = dataReader[5].ToString();
                    //lbl_age.Text = dataReader[6].ToString();
                    //lbl_experience.Text = dataReader[7].ToString();
                }
                connection.Close();
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }
    }
}