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
});