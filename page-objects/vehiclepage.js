function fillDataCapture(client) {
	var qs = client.globals.getQuestions("pre-quote-vehicle");
	client.setValue('#dvlaregistration', 'FW12FFB');
	client.click('#dvlaregistration_findVehicle');
	client.waitForElementPresent('#makeAndModel', 5000);
	for (var i = 0; i < qs.length; i++) {
		var q = qs[i];
		evaluateValueBasedOnType(client, q);
	}


}

function evaluateValueBasedOnType(driver, question) {
	driver.element('id', question.id, function (res) {

		driver.getTagName('#' + question.id, function (tagName) {

			if (tagName.value && tagName.value === 'input') {

				driver.getAttribute('#' + question.id, 'type', function (attrRes) {
					if (attrRes && attrRes.value === 'tel') {
						driver.clearValue('#' + question.id);
						driver.setValue('#' + question.id, '1234');
						return;
					}

				})
			}
		})


		driver.getAttribute('#' + question.id, 'class', function (attrRes) {

			if (attrRes && attrRes.value === 'cmpInputButtonGroup') {
				driver.click('#' + question.id + '_1');
			}

		})
	})
}


function getElements() {
	return "username: {		selector: '#username' 	},	password: {		selector: '#password'	},	submit: {		selector: 'input[type=submit]'	},	error: {		selector: '.error'	}";
}

module.exports = {
	url: function () {
		return this.api.launchUrl + "motor/eb4.index.html#/pre-quote/vehicle";
	},
	elements: {
		//getElements()
	},
	commands: [
		{
			fillDataCapture: fillDataCapture
		}
	]
};