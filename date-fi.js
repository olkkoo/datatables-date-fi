/**
 * This sorting plug-in for DataTables will correctly sort data in date
 * format typically used in Finland - `dd.mm.YYYY`. Plug-in offers 
 * also sorting for date range in the format of `dd.mm.YYYY - dd.mm.YYYY`
 * Based on de_datetime by [Ronny Vedrilla](http://www.ambient-innovation.com)
 *
 *  @name Date (dd.mm.YYYY)
 *  @summary Sort date or date range in the format `dd.mm.YYYY `.
 *  @author [Pekka Huhtala]
 *
 *  @example
 *    $('#example').dataTable( {
 *       "columnDefs": [
 *         { "type": 'fi_date', "targets": 0 },
 *         { "type": 'fi_date_range', "targets": 1}
 *       ]
 *    } );
 */

 jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"fi_date-asc": function ( a, b ) {
		var x, y;
		if ($.trim(a) !== '') {
			var deDatea = $.trim(a).split(' ');
			var deDatea2 = deDatea[0].split('.');
			x = (deDatea2[2] + deDatea2[1] + deDatea2[0]) * 1;
		} else {
			x = Infinity; // = l'an 1000 ...
		}

		if ($.trim(b) !== '') {
			var deDateb = $.trim(b).split(' ');
			deDateb = deDateb[0].split('.');
			y = (deDateb[2] + deDateb[1] + deDateb[0]) * 1;
		} else {
			y = Infinity;
		}
		var z = ((x < y) ? -1 : ((x > y) ? 1 : 0));
		return z;
	},

	"fi_date-desc": function ( a, b ) {
		var x, y;
		if ($.trim(a) !== '') {
			var deDatea = $.trim(a).split(' ');
			var deDatea2 = deDatea[0].split('.');
			x = (deDatea2[2] + deDatea2[1] + deDatea2[0]) * 1;
		} else {
			x = Infinity;
		}

		if ($.trim(b) !== '') {
			var deDateb = $.trim(b).split(' ');
			deDateb = deDateb[0].split('.');
			y = (deDateb[2] + deDateb[1] + deDateb[0]) * 1;
		} else {
			y = Infinity;
		}
		var z = ((x < y) ? 1 : ((x > y) ? -1 : 0));
		return z;
	}
} );

 jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"fi_date_range-asc": function ( a, b ) {
		var x, y;
		if ($.trim(a) !== '') {
			var deDatea = $.trim(a).split(' ');
			var deDatea2 = deDatea[2].split('.');
			x = (deDatea2[2] + deDatea2[1] + deDatea2[0]) * 1;
		} else {
			x = Infinity; // = l'an 1000 ...
		}

		if ($.trim(b) !== '') {
			var deDateb = $.trim(b).split(' ');
			deDateb = deDateb[2].split('.');
			y = (deDateb[2] + deDateb[1] + deDateb[0]) * 1;
		} else {
			y = Infinity;
		}
		var z = ((x < y) ? -1 : ((x > y) ? 1 : 0));
		return z;
	},

	"fi_date_range-desc": function ( a, b ) {
		var x, y;
		if ($.trim(a) !== '') {
			var deDatea = $.trim(a).split(' ');
			var deDatea2 = deDatea[2].split('.');
			x = (deDatea2[2] + deDatea2[1] + deDatea2[0]) * 1;
		} else {
			x = Infinity;
		}

		if ($.trim(b) !== '') {
			var deDateb = $.trim(b).split(' ');
			deDateb = deDateb[2].split('.');
			y = (deDateb[2] + deDateb[1] + deDateb[0]) * 1;
		} else {
			y = Infinity;
		}
		var z = ((x < y) ? 1 : ((x > y) ? -1 : 0));
		return z;
	}
} );


