it('Shows an autocomplete', () => {
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                { Title: 'Dune' },
                { Title: 'Dune 2' },
                { Title: 'Dune 2.3' }
            ];
        },
        renderOption(movie) {
            return movie.Title;
        }
    });

    // Check if dropdown is-active
    const dropdown = document.querySelector('.dropdown');

    // Ensure that dropdown is-active is NOT added to the dropdown class
    expect(dropdown.className).not.to.include('is-active');
});