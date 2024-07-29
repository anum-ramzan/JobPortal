using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using AptechNewJobPortal.Model;

namespace AptechNewJobPortal.admin
{
    public partial class showdetails : System.Web.UI.Page
    {
        SqlConnection connection;
        SqlCommand command;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/admin/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }
            if (Request.QueryString["detail"] == null)
            {
                Response.Redirect("/admin/employer.aspx");
            }
            else
            {
                UserDetail(Request.QueryString["detail"]);
            }
        }
        protected void btn_changestatus_Click(object sender, EventArgs e)
        {
            try
            {
                using (connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    command = new SqlCommand("sp_update_user_status", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", Label2.Text);
                    command.Parameters.AddWithValue("@status", rd_status.SelectedValue);
                    connection.Open();
                    int i = command.ExecuteNonQuery();
                    if (i > 0)
                    {
                        UserDetail(Label11.Text);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

        public void UserDetail(string parameter)
        {
            try
            {
                using (connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    command = new SqlCommand("sp_select_employer_detail", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", parameter);
                    connection.Open();
                    SqlDataReader sdr = command.ExecuteReader();
                    while (sdr.Read())
                    {
                        Label2.Text = sdr[0].ToString();
                        Label1.Text = sdr[1].ToString() + " " + sdr[2].ToString();
                        lbl_hname.Text = sdr[1].ToString() + " " + sdr[2].ToString();
                        Label11.Text = sdr[3].ToString();
                        Label3.Text = sdr[4].ToString();
                        Label4.Text = sdr[5].ToString();
                        Label5.Text = sdr[6].ToString();
                        Label6.Text = sdr[7].ToString();
                        Label8.Text = sdr[8].ToString() + ", " + sdr[9].ToString();
                        Label10.Text = sdr[10].ToString();
                        Image1.ImageUrl = sdr[11].ToString();
                        Label9.Text = sdr[12].ToString();
                        Label7.Text = sdr[13].ToString() + ", " + sdr[14].ToString() + ", " + sdr[15].ToString();
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }
    }
}