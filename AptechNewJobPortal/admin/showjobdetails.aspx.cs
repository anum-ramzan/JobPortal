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

namespace AptechNewJobPortal.admin
{
    public partial class showjobdetails : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/admin/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }
            if(Request.QueryString["detail"] == null)
            {
                Response.Redirect("/index.aspx");
            }
                JobDetails();
        }
        private void JobDetails()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_jobdetail", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", Request.QueryString["detail"]);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        int z = (int)dataReader[0];
                        JobTitle.InnerText = dataReader[1].ToString();
                        //JobImage.Src = dataReader[2].ToString();
                        JobLocation.InnerText = dataReader[3].ToString() + ", " + dataReader[4].ToString();
                        JobVacanies.InnerText = dataReader[5].ToString();
                        JobCategory.InnerText = dataReader[6].ToString();
                        JobApply.InnerText = dataReader[7].ToString();
                        JobExperience.InnerText = dataReader[8].ToString();
                        JobCareer.InnerText = dataReader[9].ToString();
                        JobType.InnerText = dataReader[10].ToString();
                        JobShift.InnerText = dataReader[11].ToString();
                        JobSalary.InnerText = dataReader[12].ToString() + " Rs - " + dataReader[13].ToString() + " Rs";
                        JobGender.InnerText = dataReader[14].ToString();
                        JobEducation.InnerText = dataReader[15].ToString();
                        JobIndustry.InnerText = dataReader[16].ToString();
                        JobDescription.InnerText = HttpUtility.HtmlDecode(dataReader[17].ToString());
                        JobSkill.InnerText = HttpUtility.HtmlDecode(dataReader[18].ToString());
                        JobCompany.InnerText = dataReader[19].ToString();
                        JobCompanyDescription.InnerText = dataReader[20].ToString();
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }
    }
}