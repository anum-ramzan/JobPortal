using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net.Mail;
using System.IO;
using System.Net;
using System.Web.UI;
using System.Web.SessionState;

namespace AptechNewJobPortal.Model
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class AjaxEnabledService
    {

        SqlConnection connection;
        SqlCommand command;
        SqlDataReader dataReader;
        Page p = new Page();
        static string activationCode = Guid.NewGuid().ToString();

        // 1 - Recent jobs for default.aspx page
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Job> RecentJobs()
        {
            List<Job> jobList = new List<Job>();
            try
            {
                using (connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    command = new SqlCommand("sp_select_frontjob", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    dataReader = command.ExecuteReader();

                    while (dataReader.Read())
                    {
                        Job job = new Job()
                        {
                            JobId = (int)dataReader[0],
                            JobApplyDate = dataReader[1].ToString(),
                            JobLogo = dataReader[2].ToString(),
                            JobTitle = dataReader[3].ToString(),
                            CityName = dataReader[4].ToString(),
                            CompanyName = dataReader[5].ToString()
                        };
                        jobList.Add(job);
                    }
                }
            }
            catch (Exception ex)
            {
                MethodReusability.ErrorMessage(ex);
            }
            return jobList;
        }




        //  2 - All Jobs
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Job> Jobs()
        {
            List<Job> jobList = new List<Job>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_alljob", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Job job;
                    while (dataReader.Read())
                    {
                        job = new Job()
                        {
                            JobId = (int)dataReader[0],
                            JobApplyDate = dataReader[1].ToString(),
                            JobLogo = dataReader[2].ToString(),
                            JobTitle = dataReader[3].ToString(),
                            CityName = dataReader[4].ToString(),
                            CompanyName = dataReader[5].ToString()
                        };
                        jobList.Add(job);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return jobList;
        }




        // 3 - Job Category and their total
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<JobCategory> Category()
        {
            List<JobCategory> CategoryList = new List<JobCategory>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_category", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        JobCategory jc = new JobCategory() { CategoryName = dataReader[0].ToString(), TotalCategoryJob = (int)dataReader[1] };
                        CategoryList.Add(jc);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return CategoryList;
        }


        // 4 - City
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<City> City()
        {
            List<City> CityList = new List<City>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_city", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        City city = new City() { CityId = (int)dataReader[0], CityName = dataReader[1].ToString() };
                        CityList.Add(city);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return CityList;
        }


        // 4 - Area
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Area> Area(int id)
        {
            List<Area> AreaList = new List<Area>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_area", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        Area area = new Area() { AreaId = (int)dataReader[0], AreaName = dataReader[1].ToString(), CityId = (int)dataReader[2] };
                        AreaList.Add(area);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return AreaList;
        }



        // 4  - Job sub category and their total
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<JobSubCategory> SubCategory(string category)
        {
            List<JobSubCategory> SubCategoryList = new List<JobSubCategory>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_subCategory", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@category", category);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        JobSubCategory jsc = new JobSubCategory() { SubCategoryName = dataReader[0].ToString(), SubCategoryTotal = (int)dataReader[1] };
                        SubCategoryList.Add(jsc);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return SubCategoryList;
        }





        // 5 - Degree for education  e.g bachelors, master .....
        [OperationContract]
        [WebInvoke(Method = "GET",
           BodyStyle = WebMessageBodyStyle.WrappedRequest,
           ResponseFormat = WebMessageFormat.Json
        )]
        public List<Degree> DegreeList()
        {
            List<Degree> list = new List<Degree>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_degree", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Degree degree;
                    while (dataReader.Read())
                    {
                        degree = new Degree()
                        {
                            DegreeId = (int)dataReader[0],
                            DegreeName = dataReader[1].ToString()
                        };
                        list.Add(degree);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return list;
        }




        // 6 - degree level for education e.g master in law .....
        [OperationContract]
        [WebInvoke(Method = "GET",
           BodyStyle = WebMessageBodyStyle.WrappedRequest,
           ResponseFormat = WebMessageFormat.Json
        )]
        public List<DegreeLevel> DegreeLevelList(int id)
        {
            List<DegreeLevel> list = new List<DegreeLevel>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_degreelevel", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    DegreeLevel degreelevel;
                    while (dataReader.Read())
                    {
                        degreelevel = new DegreeLevel()
                        {
                            DegreeLevelId = (int)dataReader[0],
                            DegreeLevelName = dataReader[1].ToString()
                        };
                        list.Add(degreelevel);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return list;
        }



        // 7 - Job Details
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public JobDetails JobDetail(int jobid)
        {
            JobDetails jobdetail = new JobDetails();

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_jobdetail", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", jobid);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        jobdetail = new JobDetails()
                        {
                            JobId = (int)dataReader[0],
                            JobTitle = dataReader[1].ToString(),
                            JobLogo = dataReader[2].ToString(),
                            Location = dataReader[3].ToString() + ", " + dataReader[4].ToString(),
                            Vacanies = (int)dataReader[5],
                            Category = dataReader[6].ToString(),
                            JobApplyDate = dataReader[7].ToString(),
                            Experience = dataReader[8].ToString(),
                            CareerLevel = dataReader[9].ToString(),
                            JobType = dataReader[10].ToString(),
                            JobShift = dataReader[11].ToString(),
                            Salary = dataReader[12].ToString() + " Rs - " + dataReader[13].ToString() + " Rs",
                            Gender = dataReader[14].ToString(),
                            Education = dataReader[15].ToString(),
                            Industry = dataReader[16].ToString(),
                            Description = dataReader[17].ToString(),
                            Skills = dataReader[18].ToString(),
                            CompanyName = dataReader[19].ToString(),
                            CompanyDescription = dataReader[20].ToString()
                        };
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return jobdetail;
        }




        // 8 - Search job on title keyword
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
        )]
        public List<Job> SearchJob(string keyword)
        {
            List<Job> jobList = new List<Job>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_search_job", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@search", keyword);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Job job;
                    while (dataReader.Read())
                    {
                        job = new Job()
                        {
                            JobId = (int)dataReader[0],
                            JobApplyDate = dataReader[1].ToString(),
                            JobLogo = dataReader[2].ToString(),
                            JobTitle = dataReader[3].ToString(),
                            CityName = dataReader[4].ToString(),
                            CompanyName = dataReader[5].ToString()
                        };
                        jobList.Add(job);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return jobList;
        }



        // 8 - I Search with job Category 
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
        )]
        public List<Job> GetJobWithCategory(string keyword)
        {
            List<Job> jobList = new List<Job>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_category_job", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@category", keyword);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Job job;
                    while (dataReader.Read())
                    {
                        job = new Job()
                        {
                            JobId = (int)dataReader[0],
                            JobApplyDate = dataReader[1].ToString(),
                            JobLogo = dataReader[2].ToString(),
                            JobTitle = dataReader[3].ToString(),
                            CityName = dataReader[4].ToString(),
                            CompanyName = dataReader[5].ToString()
                        };
                        jobList.Add(job);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return jobList;
        }




        // 8 - II Search with job Sub Category 
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
        )]
        public List<Job> GetJobWithSubCategory(string keyword)
        {
            List<Job> jobList = new List<Job>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_subcategory_job", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@category", keyword);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Job job;
                    while (dataReader.Read())
                    {
                        job = new Job()
                        {
                            JobId = (int)dataReader[0],
                            JobApplyDate = dataReader[1].ToString(),
                            JobLogo = dataReader[2].ToString(),
                            JobTitle = dataReader[3].ToString(),
                            CityName = dataReader[4].ToString(),
                            CompanyName = dataReader[5].ToString()
                        };
                        jobList.Add(job);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return jobList;
        }



        // 9 - Job Seeker insert/registration with activation email
        [OperationContract]
        [WebInvoke(Method = "POST",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public string RegisterJobseeker(string fname, string lname, string mail, string pass, string mobile)
        {
            string message = "";

            int id = MethodReusability.AutoId("auto_profile");

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_insert_register_js", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@u_id", id);
                    command.Parameters.AddWithValue("@u_fname", fname);
                    command.Parameters.AddWithValue("@u_lname", lname);
                    command.Parameters.AddWithValue("@u_email", mail);
                    command.Parameters.AddWithValue("@u_password", pass);
                    command.Parameters.AddWithValue("@u_mobile", mobile);
                    command.Parameters.AddWithValue("@u_date", DateTime.Now);
                    connection.Open();
                    int i = command.ExecuteNonQuery();
                    if (i == -1)
                    {
                        message = mail + " already a Jobs ACE Account. Try another email.";
                    }
                    else if (i > 0)
                    {
                        SendActivationCode(id, mail, fname + " " + lname);
                        message = "You have been registered successfully. Please check your email to activate your account";
                    }
                    else
                    {
                        message = "Something went wrong. Please try again";
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return message;
        }



        // 10 - Employer insert/registration with activation emails
        [OperationContract]
        [WebInvoke(Method = "POST",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public string RegisterEmployer(string fname, string lname, string mail, string pass, string mobile)
        {
            string message = "";

            int id = MethodReusability.AutoId("auto_profile");

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_insert_register_emp", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@u_id", id);
                    command.Parameters.AddWithValue("@u_fname", fname);
                    command.Parameters.AddWithValue("@u_lname", lname);
                    command.Parameters.AddWithValue("@u_email", mail);
                    command.Parameters.AddWithValue("@u_password", pass);
                    command.Parameters.AddWithValue("@u_mobile", mobile);
                    command.Parameters.AddWithValue("@u_date", DateTime.Now);
                    connection.Open();
                    int i = command.ExecuteNonQuery();
                    if (i == -1)
                    {
                        message = mail + " already a Jobs ACE Account. Try another email.";
                    }
                    else if (i > 0)
                    {
                        SendActivationCode(id, mail, fname + " " + lname);
                        message = "You have been registered successfully. Please check your email to activate your account";
                    }
                    else
                    {
                        message = "Something went wrong. Please try again";
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return message;
        }

        //Email activation methods
        #region Activation Email Code
        private void SendActivationCode(int userId, string mail, string name)
        {
            SqlConnection xc;
            SqlCommand xcmd;
            try
            {
                using (xc = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    xcmd = new SqlCommand("sp_insert_activation", xc);
                    xcmd.CommandType = CommandType.StoredProcedure;
                    xc.Open();
                    xcmd.Parameters.AddWithValue("@userid", userId);
                    xcmd.Parameters.AddWithValue("@activationCode", activationCode);
                    xcmd.ExecuteNonQuery();
                    SendActivationEmail(mail, name);
                    xc.Close();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

        private string PopulateBody(string name)
        {
            Page pag = new Page();
            string body = string.Empty;
            using (StreamReader reader = new StreamReader(pag.Server.MapPath("~/RegistrationEmail.html")))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{UserName}", name);
            body = body.Replace("{activationCode}", activationCode);
            return body;
        }

        private void SendActivationEmail(string recepientEmail, string name)
        {
            //using (MailMessage mailMessage = new MailMessage())
            //{
            //    mailMessage.From = new MailAddress(ConfigurationManager.AppSettings["UserName"]);
            //    mailMessage.Subject = "Jobs ACE account activation";
            //    mailMessage.Body = PopulateBody(name);
            //    mailMessage.IsBodyHtml = true;
            //    mailMessage.To.Add(new MailAddress(recepientEmail));
            //    SmtpClient smtp = new SmtpClient();
            //    smtp.Host = ConfigurationManager.AppSettings["Host"];
            //    smtp.EnableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableSsl"]);
            //    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
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




        // 11 - Select Jobseeker Education session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Education> JSEducation()
        {
            List<Education> list = new List<Education>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_education", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", p.Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Education education;
                    while (dataReader.Read())
                    {
                        education = new Education()
                        {
                            EducationId = (int)dataReader[0],
                            EducationDegree = dataReader[1].ToString(),
                            EducationDegreeLevel = dataReader[2].ToString(),
                            EducationOther = dataReader[3].ToString(),
                            EducationResult = dataReader[4].ToString(),
                            EducationCompletion = dataReader[5].ToString(),
                            EducationInsitute = dataReader[6].ToString()
                        };
                        list.Add(education);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }



        // 12 - update education session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "GET",
           BodyStyle = WebMessageBodyStyle.WrappedRequest,
           ResponseFormat = WebMessageFormat.Json
        )]
        public Education EducationUpdateDetail(int id)
        {
            Education education = new Education();

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_education_update", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        education = new Education()
                        {
                            EducationId = (int)dataReader[0],
                            EducationDegree = dataReader[1].ToString(),
                            EducationDegreeLevel = dataReader[2].ToString(),
                            EducationOther = dataReader[3].ToString(),
                            EducationInsitute = dataReader[4].ToString(),
                            EducationResult = dataReader[5].ToString(),
                            EducationCompletion = dataReader[6].ToString(),

                        };
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return education;
        }




        // 13 - insert education session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
           BodyStyle = WebMessageBodyStyle.WrappedRequest,
           ResponseFormat = WebMessageFormat.Json
        )]
        public int EducationInsert(string degree, string institute, string date, string result, string other)
        {
            int affected = 0;
            int id = MethodReusability.AutoId("auto_education");
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_insert_education", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@eid", id);
                    command.Parameters.AddWithValue("@uid", p.Session["UserId"].ToString());
                    command.Parameters.AddWithValue("@degree", degree);
                    command.Parameters.AddWithValue("@institute", institute);
                    command.Parameters.AddWithValue("@date", date);
                    command.Parameters.AddWithValue("@result", result);
                    command.Parameters.AddWithValue("@other", other);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }





        // 14 - delete education
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int EducationDelete(int id)
        {
            int affected = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_delete_education", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }





        // 15 - Select Jobseeker experience session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Experience> JSExperience()
        {
            List<Experience> list = new List<Experience>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_experience", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@uid", p.Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Experience experience;
                    while (dataReader.Read())
                    {
                        experience = new Experience()
                        {
                            ExperienceId = (int)dataReader[0],
                            ExperienceJobTitle = dataReader[1].ToString(),
                            ExperienceCompany = dataReader[2].ToString(),
                            ExperienceStart = dataReader[3].ToString(),
                            ExperienceEnd = dataReader[4].ToString(),
                            ExperienceDescription = dataReader[5].ToString(),


                        };
                        list.Add(experience);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }





        // 16 - insert experience session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int ExperienceInsert(string title, string company, string start, string end, string description)
        {
            int affected = 0;
            int id = MethodReusability.AutoId("auto_experience");
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_insert_experience", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@eid", id);
                    command.Parameters.AddWithValue("@uid", p.Session["UserId"].ToString());
                    command.Parameters.AddWithValue("@title", title);
                    command.Parameters.AddWithValue("@company", company);
                    command.Parameters.AddWithValue("@start", start);
                    command.Parameters.AddWithValue("@end", end);
                    command.Parameters.AddWithValue("@description", description);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }






        // 17 - select experience to update session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "GET",
           BodyStyle = WebMessageBodyStyle.WrappedRequest,
           ResponseFormat = WebMessageFormat.Json
        )]
        public Experience ExperienceUpdateDetail(int id)
        {
            Experience experience = new Experience();

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_experience_update", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        experience = new Experience()
                        {
                            ExperienceId = (int)dataReader[0],
                            ExperienceJobTitle = dataReader[1].ToString(),
                            ExperienceCompany = dataReader[2].ToString(),
                            ExperienceStart = dataReader[3].ToString(),
                            ExperienceEnd = dataReader[4].ToString(),
                            ExperienceDescription = dataReader[5].ToString()
                        };
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return experience;
        }




        // 18 - update experience session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int ExperienceUpdate(int id, string title, string company, string start, string end, string description)
        {
            int affected = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_update_experience", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    command.Parameters.AddWithValue("@title", title);
                    command.Parameters.AddWithValue("@company", company);
                    command.Parameters.AddWithValue("@start", start);
                    command.Parameters.AddWithValue("@end", end);
                    command.Parameters.AddWithValue("@description", description);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }



        // 19 - delete experience 
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int ExperienceDelete(int id)
        {
            int affected = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_delete_experience", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }




        // 20 - Select Jobseeker portfolio session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Portfolio> JSPortfolio()
        {
            List<Portfolio> list = new List<Portfolio>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_portfolio", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@uid", p.Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Portfolio portfolio;
                    while (dataReader.Read())
                    {
                        portfolio = new Portfolio()
                        {
                            PortfolioId = (int)dataReader[0],
                            PortfolioTitle = dataReader[2].ToString(),
                            PortfolioUrl = dataReader[3].ToString(),
                            PortfolioDescription = dataReader[4].ToString()
                        };
                        list.Add(portfolio);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }



        // 21 - insert experience session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int PortfolioInsert(string title, string url, string description)
        {
            int affected = 0;
            int id = MethodReusability.AutoId("auto_portfolio");
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_insert_portfolio", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@pid", id);
                    command.Parameters.AddWithValue("@uid", p.Session["UserId"].ToString());
                    command.Parameters.AddWithValue("@title", title);
                    command.Parameters.AddWithValue("@url", url);
                    command.Parameters.AddWithValue("@description", description);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }



        //22 - select experience to update session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "GET",
           BodyStyle = WebMessageBodyStyle.WrappedRequest,
           ResponseFormat = WebMessageFormat.Json
        )]
        public Portfolio PortfolioUpdateDetail(int id)
        {

            Portfolio portfolio = new Portfolio();

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_portfolio_update", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        portfolio = new Portfolio()
                        {
                            PortfolioId = (int)dataReader[0],
                            PortfolioTitle = dataReader[2].ToString(),
                            PortfolioUrl = dataReader[3].ToString()
                        };
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return portfolio;
        }




        // 23 - update experience session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int PortfolioUpdate(int id, string title, string url, string description)
        {
            int affected = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_update_porfolio", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@pid", id);
                    command.Parameters.AddWithValue("@title", title);
                    command.Parameters.AddWithValue("@url", url);
                    command.Parameters.AddWithValue("@description", description);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }




        //24 - delete experience 
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int PortfolioDelete(int id)
        {
            int affected = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_delete_portfolio", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }






        // 25 - Select Jobseeker skill session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Skill> JSSkill()
        {
            List<Skill> list = new List<Skill>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_skill", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@uid", p.Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Skill skill;
                    while (dataReader.Read())
                    {
                        skill = new Skill()
                        {
                            SkillId = (int)dataReader[0],
                            SkillName = dataReader[2].ToString(),
                            SkillLevel = dataReader[3].ToString()
                        };
                        list.Add(skill);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }




        // 26 - insert skill session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int SkillInsert(string skill, string level)
        {
            int affected = 0;
            int id = MethodReusability.AutoId("auto_skill");
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_insert_skill", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@sid", id);
                    command.Parameters.AddWithValue("@uid", p.Session["UserId"].ToString());
                    command.Parameters.AddWithValue("@skill", skill);
                    command.Parameters.AddWithValue("@level", level);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }





        //27 - select experience to update session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "GET",
           BodyStyle = WebMessageBodyStyle.WrappedRequest,
           ResponseFormat = WebMessageFormat.Json
        )]
        public Skill SkillUpdateDetail(int id)
        {

            Skill skill = new Skill();

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_skill_update", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        skill = new Skill()
                        {
                            SkillId = (int)dataReader[0],
                            SkillName = dataReader[2].ToString(),
                            SkillLevel = dataReader[3].ToString()
                        };
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return skill;
        }




        // 28 - update skill session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int SkillUpdate(int id, string skill, string level)
        {
            int affected = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_update_skill", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@sid", id);
                    command.Parameters.AddWithValue("@skill", skill);
                    command.Parameters.AddWithValue("@level", level);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }




        //29 - delete skill 
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int SkillDelete(int id)
        {
            int affected = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_delete_skill", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }



        // 30 - Select skill for dropdown
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<UsersSkill> SkillList()
        {
            List<UsersSkill> userSkill = new List<UsersSkill>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_list_skill", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        UsersSkill us = new UsersSkill() { SkillName = dataReader[0].ToString() };
                        userSkill.Add(us);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return userSkill;
        }



        // 31 - Select Jobseeker skill session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Certification> JSCertificate()
        {
            List<Certification> list = new List<Certification>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_certificate", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@uid", p.Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Certification certification;
                    while (dataReader.Read())
                    {
                        certification = new Certification()
                        {
                            CertificateId = (int)dataReader[0],
                            CertificateTitle = dataReader[1].ToString(),
                            CertificateDate = dataReader[2].ToString(),
                            CertificateDescription = dataReader[3].ToString()
                        };
                        list.Add(certification);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }




        // 32 - insert certificate session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int CertificateInsert(string certificate, string date, string description)
        {
            int affected = 0;
            int id = MethodReusability.AutoId("auto_certificate");
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_insert_certificate", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@cid", id);
                    command.Parameters.AddWithValue("@uid", p.Session["UserId"].ToString());
                    command.Parameters.AddWithValue("@certificate", certificate);
                    command.Parameters.AddWithValue("@date", date);
                    command.Parameters.AddWithValue("@description", description);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }





        //33 - select experience to update session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "GET",
           BodyStyle = WebMessageBodyStyle.WrappedRequest,
           ResponseFormat = WebMessageFormat.Json
        )]
        public Certification CertificateUpdateDetail(int id)
        {

            Certification certification = new Certification();

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_certificate_update", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        certification = new Certification()
                        {
                            CertificateId = (int)dataReader[0],
                            CertificateTitle = dataReader[1].ToString(),
                            CertificateDate = dataReader[2].ToString(),
                            CertificateDescription = dataReader[3].ToString()
                        };
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return certification;
        }




        // 34 - update skill session is given as a parameter
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int CertificateUpdate(int id, string certificate, string date, string description)
        {
            int affected = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_update_certificate", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@cid", id);
                    command.Parameters.AddWithValue("@certificate", certificate);
                    command.Parameters.AddWithValue("@date", date);
                    command.Parameters.AddWithValue("@description", description);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }




        //35 - delete certificate 
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int CertificateDelete(int id)
        {
            int affected = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_delete_certificate", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }

        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<Jobseeker> AdminGetJobSeeker()
        {
            List<Jobseeker> jobseeker = new List<Jobseeker>();
            try
            {
                using (connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    command = new SqlCommand("sp_select_js", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    connection.Open();
                    dataReader = command.ExecuteReader();
                    Jobseeker js;
                    while (dataReader.Read())
                    {
                        js = new Jobseeker()
                        {
                            JSId = (int)dataReader[0],
                            JSName = dataReader[1].ToString(),
                            JSLName = dataReader[2].ToString(),
                            JSEmail = dataReader[3].ToString(),
                            JSMobile = dataReader[4].ToString(),
                            JSStatus = dataReader[5].ToString()
                        };
                        jobseeker.Add(js);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return jobseeker;
        }

        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<Jobseeker> AdminGetEmployer()
        {
            List<Jobseeker> jobseeker = new List<Jobseeker>();
            try
            {
                using (connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    command = new SqlCommand("sp_select_empolyer_list", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    connection.Open();
                    dataReader = command.ExecuteReader();
                    Jobseeker js;
                    while (dataReader.Read())
                    {
                        js = new Jobseeker()
                        {
                            JSId = (int)dataReader[0],
                            JSName = dataReader[1].ToString(),
                            JSLName = dataReader[2].ToString(),
                            JSEmail = dataReader[3].ToString(),
                            JSMobile = dataReader[4].ToString(),
                            JSStatus = dataReader[5].ToString()
                        };
                        jobseeker.Add(js);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return jobseeker;
        }

        [OperationContract]
        [WebInvoke(Method = "POST",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public int UpdateProfile(string fname, string lname, string gender, string date, string cnic, string marital, string mobile, string mobile2, string address, int area, int experience, int career)
        {
            int affected = 0;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_update_profile", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@fname", fname);
                    command.Parameters.AddWithValue("@lname", lname);
                    command.Parameters.AddWithValue("@gender", gender);
                    command.Parameters.AddWithValue("@dob", date);
                    command.Parameters.AddWithValue("@cnic", cnic);
                    command.Parameters.AddWithValue("@marital_status", marital);
                    command.Parameters.AddWithValue("@area", area);
                    command.Parameters.AddWithValue("@address", address);
                    command.Parameters.AddWithValue("@mobile", mobile);
                    command.Parameters.AddWithValue("@phone", mobile2);
                    command.Parameters.AddWithValue("@experience", experience);
                    command.Parameters.AddWithValue("@career", career);
                    command.Parameters.AddWithValue("@id", p.Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }

        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<CompanyProfile> EmployerComapanyDetails()
        {
            List<CompanyProfile> list = new List<CompanyProfile>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_employer_company", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", p.Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        CompanyProfile companyprofile = new CompanyProfile()
                        {
                            CompanyId = (int)dataReader[0],
                            CompanyName = dataReader[1].ToString(),
                            CompanyHeadName = dataReader[2].ToString(),
                            CompanyWebsite = dataReader[3].ToString(),
                            CompanyPhone = dataReader[4].ToString(),
                            CompanyIndustry = dataReader[5].ToString(),
                            CompanyDetails = dataReader[6].ToString(),
                            CompanyAddress = dataReader[7].ToString(),
                            CompanyEmail = dataReader[8].ToString(),
                            CompanyLogo = dataReader[9].ToString()
                        };
                        list.Add(companyprofile);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }


            return list;
        }



        // dropdowns - experience years 
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<ExperienceYears> GetExperience()
        {
            List<ExperienceYears> list = new List<ExperienceYears>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_experienceyrs", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        ExperienceYears years = new ExperienceYears() { ExperienceId = (int)dataReader[0], ExperienceName = dataReader[1].ToString() };
                        list.Add(years);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }



        // dropdowns - ccareer level 
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<CareerLevel> GetCareerLevel()
        {
            List<CareerLevel> list = new List<CareerLevel>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_career", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        CareerLevel level = new CareerLevel() { CareerId = (int)dataReader[0], CareerName = dataReader[1].ToString() };
                        list.Add(level);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }


        // dropdowns - qualification
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Qualification> GetQualification()
        {
            List<Qualification> list = new List<Qualification>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_qualification", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        Qualification qualification = new Qualification() { QualificationId = (int)dataReader[0], QualificationName = dataReader[1].ToString() };
                        list.Add(qualification);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }


        // dropdowns - companies
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<CompanyProfile> GetCompanies()
        {
            List<CompanyProfile> list = new List<CompanyProfile>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_company_list", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        CompanyProfile company = new CompanyProfile() { CompanyId = (int)dataReader[0], CompanyName = dataReader[2].ToString() };
                        list.Add(company);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }


        // dropdowns - ccareer level 
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<JobType> GetJobType()
        {
            List<JobType> list = new List<JobType>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_jobtype", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        JobType type = new JobType() { JobTypeId = (int)dataReader[0], JobTypeName = dataReader[1].ToString() };
                        list.Add(type);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }



        // dropdowns - category 
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<JobCategory> GetCategory()
        {
            List<JobCategory> list = new List<JobCategory>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_Category_dd", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        JobCategory type = new JobCategory() { CategoryId = (int)dataReader[0], CategoryName = dataReader[1].ToString() };
                        list.Add(type);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }
        // dropdowns - sub category
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<JobSubCategory> GetSubCategory(int id)
        {
            List<JobSubCategory> list = new List<JobSubCategory>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_subCategory_dd", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        JobSubCategory type = new JobSubCategory() { SubCategoryId = (int)dataReader[0], SubCategoryName = dataReader[1].ToString() };
                        list.Add(type);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }


        // dropdowns - sub category
        [OperationContract]
        [WebInvoke(Method = "POST",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public int JobInsert(int cid, string title, string description, string skill, int area, int careerlevel, int salaryfrom, int salaryto, string shift, int type, int experience, int degree, string gender, int position, string applydate, string category)
        {
            int affected = 0;
            try
            {
                using (connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    int jid = MethodReusability.AutoId("auto_jobpost");
                    int company = MethodReusability.ReturnSingleIntValue("sp_select_company_id", "@id", p.Session["UserId"].ToString());

                    command = new SqlCommand("sp_insert_job", connection);

                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", jid);
                    command.Parameters.AddWithValue("@cid", cid);
                    command.Parameters.AddWithValue("@title", title);
                    command.Parameters.AddWithValue("@description", description);
                    command.Parameters.AddWithValue("@skill", skill);
                    command.Parameters.AddWithValue("@area", area);
                    command.Parameters.AddWithValue("@careerlevel", careerlevel);
                    command.Parameters.AddWithValue("@salaryfrom", salaryto);
                    command.Parameters.AddWithValue("@salaryto", salaryfrom);
                    command.Parameters.AddWithValue("@shift", shift);
                    command.Parameters.AddWithValue("@type", type);
                    command.Parameters.AddWithValue("@experience", experience);
                    command.Parameters.AddWithValue("@degree", degree);
                    command.Parameters.AddWithValue("@gender", gender);
                    command.Parameters.AddWithValue("@position", position);
                    command.Parameters.AddWithValue("@applydate", applydate);
                    command.Parameters.AddWithValue("@addedon", DateTime.Now);
                    command.Parameters.AddWithValue("@status", "Pending");
                    command.Parameters.AddWithValue("@category", category);
                    connection.Open();
                    affected = command.ExecuteNonQuery();
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return affected;
        }


        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Job> EmployerJob()
        {
            List<Job> list = new List<Job>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_employer_job", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", p.Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        Job job = new Job()
                        {
                            JobId = (int)dataReader[0],
                            JobTitle = dataReader[1].ToString(),
                            JobSkill = dataReader[2].ToString(),
                            JobPosition = (int)dataReader[3],
                            JobStatus = dataReader[4].ToString(),
                            JobApplyDate = dataReader[5].ToString(),
                            JobURL = "JobId=" + dataReader[0].ToString() + "&JobName=" + dataReader[1].ToString()
                        };
                        list.Add(job);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }

        [OperationContract]
        [WebInvoke(Method = "GET",
           BodyStyle = WebMessageBodyStyle.WrappedRequest,
           ResponseFormat = WebMessageFormat.Json
        )]
        public List<JobseekerResume> EmployerJobApplicants(int id)
        {
            List<JobseekerResume> list = new List<JobseekerResume>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_employer_job_applicants", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@jid", id);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        JobseekerResume applicants = new JobseekerResume()
                        {
                            UserImage = dataReader[1].ToString(),
                            UserName = dataReader[2].ToString(),
                            UserEmail = dataReader[3].ToString(),
                            UserMobile = dataReader[4].ToString(),
                            DateApplying = dataReader[5].ToString(),
                            UserSkill = dataReader[6].ToString()
                        };
                        list.Add(applicants);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }




        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<Job> AdminGetApprovedJob()
        {
            List<Job> list = new List<Job>();
            try
            {
                using (connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    command = new SqlCommand("sp_select_job_approved_list", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    connection.Open();
                    dataReader = command.ExecuteReader();
                    Job job;
                    while (dataReader.Read())
                    {
                        job = new Job()
                        {
                            JobLogo = dataReader[0].ToString(),
                            JobId = (int)dataReader[1],
                            JobTitle = dataReader[2].ToString(),
                            CompanyName = dataReader[3].ToString(),
                            UserName = dataReader[4].ToString(),
                            UserEmail = dataReader[5].ToString(),
                            JobStatus = dataReader[6].ToString(),
                            JobAddedDate = dataReader[7].ToString(),
                            JobApplyDate = dataReader[8].ToString()
                        };
                        list.Add(job);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return list;
        }


        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<Job> AdminGetPendingJob()
        {
            List<Job> list = new List<Job>();
            try
            {
                using (connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    command = new SqlCommand("sp_select_job_pending_list", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    connection.Open();
                    dataReader = command.ExecuteReader();
                    Job job;
                    while (dataReader.Read())
                    {
                        job = new Job()
                        {
                            JobLogo = dataReader[0].ToString(),
                            JobId = (int)dataReader[1],
                            JobTitle = dataReader[2].ToString(),
                            CompanyName = dataReader[3].ToString(),
                            UserName = dataReader[4].ToString(),
                            UserEmail = dataReader[5].ToString(),
                            JobStatus = dataReader[6].ToString(),
                            JobAddedDate = dataReader[7].ToString(),
                            JobApplyDate = dataReader[8].ToString()
                        };
                        list.Add(job);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return list;
        }

        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int CountJ()
        {
            int count = 0;
            try
            {
                count = MethodReusability.ReturnSingleIntValue("sp_count_jobseeker");
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return count;
        }


        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int CountE()
        {
            int count = 0;
            try
            {
                count = MethodReusability.ReturnSingleIntValue("sp_count_employer");
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return count;
        }

        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int CountAJ()
        {
            int count = 0;
            try
            {
                count = MethodReusability.ReturnSingleIntValue("sp_count_approved");
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return count;
        }

        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public int CountPJ()
        {
            int count = 0;
            try
            {
                count = MethodReusability.ReturnSingleIntValue("sp_count_pending");
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return count;
        }


        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<Attachment> JobseekerAttachment()
        {
            List<Attachment> list = new List<Attachment>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_attachment", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", p.Session["UserId"].ToString());
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        Attachment attachment = new Attachment() { AttachmentId = (int)dataReader[0], AttachmentName = dataReader[1].ToString(), AttachmentLocation = dataReader[1].ToString() };
                        list.Add(attachment);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }


        //  2 - All Resumes
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<JobseekerResume> Resumes()
        {
            List<JobseekerResume> list = new List<JobseekerResume>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_resume", connection);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    JobseekerResume resume;
                    while (dataReader.Read())
                    {
                        resume = new JobseekerResume()
                        {
                            UserImage = dataReader[1].ToString(),
                            UserName = dataReader[2].ToString(),
                            UserEmail = dataReader[3].ToString(),
                            UserMobile = dataReader[4].ToString(),
                            UserLocation = dataReader[5].ToString(),
                            UserAge = dataReader[6].ToString(),
                            UserSkill = dataReader[7].ToString()
                        };
                        list.Add(resume);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return list;
        }



        //  2 - Candidate Resumes Details
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public Summary SummaryDetail(string email)
        {

            Summary summary = new Summary();

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_summary", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@mail", email);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        summary = new Summary()
                        {
                            SummaryDetails = dataReader[0].ToString(),
                        };
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return summary;
        }

        //Education
        [OperationContract]
        [WebInvoke(Method = "GET",
            BodyStyle = WebMessageBodyStyle.WrappedRequest,
            ResponseFormat = WebMessageFormat.Json
         )]
        public List<Education> ResumeEducation(string email)
        {
            List<Education> list = new List<Education>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_resume_education", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@mail", email);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Education education;
                    while (dataReader.Read())
                    {
                        education = new Education()
                        {
                            EducationDegreeLevel = dataReader[0].ToString(),
                            EducationOther = dataReader[1].ToString(),
                            EducationResult = dataReader[2].ToString(),
                            EducationCompletion = dataReader[3].ToString(),
                            EducationInsitute = dataReader[4].ToString()
                        };
                        list.Add(education);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }

        //Experience
        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<Experience> ResumeExperience(string email)
        {
            List<Experience> list = new List<Experience>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_resume_experience", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@mail", email);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Experience experience;
                    while (dataReader.Read())
                    {
                        experience = new Experience()
                        {
                            ExperienceJobTitle = dataReader[0].ToString(),
                            ExperienceCompany = dataReader[1].ToString(),
                            ExperienceStart = dataReader[2].ToString(),
                            ExperienceEnd = dataReader[3].ToString(),
                            ExperienceDescription = dataReader[4].ToString(),
                        };
                        list.Add(experience);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }

        //Profolio
        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<Portfolio> ResumePortfolio(string email)
        {
            List<Portfolio> list = new List<Portfolio>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_resume_portfolio", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@mail", email);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Portfolio portfolio;
                    while (dataReader.Read())
                    {
                        portfolio = new Portfolio()
                        {
                            PortfolioTitle = dataReader[0].ToString(),
                            PortfolioUrl = dataReader[1].ToString(),
                            PortfolioDescription = dataReader[2].ToString()
                        };
                        list.Add(portfolio);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }

        //certification
        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<Certification> ResumeCertificate(string email)
        {
            List<Certification> list = new List<Certification>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_resume_certificate", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@mail", email);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Certification certification;
                    while (dataReader.Read())
                    {
                        certification = new Certification()
                        {
                            CertificateTitle = dataReader[0].ToString(),
                            CertificateDate = dataReader[1].ToString(),
                            CertificateDescription = dataReader[2].ToString()
                        };
                        list.Add(certification);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }

        //skill
        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<Skill> ResumeSkill(string email)
        {
            List<Skill> list = new List<Skill>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_resume_skill", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@mail", email);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    Skill skill;
                    while (dataReader.Read())
                    {
                        skill = new Skill()
                        {
                            SkillName = dataReader[0].ToString(),
                            SkillLevel = dataReader[1].ToString()
                        };
                        list.Add(skill);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }


        //checking email validating
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public string EmailValidation(string email)
        {
            string returnMessage = null;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_email_validation", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@mail", email);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    int returnRow = (int)command.ExecuteScalar();
                    if (returnRow == 1)
                    {

                        string name = MethodReusability.ReturnSingleValue("sp_select_user_name_from_email", "@mail", email);
                        int code = RecoveryCode(email);
                        //string encrypt = MethodReusability.Encrypt(email, "sblw-3hn8-sqoy19");
                        SendForgotPasswordEmail(name, code, email);
                        returnMessage = "Please check your email for a message with recovery link.";
                    }
                    else if (returnRow == 1)
                    {
                        returnMessage = "Invalid Email.";
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return returnMessage;
        }

        #region Email Recovery Region
        private string ForgotPasswordBody(string username, int code)
        {
            Page pag = new Page();
            string body = string.Empty;
            using (StreamReader reader = new StreamReader(pag.Server.MapPath("~/ForgotPassword.html")))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{UserName}", username);
            body = body.Replace("{code}", code.ToString());
            //body = body.Replace("{encryptedMail}", encryptedMail);
            return body;
        }

        private void SendForgotPasswordEmail(string username, int code, string recepientEmail)
        {
            //using (MailMessage mailMessage = new MailMessage())
            //{
            //    mailMessage.From = new MailAddress(ConfigurationManager.AppSettings["UserName"]);
            //    mailMessage.Subject = code + " is your Jobs ACE account recovery code";
            //    mailMessage.Body = ForgotPasswordBody(username, code);
            //    mailMessage.IsBodyHtml = true;
            //    mailMessage.To.Add(new MailAddress(recepientEmail));
            //    SmtpClient smtp = new SmtpClient();
            //    smtp.Host = ConfigurationManager.AppSettings["Host"];
            //    smtp.EnableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableSsl"]);
            //    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            //    NetworkCredential NetworkCred = new NetworkCredential();
            //    NetworkCred.UserName = ConfigurationManager.AppSettings["UserName"];
            //    NetworkCred.Password = ConfigurationManager.AppSettings["Password"];
            //    smtp.UseDefaultCredentials = Convert.ToBoolean(ConfigurationManager.AppSettings["DefaultCredentials"]);
            //    smtp.Credentials = NetworkCred;
            //    smtp.Port = int.Parse(ConfigurationManager.AppSettings["Port"]);
            //    smtp.Send(mailMessage);
            //}
        }

        private int RecoveryCode(string email)
        {
            Random rnd = new Random();
            int code = rnd.Next(100000, 999999);
            int RecoveryId = MethodReusability.AutoId("sp_recoveryId");
            int UserId = MethodReusability.ReturnSingleIntValue("sp_select_user_id", "@mail", email);
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_insert_recovery_code", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@recoveryid", RecoveryId);
                    command.Parameters.AddWithValue("@userid", UserId);
                    command.Parameters.AddWithValue("@recoverycode", code);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    int returnRow = (int)command.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                MethodReusability.ErrorMessage(ex);
            }
            return code;
        }
        #endregion


        //checking 6 digit code        
        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public string PasswordCode(int code)
        {
            string matchMessage = null;
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_user_recovery_code", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@code", code);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    int returnRow = (int)command.ExecuteScalar();
                    if (returnRow > 0)
                    {
                        matchMessage = "1";
                        p.Session["PasswordId"] = returnRow.ToString();

                    }
                    else if (returnRow == -1)
                    {
                        matchMessage = "-1";
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return matchMessage;
        }


        [OperationContract]
        [WebInvoke(Method = "POST",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public void ActivationLink(string email)
        {
            int id = MethodReusability.ReturnSingleIntValue("sp_select_user_id", "@mail", email);
            string name = MethodReusability.ReturnSingleValue("sp_select_user_name_from_email", "@mail", email);
            SendActivationCode(id, email, name);
        }


        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public string ApprovedJob(int id)
        {
            string message = null;
            string email, name, jobtitle, date;
            email = MethodReusability.ReturnSingleValue("sp_select_job_email_address", "@id", id);
            name = MethodReusability.ReturnSingleValue("sp_select_job_email_name", "@id", id);
            jobtitle = MethodReusability.ReturnSingleValue("sp_select_job_email_title", "@id", id);
            date = MethodReusability.ReturnSingleValue("sp_select_job_email_date", "@id", id);

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_update_job_status", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    command.Parameters.AddWithValue("@status", "Approved");
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    int returnRow = command.ExecuteNonQuery();
                    if (returnRow > 0)
                    {
                        message = "1";
                        SendApprovalEmail(email, name, jobtitle, date);
                    }
                    else
                    {
                        message = "-1";
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return message;
        }
        #region Email APPROVAL EMAIL BODY
        private string JobPopulateBody(string name, string jobtitle, string date)
        {
            Page pag = new Page();
            string body = string.Empty;
            using (StreamReader reader = new StreamReader(pag.Server.MapPath("~/JobApproved.html")))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{UserName}", name);
            body = body.Replace("{jobtitle}", jobtitle);
            body = body.Replace("{date}", date);
            return body;
        }

        private void SendApprovalEmail(string recepientEmail, string name, string jobtitle, string date)
        {
            //using (MailMessage mailMessage = new MailMessage())
            //{
            //    mailMessage.From = new MailAddress(ConfigurationManager.AppSettings["UserName"]);
            //    mailMessage.Subject = "Jobs ACE - Job Approved";
            //    mailMessage.Body = JobPopulateBody(name, jobtitle, date);
            //    mailMessage.IsBodyHtml = true;
            //    mailMessage.To.Add(new MailAddress(recepientEmail));
            //    SmtpClient smtp = new SmtpClient();
            //    smtp.Host = ConfigurationManager.AppSettings["Host"];
            //    smtp.EnableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableSsl"]);
            //    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
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

        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public string RejectJob(int id)
        {
            string message = null;
            string email, name, jobtitle, date;
            email = MethodReusability.ReturnSingleValue("sp_select_job_email_address", "@id", id);
            name = MethodReusability.ReturnSingleValue("sp_select_job_email_name", "@id", id);
            jobtitle = MethodReusability.ReturnSingleValue("sp_select_job_email_title", "@id", id);
            date = MethodReusability.ReturnSingleValue("sp_select_job_email_date", "@id", id);

            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_update_job_status", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", id);
                    command.Parameters.AddWithValue("@status", "Approved");
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    int returnRow = command.ExecuteNonQuery();
                    if (returnRow > 0)
                    {
                        message = "1";
                        SendRejectEmail(email, name, jobtitle, date);
                    }
                    else
                    {
                        message = "-1";
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
            return message;
        }
        #region Email APPROVAL EMAIL BODY
        private string JobPopulateRejectBody(string name, string jobtitle, string date)
        {
            Page pag = new Page();
            string body = string.Empty;
            using (StreamReader reader = new StreamReader(pag.Server.MapPath("~/JobApproved.html")))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{UserName}", name);
            body = body.Replace("{jobtitle}", jobtitle);
            body = body.Replace("{date}", date);
            return body;
        }

        private void SendRejectEmail(string recepientEmail, string name, string jobtitle, string date)
        {
            //using (MailMessage mailMessage = new MailMessage())
            //{
            //    mailMessage.From = new MailAddress(ConfigurationManager.AppSettings["UserName"]);
            //    mailMessage.Subject = "Jobs ACE - Job Approved";
            //    mailMessage.Body = JobPopulateRejectBody(name, jobtitle, date);
            //    mailMessage.IsBodyHtml = true;
            //    mailMessage.To.Add(new MailAddress(recepientEmail));
            //    SmtpClient smtp = new SmtpClient();
            //    smtp.Host = ConfigurationManager.AppSettings["Host"];
            //    smtp.EnableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableSsl"]);
            //    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
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



        //company list
        [OperationContract]
        [WebInvoke(Method = "GET",
        BodyStyle = WebMessageBodyStyle.WrappedRequest,
        ResponseFormat = WebMessageFormat.Json
        )]
        public List<CompanyProfile> CompanyList()
        {
            List<CompanyProfile> list = new List<CompanyProfile>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_admin_companies", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@id", p.Session["UserId"]);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    CompanyProfile company;
                    while (dataReader.Read())
                    {
                        company = new CompanyProfile()
                        {
                            CompanyId = (int)dataReader[0],
                            CompanyLogo = dataReader[1].ToString(),
                            CompanyName = dataReader[2].ToString()
                        };
                        list.Add(company);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }

        //jobseeker job Application
        [OperationContract]
        [WebInvoke(Method = "GET",
           BodyStyle = WebMessageBodyStyle.WrappedRequest,
           ResponseFormat = WebMessageFormat.Json
        )]
        public List<JobseekerApplication> JobseekerJobApplicants(string email)
        {
            List<JobseekerApplication> list = new List<JobseekerApplication>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    SqlCommand command = new SqlCommand("sp_select_job_application", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@email", email);
                    if (connection.State != ConnectionState.Open) { connection.Open(); }
                    SqlDataReader dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        JobseekerApplication applicants = new JobseekerApplication()
                        {
                            ApplicationCompanyLogo = dataReader[0].ToString(),
                            ApplicationTitle = dataReader[1].ToString(),
                            ApplicationCompanyName = dataReader[2].ToString(),
                            ApplicationCVTitle = dataReader[3].ToString(),
                            ApplicationApplyDate = dataReader[4].ToString(),
                            ApplicationLink = dataReader[5].ToString()
                        };
                        list.Add(applicants);
                    }
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }

            return list;
        }



    }
}
