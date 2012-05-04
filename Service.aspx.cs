using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Service : System.Web.UI.Page
{
    protected string RequestType { get; set; }
    protected string Data { get; set; }    

    protected void Page_Load(object sender, EventArgs e)
    {
        RequestType = Request.QueryString["type"] ?? "";
        Data = Request.QueryString["data"] ?? "";

        BindData();
    }

    private void BindData()
    {
        if (!string.IsNullOrEmpty(RequestType))
        {
            switch (RequestType)
            {
                case "compare": Session["ItemBucket"] = Data; break;
                case "clearall": Session["ItemBucket"] = string.Empty; break;
            }
        }

        if (Session["ItemBucket"] != null)
        {
            //load configured session here
        }
    }
}