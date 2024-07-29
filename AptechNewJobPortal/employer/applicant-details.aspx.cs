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
    public partial class applicant_details : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/employer/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }
            if (Request.QueryString["email"] == null)
            {
                Response.Redirect("job-posted.aspx");
            }
            CandidateDetails();
            //ResumeLocation();
        }
        //Personal Details
        private void CandidateDetails()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_resume_details", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@mail", Request.QueryString["email"]);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();

                    while (dataReader.Read())
                    {
                        CandidateImage.Src = dataReader[1].ToString();
                        TitleHeading.InnerText = dataReader[2].ToString() + " Resume Detail";
                        SubTitle.InnerText = dataReader[2].ToString() + " Resume Detail";
                        CandidateName.InnerText = dataReader[2].ToString();
                        CandidateEmail.HRef = "mailto:" + dataReader[3].ToString();
                        CandidateMobile.InnerText = dataReader[4].ToString();
                        CandidateAddress.InnerText = dataReader[5].ToString();
                        CandidateAge.InnerText = dataReader[6].ToString();
                        CandidateSkill.InnerText = dataReader[7].ToString();

                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

        //Resume Details 
        private void ResumeLocation()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_resume_attachment", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@mail", Request.QueryString["email"]);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    string location = command.ExecuteScalar().ToString();
                    if (location == "")
                    {
                        HiddenResume.Value = "001";
                    }
                    else
                    {
                        lnkDownload.CommandArgument = location;
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }
    }
}