// Hook to set up testing environment for every following it statement
beforeEach(() => {
    // clear target div
    document.querySelector('#target').innerHTML = '';

    // test the autocomplete widget
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
});

it('Dropdown starts closed', () => {


    // Check if dropdown is-active
    const dropdown = document.querySelector('.dropdown');

    // Ensure that dropdown is-active is NOT added to the dropdown class
    expect(dropdown.className).not.to.include('is-active');
});

it('After searching, dropdown opens up', () => {
    // type something in
    // check dropdown
});