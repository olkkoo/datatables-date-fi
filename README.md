# Datatables-date-fi

This sorting plug-in for DataTables will correctly sort data in date
format typically used in Finland - `dd.mm.YYYY`. Plug-in offers 
also sorting for date range in the format of `dd.mm.YYYY - dd.mm.YYYY`
Based on de_datetime by [Ronny Vedrilla](http://www.ambient-innovation.com)

## Example

	$('#example').dataTable( {
		"columnDefs": [
		    { "type": 'fi_date', "targets": 0 },
	        { "type": 'fi_date_range', "targets": 1}
        ]
    } );
    