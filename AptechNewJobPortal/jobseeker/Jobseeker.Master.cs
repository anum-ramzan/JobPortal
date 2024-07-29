using AptechNewJobPortal.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AptechNewJobPortal.jobseeker
{
    public partial class Jobseeker : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] == null)
            {
                string OriginalUrl = HttpContext.Current.Request.RawUrl;
                string LoginPageUrl = "~/jobseeker/login.aspx";
                HttpContext.Current.Response.Redirect(String.Format("{0}?ReturnUrl={1}", LoginPageUrl, OriginalUrl));
            }
            else
            {
                P1.InnerText = MethodReusability.ReturnSingleValue("sp_select_fullname", "@id", Session["userId"].ToString());
                Img1.Src = MethodReusability.ReturnSingleValue("sp_select_prrofike_image", "@id", Session["userId"].ToString());
            }
        }
    }
}