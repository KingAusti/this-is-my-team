// we want to generate an html page
// that renders a section depending on the role
// adds all sections to index.html

const html = []

const generateHTML = teamMembers => {
    teamMembers.forEach(member => {
        if (member.getRole() === 'Manager') {
            html.push(generateManagerSection(member))
        } else if (member.getRole() === 'Engineer') {
            html.push(generateEngineerSection(member))
        } else if (member.getRole() === 'Intern') {
            html.push(generateInternSection(member))
        }
    });
    return html.join("")
  }

const generateManagerSection = teamMember => {
    return `
    <section class="card">
        <div class="card-header">
            <h2 class="text-dark bg-primary p-2 display-inline-block">${teamMember.getRole()}</h2>
            <h3>${teamMember.getName()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li>ID: ${teamMember.getId()}</li>
                <li>Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
                <li>Office Number: ${teamMember.getOfficeNumber()}</li>
            </ul>
        </div>        
    </section>
    `
}

const generateEngineerSection = teamMember => {
    return `
    <section class="card">
        <div class="card-header">
            <h2 class="text-dark bg-primary p-2 display-inline-block">${teamMember.getRole()}</h2>
            <h3>${teamMember.getName()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li>ID: ${teamMember.getId()}</li>
                <li>Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
                <li>GitHub: <a href="https://github.com/${teamMember.getGithub()}"target="_blank">${teamMember.getGithub()}</a></li>
            </ul>
        </div>        
    </section>
    `
}

const generateInternSection = teamMember => {
    return `
    <section class="card">
        <div class="card-header">
            <h2 class="text-dark bg-primary p-2 display-inline-block">${teamMember.getRole()}</h2>
            <h3>${teamMember.getName()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li>ID: ${teamMember.getId()}</li>
                <li>Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>
                <li>School: ${teamMember.getSchool()}</li>
            </ul>
        </div>        
    </section>
    `
}


const generatePage = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">    
    <link rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
          crossorigin="anonymous">    
    <title>My Team</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3" id="title">
                <h1 class="text-center">The Team</h1>
            </div>
        </div>
    </div>
    <main class="container">        
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                ${generateHTML(team)}
            </div>
        </div>        
    </main>
</body>
</html>
    `
}
module.exports = generatePage;