    String.prototype.format = function () {
		var retVal = this;

		[].slice.call(arguments).forEach(function (arg, i) {
			retVal = retVal.split('{' + i + '}').join(arg !== null && typeof (arg) !== 'undefined' ? arg : '');
		});

		return retVal;
	};