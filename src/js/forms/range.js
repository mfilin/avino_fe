// Подключение из node_modules
import * as noUiSlider from 'nouislider';

export function rangeInit() {

    const rangeSliders = document.querySelectorAll('[data-range]');
    if (rangeSliders.length > 0) {
        rangeSliders.forEach(el => {
            const range = el
            const rangeSlider = range.querySelector('[data-range-slider]')
            const rangeStep = parseInt(rangeSlider.getAttribute('data-step'))
            const rangeFrom = range.querySelector('[data-range-placeholder="from"]')
            const rangeTo = range.querySelector('[data-range-placeholder="to"]')

            const rangeStart = rangeSlider.getAttribute('data-start').split(",").map(parseFloat);
            const rangeMin = parseFloat(rangeSlider.getAttribute('data-min'));
            const rangeMax = parseFloat(rangeSlider.getAttribute('data-max'));


            noUiSlider.create(rangeSlider, {
                start: rangeStart,
                connect: true,
                step: rangeStep,
                range: {
                    'min': rangeMin,
                    'max': rangeMax,
                }
            });

            rangeSlider.noUiSlider.on('update', function (values, handle) {
                if (handle) {
                    rangeTo.innerHTML = Math.ceil(values[handle])
                } else {
                    rangeFrom.innerHTML = Math.ceil(values[handle])
                }
            });

            document.addEventListener('click', (event) => {
                if (event.target.closest('[data-range-values]')) {
                    let arr = event.target.closest('[data-range-values]').dataset.rangeValues.split(',');
                    let valFrom = parseInt(arr[0]);
                    let valTo = parseInt(arr[1]);
                    console.log(valFrom, valTo)

                    rangeFrom.innerHTML = valFrom;
                    rangeTo.innerHTML = valTo;

                    rangeSlider.noUiSlider.set([valFrom, valTo]);
                }
            })
        });
    }
}
rangeInit();
