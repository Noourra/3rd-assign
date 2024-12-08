const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data && data.results) {
            
            const table = document.createElement('table');
            table.classList.add('table', 'table-bordered'); 

            // Create the table header with column names
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th>Year</th>
                    <th>Semester</th>
                    <th>The Programs</th>
                    <th>Nationality</th>
                    <th>Colleges</th>
                    <th>Number of students</th>
                </tr>
            `;
            table.appendChild(thead);
           
