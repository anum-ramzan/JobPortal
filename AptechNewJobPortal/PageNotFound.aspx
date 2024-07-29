<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PageNotFound.aspx.cs" Inherits="AptechNewJobPortal.PageNotFound" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Page Not Found - Jobs ACE</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />

    <link rel="icon" href="/Images/aptech.ico" />
    <link href="/Content/bootstrap.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet" />
    <style>
        body {
            color: #fff;
            background-color: #000;
            font-family: 'Lato', sans-serif;
        }

        img {
            width: 250px;
            margin: 100px auto 0;
        }

        h1, h3, p {
            font-weight: 700;
        }

        h1 {
            font-size: 95px;
            margin: 100px auto 0;
            color: #0b3bca;
        }

        h3 {
            font-size: 40px;
            margin-top: 50px;
            padding-top: 30px;
        }

        h3 {
            margin-top: 30px;
            padding-top: 30px;
        }

        p {
            margin: 10px 0;
            padding-top: 15px;
            padding-bottom: 15px;
        }

        a {
            background-color: #c4ce31;
            padding: 15px 25px;
            color: #000;
            font-weight: 700;
            text-decoration: none;
            margin-top: 10px;
            display: block;
        }

            a:focus,
            a:active,
            a:hover {
                color: #000;
                text-decoration: underline;
            }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-7">
                    <h1>404</h1>
                    <h3>PAGE NOT FOUND</h3>
                    <p>THE PAGE YOU ARE LOOKING FOR WAS MOVED, RENAMED OR MIGHT NEVER EXISTED.</p>
                    <a href="default.aspx">Go Back To Home</a>
                </div>
                <div class="col-md-4 col-sm-5">
                    <img src="Images/notfound.png" />
                </div>
            </div>
        </div>
    </form>
</body>
</html>
