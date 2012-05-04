<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Item Bucket Plugin Demo</title>
    <link href="Styles/Default.css" rel="stylesheet" type="text/css" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>    
    <script src="Scripts/jquery.bucket.js" type="text/javascript"></script>  
    <script>
        $(function () {
            $("#container").bucket({
                contaner: "container",
                compareButton: "compare-button",
                clearButton: "clear-all",
                checkBoxClass: "check-compare",
                recordLength: 5
            });
        });
    </script>  
</head>
<body>
    <div id="container"></div><br/><br/>
    <div id="compare-button">Compare</div>
    <div id="clear-all">Clear</div><br /><br />
        
	<input type="checkbox" rel="compare" class="check-compare" 
	value="field11|field12|field13|field14|2331" id="check-compare-index-2331"/>Compare          
		
	<br/>
		
	<input type="checkbox" rel="compare" class="check-compare" 
	value="field21|field22|field23|field24|2332" id="check-compare-index-2332"/>Compare          
		
	<br/>
		
	<input type="checkbox" rel="compare" class="check-compare" 
	value="field31|field32|field33|field34|2333" id="check-compare-index-2333"/>Compare          
		
	<br/>
		
	<input type="checkbox" rel="compare" class="check-compare" 
	value="field41|field42|field43|field44|2334" id="check-compare-index-2334"/>Compare          
		
	<br/>		
</body>
</html>
