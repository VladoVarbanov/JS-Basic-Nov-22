function ProjectsCreation(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let timeForProjects = projects * 3;

    console.log(`The architect ${name} will need ${timeForProjects} hours to complete ${projects} project/s.`);
}

ProjectsCreation(["George","4"])