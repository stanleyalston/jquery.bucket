(function ($) {
    $.fn.bucket = function (options) {
        var container = '#' + options.container;
        var compareButton = '#' + options.compareButton;
        var clearButton = '#' + options.clearButton;
        var checkBoxClass = '.' + options.checkBoxClass;
		var checkBoxId = '#' + options.checkBoxId + '-';
        var recordLength = options.recordLength;
		var servicePage = options.servicePage;
		var receiverPage = options.receiverPage;

        //toggle adding and removing of car in bucket
        $(checkBoxClass + '[rel="compare"]').live("click", function () {
            var data = $(this).attr("value");
            var record = data.split('|');

            if (record.length <= recordLength) {
                if ($(this).is(":checked")) {
                    var name = record[1] + " " + record[2] + " " + record[3];
                    var output = displayComparisonCart(record[0], name, record[4]);

                    $(container).append(output);
                }
                else {
                    $("#compared-index-" + record[4]).remove();
                }
            }
            else {
                console.log("please configure identified data items");
            }
        });

        //remove item from bucket using delete link
        $('#delete-comparison[rel="delete"]').live('click', function (e) {
            e.preventDefault();          

	    var id = $(this).attr("value");	    

            $("#compared-index-" + id).remove();
            $(checkBoxId + id).attr("checked", false);	    
        });

        //compare button
        $(compareButton).click(function () {
            var a = "";
            $('.comparison-list[rel="comparison"]').each(function () {
                a += $(this).attr("value") + "|"
            });

            invokeService("type=compare&data=" + a, true, servicePage, receiverPage);
        });

        //clear button
        $(clearButton).click(function () {
            $(container).empty();
            $(checkBoxClass + '[rel="compare"]').attr("checked", false);
            
			if($(container).text() != ""){
				invokeService("type=clearall", false, servicePage, null);
			}
        });
    };

    function invokeService(param, isComparison, servicePage, receiverPage) {
        $.ajax({
            url: "/" + servicePage,
            data: param,
            success: function (data) {
                if (isComparison) {
                    window.location = receiverPage
                }
            },
            error: function (x, t, e) {
                console.log("error");
            }
        });
    }

    function displayComparisonCart(value, name, id) {
        var output = "<div id=\"compared-index-" + id + "\" class=\"comparison-list\" ";
        output += "rel=\"comparison\" value=\"" + value + "\">";
        output += "<div class=\"comparison-name\">" + name + "</div>";
        output += "<div class=\"comparison-divider\">|</div>";
        output += "<div id=\"delete-comparison\" rel=\"delete\" ";
        output += "value=\"" + id + "\">Delete</div>";
        output += "</div>";

        return output;
    }
})(jQuery);
