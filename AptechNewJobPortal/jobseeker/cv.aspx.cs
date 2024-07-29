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
using System.IO;
using System.Net;

namespace AptechNewJobPortal.jobseeker
{
    public partial class cv : System.Web.UI.Page
    {
        SqlConnection connection;
        SqlCommand command;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/jobseeker/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }
        }

        protected void lnkDownload_Click(object sender, EventArgs e)
        {
            try
            {
                LinkButton btn = (LinkButton)sender;
                string fileName = btn.CommandArgument;

                string path = "../upload/" + fileName;

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

        protected void lnkDelete_Click(object sender, EventArgs e)
        {
            try
            {
                LinkButton btn = (LinkButton)sender;
                string id = btn.CommandArgument;
                using (connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    command = new SqlCommand("sp_delete_attachment", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@userid", Session["UserId"].ToString());
                    command.Parameters.AddWithValue("@id", id);
                    connection.Open();
                    int count = (int)command.ExecuteScalar();
                    if (count > 0)
                    {
                        // 1 for deleted
                        HiddenResult.Value = "1";
                        Response.Redirect(Request.RawUrl);
                    }
                    else
                    {
                        // 0 for not deleted
                        HiddenResult.Value = "0";
                    }
                    connection.Close();
                }
            }
            catch (Exception ex)
            {
                MethodReusability.ErrorMessage(ex);
            }
        }

        protected void btnUpload_Click(object sender, EventArgs e)
        {
            try
            {
                int attachid = MethodReusability.AutoId("auto_attachment");

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
                    // 11 for inserted
                    HiddenResult.Value = "11";
                    Response.Redirect(Request.RawUrl);
                }
            }
            catch (Exception ex) { MethodReusability.ErrorMessage(ex); }
        }

        protected void lnkDefault_Click(object sender, EventArgs e)
        {
            try
            {
                LinkButton btn = (LinkButton)sender;
                string id = btn.CommandArgument;
                Response.Write(id);
                using (connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db_job_portalConnectionString"].ConnectionString))
                {
                    command = new SqlCommand("sp_update_attachment_status", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@uid", Session["UserId"].ToString());
                    command.Parameters.AddWithValue("@aid", id);
                    connection.Open();
                    int count = (int)command.ExecuteNonQuery();
                    if (count > 0)
                    {
                        // 1 for deleted
                        HiddenResult.Value = "1";
                        Response.Redirect(Request.RawUrl);
                    }
                    else
                    {
                        // 0 for not deleted
                        HiddenResult.Value = "0";
                    }
                    connection.Close();
                }
            }
            catch (Exception ex)
            {
                MethodReusability.ErrorMessage(ex);
            }
        }
    }
}