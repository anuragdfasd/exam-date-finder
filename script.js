const examRoutine = {
    "Geology": [
        ["2081-12-29", "500370007 - 500370195"],
        ["2081-12-31", "500370196 - 500370370"],
        ["2082-01-02", "500370389 - 500370622"],
        ["2082-01-03", "500370628 - 500370812"],
        ["2082-01-04", "500370813 - 500370926"]
    ],
    "Microbiology": [
        ["2082-01-05", "500370003 - 500370163"],
        ["2082-01-07", "500370003 - 500370163"],
        ["2082-01-08", "500370165 - 500370358"],
        ["2082-01-09", "500370165 - 500370358"],
        ["2082-01-10", "500370366 - 500370515"],
        ["2082-01-11", "500370366 - 500370515"],
        ["2082-01-12", "500370520 - 500370624"],
        ["2082-01-14", "500370520 - 500370624"]
        ["2082-01-15", "500370626 - 500370737"],
        ["2082-01-16", "500370626 - 500370737"],
        ["2082-01-17", "500370739 - 500370869"],
        ["2082-01-19", "500370739 - 500370869"],
        ["2082-01-21", "500370870 - 500370925"],
        ["2082-01-22", "500370870 - 500370925"]
    ],
    "Botany": [
        ["2082-01-02", "500370003 - 500370087"],
        ["2082-01-03", "500370088 - 500370139"],
        ["2082-01-04", "500370140 - 500370217"],
        ["2082-01-05", "500370218 - 500370285"],
        ["2082-01-07", "500370288 - 500370387"],
        ["2082-01-08", "500370389 - 500370468"],
        ["2082-01-09", "500370469 - 500370550"],
        ["2082-01-10", "500370551 - 500370639"],
        ["2082-01-11", "500370643 - 500370726"],
        ["2082-01-12", "500370727 - 500370821"],
        ["2082-01-15", "500370822 - 500370928"]
    ],
    "Zoology": [
        ["2081-12-18", "500370002 - 500370046"],
        ["2081-12-19", "500370048 - 500370097"],
        ["2081-12-20", "500370098 - 500370140"],
        ["2081-12-21", "500370141 - 500370196"],
        ["2081-12-22", "500370197 - 500370253"],
        ["2081-12-25", "500370254 - 500370329"],
        ["2081-12-26", "500370332 - 500370379"],
        ["2081-12-27", "500370387 - 500370435"],
        ["2081-12-28", "500370437 - 500370487"],
        ["2081-12-29", "500370489 - 500370538"],
        ["2081-12-31", "500370541 - 500370586"],
        ["2082-01-02", "500370587 - 500370643"],
        ["2082-01-03", "500370644 - 500370689"],
        ["2082-01-04", "500370690 - 500370739"],
        ["2082-01-05", "500370740 - 500370800"],
        ["2082-01-07", "500370801 - 500370846"],
        ["2082-01-08", "500370848 - 500370897"],
        ["2082-01-09", "500370898 - 500370928"]
    ],
    "Meteorology": [
        ["2081-12-17", "500370001 - 500370901"]
    ],
    "Environmental": [
        ["2081-12-17", "500370011 - 500370479"],
        ["2081-12-18", "500370481 - 500370722"],
        ["2081-12-19", "500370776 - 500370922"]
    ],
    "Physics": [
        ["2081-12-19", "500370001 - 500370083"],
        ["2081-12-20", "500370086 - 500370180"],
        ["2081-12-21", "500370181 - 500370255"],
        ["2081-12-22", "500370258 - 500370303"],
        ["2081-12-25", "500370304 - 500370382"],
        ["2081-12-26", "500370384 - 500370462"],
        ["2081-12-27", "500370464 - 500370562"],
        ["2081-12-28", "500370569 - 500370654"],
        ["2081-12-29", "500370657 - 500370738"],
        ["2081-12-31", "500370742 - 500370811"],
        ["2082-01-02", "500370813 - 500370889"],
        ["2082-01-03", "500370890 - 500370927"]
    ],
    "Chemistry": [
        ["2081-12-20", "500370002 - 500370044"],
        ["2081-12-21", "500370045 - 500370093"],
        ["2081-12-22", "500370095 - 500370140"],
        ["2081-12-25", "500370141 - 500370191"],
        ["2081-12-26", "500370192 - 500370247"],
        ["2081-12-27", "500370251 - 500370306"],
        ["2081-12-28", "500370307 - 500370358"],
        ["2081-12-29", "500370361 - 500370399"],
        ["2081-12-31", "500370401 - 500370446"],
        ["2082-01-02", "500370448 - 500370500"],
        ["2082-01-03", "500370503 - 500370545"],
        ["2082-01-04", "500370547 - 500370584"],
        ["2082-01-05", "500370586 - 500370632"],
        ["2082-01-07", "500370633 - 500370669"],
        ["2082-01-08", "500370670 - 500370709"],
        ["2082-01-09", "500370712 - 500370771"],
        ["2082-01-10", "500370772 - 500370808"],
        ["2082-01-11", "500370809 - 500370870"],
        ["2082-01-12", "500370871 - 500370910"],
        ["2082-01-14", "500370911 - 500370928"]     
    ],

    "Statistics": [
        ["2081-12-18", "500370004 - 500370150"],
        ["2081-12-19", "500370157 - 500370258"],
        ["2081-12-20", "500370263 - 500370363"],
        ["2081-12-21", "500370368 - 500370501"],
        ["2081-12-22", "500370502 - 500370674"],
        ["2081-12-25", "500370675 - 500370825"],
        ["2081-12-26", "500370831 - 500370927"]
    ]
};

function checkRoutine() {
    let symbol = document.getElementById("symbolNumber").value;
    let errorDiv = document.getElementById("error");
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (!/^500370\d{3}$/.test(symbol)) {
        errorDiv.innerText = "Invalid Symbol Number. Must be 9 digits starting with 500370.";
        return;
    } else {
        errorDiv.innerText = "";
    }

    let selectedSubjects = Array.from(document.querySelectorAll('#subjects input:checked')).map(cb => cb.value);
    if (selectedSubjects.length === 0) {
        resultDiv.innerHTML = "Please select at least one subject.";
        return;
    }

    let output = "<h3>Exam Routine:</h3>";
    selectedSubjects.forEach(subject => {
        if (examRoutine[subject]) {
            examRoutine[subject].forEach(entry => {
                let [date, range] = entry;
                let [start, end] = range.split(" - ").map(Number);
                let symNum = parseInt(symbol);
                if (symNum >= start && symNum <= end) {
                    output += `<p>${subject}: ${date}</p>`;
                }
            });
        }
    });

    resultDiv.innerHTML = output || "No exam found for the given symbol number.";
}
function adjustLayout() {
    if (window.innerWidth < 768) {
        document.querySelector(".pc-layout").style.display = "none";
        document.querySelector(".mobile-layout").style.display = "block";
    } else {
        document.querySelector(".pc-layout").style.display = "block";
        document.querySelector(".mobile-layout").style.display = "none";
    }
}

/* Run function on page load and screen resize */
window.onload = adjustLayout;
window.onresize = adjustLayout;
