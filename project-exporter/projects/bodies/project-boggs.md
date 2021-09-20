### Summary

Project Boggs is an internal application that I worked on when I worked at Axxess.
It includes three components:

  - An internal frontend analytics page used to track trends with visit
    submissions and outcomes; all of the displayed images are of this component,
    although it is the smallest. This was built using Aurelia, Bootstrap,
    Webpack, Typescript, FontAwesome, HighCharts, and a great deal of love.
  - A web api interface that allows other applications at Axxess to submit visits,
    query for visit statuses, or perform other operations. This was built using
    ASP.NET Core and Entity Framework Core, using code-first migrations.
  - A job processing agent running as a Windows service using TopShelf,
    ASP.NET Core, Hangfire, and Entity Framework Core.
    The majority of the actual work in Boggs is done in this agent.
    It was kept isolated from the web api so that they can be scaled separately.

#### Dev-Ops

Project Boggs has continuous integration, testing, and deployment through a combination
of TeamCity and Octopus. TeamCity builds the application and tests it,
while Octopus deploys it.
