describe('Test navigation', function() {
	it('Navigates to post project page', function(done) {
		setTimeout(function() {
			var button = $('#postProject');
			assert('Post project button is present', button.length === 1);
			button.click();
			setTimeout(function() {
				// verify we're on post project page
				var description_input = $('#description');
				assert('Description input is present', description_input.length === 1);

				done();
			}, 10);
		}, 10);
	});

	it('Navigates to home page', function(done) {
		setTimeout(function() {
			var home = $('#homeLink');
			assert('Home link is present', home.length === 1);

			click(home[0]);

			setTimeout(function() {
				var button = $('#postProject');
				assert('Post project button is present', button.length === 1);

				done();
			}, 10);
		}, 10);
	});
});