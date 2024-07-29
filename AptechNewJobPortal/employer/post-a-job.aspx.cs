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

namespace AptechNewJobPortal.employer
{
    public partial class post_a_job : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/employer/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }

            PostContent.Visible = false;
            CompanyContentMessage.Visible = false;

            if (MethodReusability.ReturnSingleIntValue("sp_select_check_company", "@id", Session["UserId"].ToString()) > 0)
            {
                PostContent.Visible = true;
                CompanyContentMessage.Visible = false;
                txt_Company.Text = MethodReusability.ReturnSingleValue("sp_select_company_name", "@id", Session["UserId"].ToString());
                HiddenCompany.Value = MethodReusability.ReturnSingleIntValue("sp_select_company_id", "@id", Session["UserId"].ToString()).ToString();
            }
            else
            {
                PostContent.Visible = false;
                CompanyContentMessage.Visible = true;
            }
        }





    }
}