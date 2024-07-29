using AptechNewJobPortal.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AptechNewJobPortal
{
    public partial class _default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!Page.IsPostBack)
            {
                Label1.Text = MethodReusability.CounterTotal("sp_select_count_js").ToString();
                Label2.Text = MethodReusability.CounterTotal("sp_select_count_emp").ToString();
                Label3.Text = MethodReusability.CounterTotal("sp_select_count_jp").ToString();
                Label4.Text = MethodReusability.CounterTotal("sp_select_count_ja").ToString();

            }
        }
    }
}