let randomize_array = document.getElementById("randomize_array_btn");
let bubble_sort_btn = document.getElementById("bubble_sort_btn");
let selection_sort_btn = document.getElementById("selection_sort_btn");
let insertion_sort_btn = document.getElementById("insertion_sort_btn");
let merge_sort_btn = document.getElementById("merge_sort_btn");
let bars_container = document.getElementById("bars_container");
let minRange = 1;
let maxRange = 50;
let numofBars = 40;
let unsorted_array = new Array(numofBars);

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray() {
    for (let i = 0; i < numofBars; i++) {
        unsorted_array[i] = randomNum(minRange, maxRange);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createRandomArray();
    renderBars(unsorted_array);
});

async function renderBars(array) {
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * 10 + 'px';
        bars_container.appendChild(bar);
    }
}

randomize_array.addEventListener("click", function () {
    createRandomArray();
    bars_container.innerHTML = "";
    renderBars(unsorted_array);
})

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(array) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                for (let k = 0; k < bars.length; k++) {
                    if (k !== j && k !== j + 1) {
                        bars[k].style.backgroundColor = "";
                    }
                }
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                bars[j].style.height = array[j] * 10 + 'px';
                bars[j].style.backgroundColor = "pink";
                // bars[j].innerHTML = array[j];

                bars[j + 1].style.height = array[j + 1] * 10 + 'px';
                bars[j + 1].style.backgroundColor = "pink";
                // bars[j+1].innerHTML = array[j+1];

                await sleep(70);
            }
        }
        await sleep(70);
    }
    for (let i = 0; i < array.length; i++) {
        await sleep(22);
        bars[i].style.backgroundColor = "rgb(0, 255, 30)";
    }
    return array
}

bubble_sort_btn.addEventListener("click", function () {
    let sorted_array = bubbleSort(unsorted_array);
})


async function selectionSort(array) {
    let bars = document.getElementsByClassName("bar");
    let min_idx;
    for (let i = 0; i < array.length - 1; i++) {
        min_idx = i;
        bars[min_idx].style.backgroundColor = "pink";
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min_idx]) {
                await sleep(20);
                bars[min_idx].style.backgroundColor = "";
                min_idx = j;
                bars[j].style.backgroundColor = "pink";
            }
            await sleep(10);
        }
        bars[min_idx].style.backgroundColor = "rgb(0, 255, 30)";
        if (min_idx != i) {
            let temp = array[i];
            array[i] = array[min_idx];
            array[min_idx] = temp;

            await sleep(10);
            bars[i].style.height = array[i] * 10 + 'px';

            bars[min_idx].style.height = array[min_idx] * 10 + 'px';
        }
        for (let k = 0; k < array.length; k++) {
            await sleep(1);
            bars[k].style.backgroundColor = "";
        }
        await sleep(20);
    }


    for (let i = 0; i < array.length; i++) {
        bars[i].style.backgroundColor = "";
        await sleep(20);
        bars[i].style.backgroundColor = "rgb(0, 255, 30)";
    }
    return array
}

selection_sort_btn.addEventListener("click", function () {
    let sorted_array = selectionSort(unsorted_array);
    // console.log(sorted_array);

})



async function insertionSort(array) {
    let bars = document.getElementsByClassName("bar");

    let i, key, j;
    for (i = 0; i < array.length; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j + 1] < array[j]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            await sleep(20);
            bars[j + 1].style.height = array[j + 1] * 10 + 'px';
            bars[j].style.backgroundColor = "pink";
            bars[j].style.height = array[j] * 10 + 'px';
            await sleep(20);
            j = j - 1;
        }
        for (let k = 0; k < array.length; k++) {
            await sleep(0.7);
            bars[k].style.backgroundColor = "";
        }
        await sleep(30);
    }

    for (let i = 0; i < array.length; i++) {
        await sleep(30);
        bars[i].style.backgroundColor = "rgb(0, 255, 30)";
    }
    return array
}

insertion_sort_btn.addEventListener("click", function () {
    let sorted_array = insertionSort(unsorted_array);
    // console.log(sorted_array);

})



// NAVBAR

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));

