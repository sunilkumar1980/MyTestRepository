using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Telerik.Reporting;
using TestReport;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            var reportBook = new ReportBook();
            reportBook.Reports.Add(new Report1());
            reportBook.Reports.Add(new Report3());

            var reportSource = new InstanceReportSource();
            reportSource.ReportDocument = reportBook;

            ReportViewer1.ReportSource = reportSource;
        }
    }
}