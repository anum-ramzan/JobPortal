using AptechNewJobPortal.Model;
using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Web.UI;

namespace AptechNewJobPortal.jobseeker
{
    public partial class registration : System.Web.UI.Page
    {
        static string activationCode = Guid.NewGuid().ToString();

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btn_login_Click(object sender, EventArgs e)
        {
            Response.Redirect("/jobseeker/login.aspx");
        }
    }
}