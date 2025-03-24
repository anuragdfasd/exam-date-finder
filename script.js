const examRoutine = {
    "Geology": [["2081-12-29", "500370007 - 500370195"]],
    "Microbiology": [
        ["2082-01-05", "500370003 - 500370163"],
        ["2082-01-07", "500370003 - 500370163"],
        ["2082-01-08", "500370165 - 500370358"],
        ["2082-01-09", "500370165 - 500370358"],
        ["2082-01-10", "500370366 - 500370515"],
        ["2082-01-11", "500370366 - 500370515"],
        ["2082-01-12", "500370520 - 500370624"],
        ["2082-01-14", "500370520 - 500370624"],  // Fix: Added comma
        ["2082-01-15", "500370626 - 500370737"],
        ["2082-01-16", "500370626 - 500370737"]
    ],
    "Botany": [["2082-01-02", "500370003 - 500370087"]],
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
