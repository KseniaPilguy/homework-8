let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

let tableBody = document.querySelector('#table-body');
let btn = document.querySelector('.btn');
let responseData;
request.addEventListener('load', function() {
    if ((request.readyState == 4) && (request.status == 200)) {
        responseData = JSON.parse(request.responseText);

        let startElement = 0;
        finishElement = 10;

        // output on display first 10 elements
        for (let element = startElement; element < finishElement; element++) {
            let tr = document.createElement('tr');
            tableBody.appendChild(tr);

            let td1 = document.createElement('td');
            td1.innerHTML = responseData[element].userId;
            tr.appendChild(td1);

            let td2 = document.createElement('td');
            td2.innerHTML = responseData[element].id;
            tr.appendChild(td2);

            let td3 = document.createElement('td');
            td3.innerHTML = responseData[element].title;
            tr.appendChild(td3);

            let td4 = document.createElement('td');
            td4.innerHTML = responseData[element].completed;
            tr.appendChild(td4);
        }

        // output on display next 10 elements by click
        btn.addEventListener('click', function() {
            finishElement = finishElement + 10;
            startElement = startElement + 10;

            for (let element = startElement; element < finishElement; element++) {
                let tr = document.createElement('tr');
                tableBody.appendChild(tr);

                let td1 = document.createElement('td');
                td1.innerHTML = responseData[element].userId;
                tr.appendChild(td1);

                let td2 = document.createElement('td');
                td2.innerHTML = responseData[element].id;
                tr.appendChild(td2);

                let td3 = document.createElement('td');
                td3.innerHTML = responseData[element].title;
                tr.appendChild(td3);

                let td4 = document.createElement('td');
                td4.innerHTML = responseData[element].completed;
                tr.appendChild(td4);
            }
        });
    }
});

request.send();