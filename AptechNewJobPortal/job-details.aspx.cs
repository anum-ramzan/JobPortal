using AptechNewJobPortal.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AptechNewJobPortal
{
    public partial class job_details : System.Web.UI.Page
    {
        /**
         * Giving values 
         * 0 -- current user is jobseeker
         * 1 -- User is authentic and hence can apply 
         * -1/2 -- already applied for the job
         * 3 -- have to apply
         * 4 -- user is employer
         * 5 -- applied for current job
         * 6 -- could not apply something went wrong query couldn't be executed
         *
         */


        int attachid = MethodReusability.AutoId("auto_attachment");

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["JobId"] == null)
            {
                Response.Redirect("jobs.aspx");
            }
            else
            {
                JobDetails();
            }
            if (Session["UserId"] != null)
            {
                //this methods gets user type
                string type = MethodReusability.ReturnSingleValue("sp_select_user_type", "@id", Session["UserId"].ToString());
                //matching user type
                if (type.Equals("Job Seeker"))
                {
                    //showing button if user type is job seeker
                    btn_apply_job.Visible = true;
                    //giving value to hidden input
                    //current user is jobseeker
                    RightUser.Value = "0";

                    //counting job and user apppied on this specific job
                    int countuserjob = CountApplyJob();
                    if (countuserjob > 0)
                    {
                        // -1 is if jobseeker have already applied for this job
                        RightUser.Value = "2";
                        btn_apply_job.Visible = true;
                    }
                    else
                    {
                        // -0 is if jobseeker have not applied for this job
                        RightUser.Value = "3";
                        if (CountResume() > 0)
                        {
                            GetResume();
                            SavedResume.Visible = true;
                            UploadResume.Visible = false;
                        }
                        else
                        {
                            SavedResume.Visible = false;
                            UploadResume.Visible = true;
                        }
                    }
                }
                else if (type.Equals("Employer"))
                {
                    btn_apply_job.Visible = false;
                    RightUser.Value = "4";
                }
            }
        }

        private void JobDetails()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_jobdetail", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", Request.QueryString["JobId"]);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        int z = (int)dataReader[0];
                        JobTitle.InnerText = dataReader[1].ToString();
                        JobImage.Src = dataReader[2].ToString();
                        JobLocation.InnerText = dataReader[3].ToString() + ", " + dataReader[4].ToString();
                        JobVacanies.InnerText = dataReader[5].ToString();
                        JobCategory.InnerText = dataReader[6].ToString();
                        JobApply.InnerText = dataReader[7].ToString();
                        JobExperience.InnerText = dataReader[8].ToString();
                        JobCareer.InnerText = dataReader[9].ToString();
                        JobType.InnerText = dataReader[10].ToString();
                        JobShift.InnerText = dataReader[11].ToString();
                        JobSalary.InnerText = dataReader[13].ToString() + " Rs - " + dataReader[12].ToString() + " Rs";
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


        //this method count if jobseeker have apply for this particular job
        private int CountApplyJob()
        {
            int count = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_apply_user", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", Session["UserId"].ToString());
                    command.Parameters.AddWithValue("@jid", Request.QueryString["JobId"]);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    count = (int)command.ExecuteScalar();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return count;
        }

        //counting whether attachment exists or not
        private int CountResume()
        {
            int count = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_apply_attachment", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    count = (int)command.ExecuteScalar();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return count;
        }

        //getting resume and setting hidden input id and button name from this method
        private void GetResume()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_user_attachment", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader sqlDataReader = command.ExecuteReader();
                    while (sqlDataReader.Read())
                    {
                        CVID.Value = sqlDataReader[0].ToString();
                        CVButton.Text = sqlDataReader[1].ToString();
                        CVButton.CommandArgument = sqlDataReader[2].ToString();
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

        protected void btn_apply_job_Click(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/jobseeker/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }
            else
            {
                //this 2 is for opening jquery modal 
                RightUser.Value = "1";
            }
        }

        protected void CVButton_Click(object sender, EventArgs e)
        {
            try
            {
                Button btn = (Button)sender;
                string fileName = btn.CommandArgument;

                string path = "upload/" + fileName;

                if (path != string.Empty)
                {
                    if (path.EndsWith(".pdf"))
                    {
                        Response.ContentType = "application/pdf";
                    }
                    else if (path.EndsWith(".docx"))
                    {
                        Response.ContentType = "application/docx";
                    }
                    else
                    {
                        Response.ContentType = "application/doc";
                    }

                    string filePath = path;

                    Response.Clear();
                    Response.Buffer = true;

                    Response.AddHeader("Content-Disposition", "attachment;filename=\"" + fileName + "\"");

                    Response.Charset = "";
                    Response.Cache.SetCacheability(HttpCacheability.NoCache);
                    Response.TransmitFile(Server.MapPath(filePath));
                    Response.End();


                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

        protected void ApplyForJob_Click(object sender, EventArgs e)
        {
            try
            {
                //greater than zero means that jobseeker have cv already attached but in else its means need to upload cv first and then apply for job
                if (CountResume() > 0)
                {
                    //name
                    int id = int.Parse(CVID.Value);
                    ApplyingForJob(id);
                    string email = MethodReusability.ReturnSingleValue("sp_select_user_email", "@id", Session["UserId"].ToString());
                    string name = MethodReusability.ReturnSingleValue("sp_select_user_name", "@id", Session["UserId"].ToString());
                    SendApplicationEmail(email, name, int.Parse(Request.QueryString["JobId"]), JobTitle.InnerText, JobLocation.InnerText);
                }
                else
                {
                    //upload 
                    InsertAttachment();
                    ApplyingForJob(attachid);
                    string email = MethodReusability.ReturnSingleValue("sp_select_user_email", "@id", Session["UserId"].ToString());
                    string name = MethodReusability.ReturnSingleValue("sp_select_user_name", "@id", Session["UserId"].ToString());
                    SendApplicationEmail(email, name, int.Parse(Request.QueryString["JobId"]), JobTitle.InnerText, JobLocation.InnerText);
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

        //if user does not have cv uploaded then through this he/she can easily upload cv and apply for this job
        private void InsertAttachment()
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    Guid RenameFile = Guid.NewGuid();

                    string extension = Path.GetExtension(FileUpload1.FileName);
                    string fileName = "/upload/" + RenameFile + extension;
                    FileUpload1.SaveAs(Server.MapPath(fileName));
                    //file upload
                    SqlCommand command = new SqlCommand("sp_insert_attachment", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@aid", attachid);
                    command.Parameters.AddWithValue("@uid", Session["UserId"].ToString());
                    command.Parameters.AddWithValue("@title", FileUpload1.FileName);
                    command.Parameters.AddWithValue("@date", DateTime.Now.ToString());
                    command.Parameters.AddWithValue("@location", RenameFile + extension);
                    connection.Open();
                    command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }


        //inserting in apply job table since we are allowing two different ways 
        //so we can make a method
        //first is thorugh already uploaded cvs
        //second need to upload cv
        private void ApplyingForJob(int attachmentId)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    int id = MethodReusability.AutoId("auto_applyjob");
                    SqlCommand command = new SqlCommand("sp_insert_apply_job", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    command.Parameters.AddWithValue("@uid", Session["UserId"].ToString());
                    command.Parameters.AddWithValue("@jid", Request.QueryString["JobId"]);
                    command.Parameters.AddWithValue("@date", DateTime.Now.ToString());
                    command.Parameters.AddWithValue("@status", "Applied");
                    command.Parameters.AddWithValue("@attach", attachmentId);

                    connection.Open();
                    int x = command.ExecuteNonQuery();
                    if (x == -1)
                    {
                        RightUser.Value = "-1";
                    }
                    else if (x > 0)
                    {
                        RightUser.Value = "5";
                    }
                    else
                    {
                        RightUser.Value = "6";
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }


        //email applyjob details
        #region Applocation Email Code

        private string PopulateBody(string username, int id, string jtitle, string location)
        {
            Page pag = new Page();
            string body = string.Empty;
            using (StreamReader reader = new StreamReader(pag.Server.MapPath("~/JobApplyEmail.html")))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{UserName}", username);
            body = body.Replace("{JID}", "" + id);
            body = body.Replace("{JTitle}", jtitle);
            body = body.Replace("{JLocation}", location);
            return body;
        }

        private void SendApplicationEmail(string recepientEmail, string username, int id, string title, string location)
        {
            //using (MailMessage mailMessage = new MailMessage())
            //{
            //    mailMessage.From = new MailAddress(ConfigurationManager.AppSettings["UserName"]);
            //    mailMessage.Subject = "Your application for" + title + "have been send to employer";
            //    mailMessage.Body = PopulateBody(username, id, title, location);
            //    mailMessage.IsBodyHtml = true;
            //    mailMessage.To.Add(new MailAddress(recepientEmail));
            //    SmtpClient smtp = new SmtpClient();
            //    smtp.Host = ConfigurationManager.AppSettings["Host"];
            //    smtp.EnableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableSsl"]);
            //    NetworkCredential NetworkCred = new NetworkCredential();
            //    NetworkCred.UserName = ConfigurationManager.AppSettings["UserName"];
            //    NetworkCred.Password = ConfigurationManager.AppSettings["Password"];
            //    smtp.UseDefaultCredentials = Convert.ToBoolean(ConfigurationManager.AppSettings["DefaultCredentials"]);
            //    smtp.Credentials = NetworkCred;
            //    smtp.Port = int.Parse(ConfigurationManager.AppSettings["Port"]);
            //    smtp.Send(mailMessage);
            //}
        }

        #endregion

    }
}