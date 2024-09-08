document.getElementById('add-link').addEventListener('click', function() {
    addHyperlinkSection();
});

document.getElementById('add-professional').addEventListener('click', function() {
    addProfessionalExperience();
});

document.getElementById('add-project').addEventListener('click', function() {
    addProject();
});

document.getElementById('add-education').addEventListener('click', function() {
    addEducation();
});

document.getElementById('add-certification').addEventListener('click', function() {
    addCertification();
});

document.getElementById('add-achievement').addEventListener('click', function() {
    addAchievement();
});
document.getElementById('generate-resume').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const about = document.getElementById('about-text').value;
    const skills = document.getElementById('skills-text').value;

    let resumeContent = `<h1>${name}</h1>`;
    resumeContent += `<p class="email">Email: ${email}</p>`;
    resumeContent += `<p class="email">Phone: ${phone}</p>`;

    const hyperlinkList = document.getElementById('hyperlink-list').children;
    if (hyperlinkList.length > 0) {
        resumeContent += `<h4 class="vishnu"></h4><ul>`;
        for (let i = 0; i < hyperlinkList.length; i++) {
            const title = hyperlinkList[i].children[0].value;
            const link = hyperlinkList[i].children[1].value;
            resumeContent += `<a href="${link}" target="_blank" class="link">${link}</a></li>`;
        }
        resumeContent += `</ul>`;
    }

    resumeContent += `<h4 class="vishnu">About Me</h4><p>${about}</p>`;
    resumeContent += `<h4 class="vishnu">Skills</h4><p>${skills}</p>`;

    const professionalList = document.getElementById('professional-list').children;
    if (professionalList.length > 0) {
        resumeContent += `<h4 class="vishnu">Professional Experience</h4>`;
        for (let i = 0; i < professionalList.length; i++) {
            const title = professionalList[i].children[0].value;
            const description = professionalList[i].children[1].value;
            resumeContent += `<p><strong>${title}</strong> - ${description}</p>`;
        }
    }

    const projectsList = document.getElementById('projects-list').children;
    if (projectsList.length > 0) {
        resumeContent += `<h4 class="vishnu">Projects</h4>`;
        for (let i = 0; i < projectsList.length; i++) {
            const title = projectsList[i].children[0].value;
            const description = projectsList[i].children[1].value;
            const link = projectsList[i].children[2].value;
            resumeContent += `<p><strong>${title}</strong> - ${description} <a href="${link}" target="_blank">${link}</a></p>`;
        }
    }

    const educationList = document.getElementById('education-list').children;
    if (educationList.length > 0) {
        resumeContent += `<h4 class="vishnu">Education</h4>`;
        for (let i = 0; i < educationList.length; i++) {
            const college = educationList[i].children[0].value;
            const course = educationList[i].children[1].value;
            const startYear = educationList[i].children[2].value;
            const endYear = educationList[i].children[3].value;
            const location = educationList[i].children[4].value;
            resumeContent += `<p><strong>${college}</strong> (${startYear}-${endYear}) - ${course}, ${location}</p>`;
        }
    }

    const certificationList = document.getElementById('certification-list').children;
    if (certificationList.length > 0) {
        resumeContent += `<h4 class="vishnu">Certifications</h4>`;
        for (let i = 0; i < certificationList.length; i++) {
            const title = certificationList[i].children[0].value;
            const link = certificationList[i].children[1].value;
            resumeContent += `<p><strong>${title}</strong> - <a href="${link}" target="_blank">${link}</a></p>`;
        }
    }

    const achievementList = document.getElementById('achievement-list').children;
    if (achievementList.length > 0) {
        resumeContent += `<h4 class="vishnu">Achievements</h4>`;
        for (let i = 0; i < achievementList.length; i++) {
            const achievement = achievementList[i].children[0].value;
            resumeContent += `<p>${achievement}</p>`;
        }
    }

    document.getElementById('resume-content').innerHTML = resumeContent;
    document.getElementById('resume-preview').style.display = 'block';
});

document.getElementById('download-pdf').addEventListener('click', function() {
    const resumeContent = document.getElementById('resume-content');
    var opt = {
        margin:       0.5,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeContent).set(opt).save();
});

function addHyperlinkSection() {
    const container = document.createElement('div');
    const titleInput = document.createElement('input');
    const linkInput = document.createElement('input');

    titleInput.placeholder = "Hyperlink Title";
    titleInput.type = 'text';
    linkInput.placeholder = "Hyperlink URL";
    linkInput.type = 'url';

    container.appendChild(titleInput);
    container.appendChild(linkInput);

    document.getElementById('hyperlink-list').appendChild(container);
}

function addProfessionalExperience() {
    const container = document.createElement('div');
    const titleInput = document.createElement('input');
    const descriptionInput = document.createElement('textarea');
    titleInput.labels="title";
    titleInput.placeholder = "Professional Work Title";
    descriptionInput.placeholder = "Description of the professional work";
    descriptionInput.rows = 3;

    container.appendChild(titleInput);
    container.appendChild(descriptionInput);

    document.getElementById('professional-list').appendChild(container);
}

function addProject() {
    const container = document.createElement('div');
    const titleInput = document.createElement('input');
    const descriptionInput = document.createElement('textarea');
    const linkInput = document.createElement('input');

    titleInput.placeholder = "Project Title";
    descriptionInput.placeholder = "Project Description";
    descriptionInput.rows = 3;
    linkInput.placeholder = "Project Link (optional)";
    linkInput.type = 'url';

    container.appendChild(titleInput);
    container.appendChild(descriptionInput);
    container.appendChild(linkInput);

    document.getElementById('projects-list').appendChild(container);
}

function addEducation() {
    const container = document.createElement('div');
    const collegeInput = document.createElement('input');
    const courseInput = document.createElement('input');
    const startYearInput = document.createElement('input');
    const endYearInput = document.createElement('input');
    const locationInput = document.createElement('input');

    collegeInput.placeholder = "College/University";
    courseInput.placeholder = "Course";
    startYearInput.placeholder = "Starting Year";
    endYearInput.placeholder = "Ending Year";
    locationInput.placeholder = "Location";

    startYearInput.type = 'number';
    endYearInput.type = 'number';

    container.appendChild(collegeInput);
    container.appendChild(courseInput);
    container.appendChild(startYearInput);
    container.appendChild(endYearInput);
    container.appendChild(locationInput);

    document.getElementById('education-list').appendChild(container);
}

function addCertification() {
    const container = document.createElement('div');
    const titleInput = document.createElement('input');
    const linkInput = document.createElement('input');

    titleInput.placeholder = "Certification Title";
    linkInput.placeholder = "Certification Link (optional)";
    linkInput.type = 'url';

    container.appendChild(titleInput);
    container.appendChild(linkInput);

    document.getElementById('certification-list').appendChild(container);
}

function addAchievement() {
    const container = document.createElement('div');
    const achievementInput = document.createElement('input');

    achievementInput.placeholder = "Achievement";

    container.appendChild(achievementInput);

    document.getElementById('achievement-list').appendChild(container);
}
