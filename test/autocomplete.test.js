// Helper function to ensure that test expect statement triggers after debounce
const waitFor = (selector) => {
    return new Promise( (resolve, reject) => {
        // Set an interval so that if input is not activated after set amount,
        // then promise will be rejected
        const interval = setInterval(() => {
            if (document.querySelector(selector)) {
                // Clear interval and timeout before resolving
                clearInterval(interval);
                clearTimeout(timeout);

                resolve();
            }
        }, 30);

        const timeout = setTimeout(() => {
            // Clear interval before rejecting
            clearInterval(interval);

            reject();
        }, 2000);
    });
};

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

// Test: Check if dropdown is-active
it('Dropdown starts closed', () => {
    const dropdown = document.querySelector('.dropdown');

    // Ensure that dropdown is-active is NOT added to the dropdown class
    expect(dropdown.className).not.to.include('is-active');
});

// Test: Trigger event by setting a value
it('After searching, dropdown opens up', 
    async () => {
        const dropdown = document.querySelector('.dropdown');

        // type something in (set value)
        const input = document.querySelector('input');
        input.value = 'dune';

        // trigger event
        input.dispatchEvent(new Event('input'));

        await waitFor('.dropdown-item');

        // check if dropdown is activated
        expect(dropdown.className).to.include('is-active');
});