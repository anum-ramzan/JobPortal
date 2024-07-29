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

namespace AptechNewJobPortal.jobseeker
{
    public partial class login : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                
            }
            else
            {
                Response.Redirect("/jobseeker/index.aspx");
            }
        }

        protected void btn_login_Click(object sender, EventArgs e)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_login_jobseeker", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@email", txt_mail.Text);
                    command.Parameters.AddWithValue("@pass", txt_pass.Text);
                    connection.Open();
                    int x = (int)command.ExecuteScalar();

                    if (x > 0)
                    {
                        Session["UserId"] = x;
                        Session["Email"] = txt_mail.Text;
                        MethodReusability.UserLoginHistory(Session["UserId"].ToString());
                        if (this.Request.QueryString["ReturnUrl"] != null)
                        {
                            this.Response.Redirect(Request.QueryString["ReturnUrl"].ToString());
                        }
                        else
                        {
                            Response.Redirect("/jobseeker/index.aspx");
                        }
                    }
                    else
                    {
                        switch (x)
                        {
                            case -1:
                                LoginMsg.Text = "Invalid email or password";
                                break;

                            case -2:
                                LoginMsg.Text = "You have not activated your account. Did not receive activation email? <a href='../activation-link.aspx' class='text-bold resend-link'>Resend it</a>";
                                break;
                        }
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

        protected void btn_register_Click(object sender, EventArgs e)
        {
            Response.Redirect("/jobseeker/registration.aspx");
        }
    }
}