document.getElementById('certificateForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var employeeName = document.getElementById('employeeName').value;
    var companyName = document.getElementById('companyName').value;
    var durationFrom = document.getElementById('durationFrom').value;
    var durationTo = document.getElementById('durationTo').value;
    var departmentName = document.getElementById('departmentName').value;
  

    // Construct certificate content
    var certificateContent = `
        <div class="certificate-container">
            <div class="outer-border"></div>
            <div class="inner-border"></div>
            <div class="certificate-border col-xs-12">
                <div class="row certificate-header">
                    <div class="certificate-title" style="text-align: center;">
                        <p style="margin-bottom: 0%;">${companyName}</p><br><h2>C E R T I F I C A T E</h2>
                    </div>
                </div>
                <div class="row certificate-body">
                    <div class="certificate-block">
                        <div class="col-xs-12">
                            <span>THIS CERTIFICATE IS PRESENTED TO</span>
                        </div>          
                        <div style="margin-top: 20px;">
                            <span class="earned-text block cursive">${employeeName}</span>
                            <div class="course-title underline col-xs-8 text-center"></div>
                        </div>
                        <div class="col-xs-12">
                            <div class="data">
                              <span>For completing an internship program in ${departmentName} at ${companyName} from ${durationFrom} to ${durationTo}</span>
                            </div> 
                        </div>        

                        <div class="col-xs-12"></div>
                        <div class="footer">
                            <div class="course-title underline col-xs-8 text-center" style="width: 300px; margin-left: 170px;"></div>
                            <b>SRIKANTH</b><BR>
                            <span style="font-style: italic; color: rgb(38, 3, 58);">FOUNDER</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('certificateOutput').innerHTML = certificateContent;
    document.getElementById('certificateOutput').classList.remove('hidden');

    document.getElementById('downloadBtn').classList.remove('hidden');
});

document.getElementById('downloadBtn').addEventListener('click', function() {
var certificateContent = document.getElementById('certificateOutput').innerHTML;
var blob = new Blob([certificateContent], { type: 'text/html' });
var url = URL.createObjectURL(blob);
var link = document.createElement('a');

link.href = url;
link.download = 'experience_certificate.html';
link.click();
});