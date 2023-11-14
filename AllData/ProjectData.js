
const ProjectData = [
    {
        id: 1,
        name: "html",
        project: "HTML - BackTracking Project",
        photo: 'https://res.cloudinary.com/duzstta2v/image/upload/v1699938869/project_photo/satiaszyew5ra2066vmj.png',
        topics: ["HTML Document Structure", "HTML Lists", "HTML Tables", "HTML Semantic Elements", "HTML Forms", "HTML Meta Tags",
            "HTML Multimedia", "HTML Elements", "HTML Attributes", "HTML Links"],
        desc: 'HTML (Hypertext Markup Language) is the standard markup language used to create web pages. It is the foundation of web development and provides a structured way to format content, including text, images, links, and multimedia, and define the layout and structure of a web page. HTML uses a system of elements or tags to mark up content, and browsers use this markup to render web pages.HTML documents consist of a set of elements that are enclosed within angle brackets (< >) and are organized in a hierarchical structure. Elements can be used to define headings, paragraphs, lists, tables, forms, links, and more. These elements can also include attributes to provide additional information about the elements, such as source URLs for images or hyperlinks.'
    },
    {
        id: 2,
        name: "css",
        project: 'CSS - TODO List',
        photo: "https://res.cloudinary.com/duzstta2v/image/upload/v1699938868/project_photo/sjw0gvslywl644baumby.png",
        topics: ["CSS Properties", "Layout and Positioning", "Colors and Backgrounds", "Transitions and Animations", "Typography",
            "CSS Selectors", "Box Model", "Responsive Web Design", "CSS Specificity and Inheritance", "CSS Pseudo-Classes and Pseudo-Elements"],
        desc: 'CSS, or Cascading Style Sheets, is a language used for defining the presentation and visual formatting of web documents. It provides a way to control the layout and design of web pages, allowing web developers to specify the appearance of text, images, links, and other elements on a web page. CSS enables the separation of content (usually written in HTML) from its presentation, making it easier to create attractive and consistent web designs. It is used to define the styles, such as colors, fonts, margins, padding, and positioning, for HTML and XML elements. CSS selectors are used to target HTML elements, and properties are used to specify how those elements should be styled. This separation of content and presentation, along with the cascading nature of CSS, makes it an essential tool for creating visually appealing and well-structured web pages.'
    },
    {
        id: 3,
        name: "javascript",
        project: 'JAVASCRIPT - Digital Clock',
        photo: "https://res.cloudinary.com/duzstta2v/image/upload/v1699938869/project_photo/d5mvl17x6lalevihzkiv.png",
        topics: ["Basic Syntax and Data Types", "Objects and Object-Oriented Programming (OOP)", "DOM Manipulation", "Events", "Asynchronous JavaScript",
            "Scopes and Hoisting", "Closures", "Control Structures", "Functions"],
        desc: "JavaScript, often abbreviated as JS, is a dynamic and versatile programming language used primarily for web development. It plays a pivotal role in enhancing the functionality and interactivity of websites and web applications. JavaScript is executed within web browsers, making it a client-side scripting language, and it's instrumental in enabling user interactions, dynamic content generation, and data manipulation without requiring page reloads.One of JavaScript's key strengths is its ability to access and modify the Document Object Model (DOM), representing the structure and content of web pages. This allows developers to create responsive and interactive web elements, such as forms, buttons, and animations, in response to user actions. JavaScript can also communicate with web servers through asynchronous requests, commonly referred to as AJAX, enabling real-time data exchange and seamless user experiences."
    },
    {
        id: 4,
        name: "react",
        project: "REACT JS - Blog Project",
        photo: 'https://res.cloudinary.com/duzstta2v/image/upload/v1699938870/project_photo/b3w82alwp2gqoxuxlker.png',
        topics: ["JSX (JavaScript XML)", "Component Lifecycle", "Event Handling", "Lists and Keys", "Conditional Rendering", "Forms and Controlled Components",
            "Styling in React", "Components", "State and Props", "React Hooks"],
        desc: "React, often stylized as React.js or simply React, is an open-source JavaScript library widely utilized for building user interfaces in web and mobile applications. Developed and maintained by Facebook, React simplifies the process of creating interactive and responsive UI components. It's renowned for its component-based architecture, enabling developers to break down complex user interfaces into smaller, reusable pieces.React employs a declarative approach, allowing developers to specify how UI components should appear and behave in response to data changes. It efficiently manages the rendering of components, updating only the parts of a web page that have changed, resulting in enhanced performance and a smoother user experience."
    },
    {
        id: 5,
        name: "node",
        project: "NODE JS - Ecommerce",
        photo: 'https://res.cloudinary.com/duzstta2v/image/upload/v1699938870/project_photo/qowsj8oicmxz2ga0hcmh.png',
        topics: ["Callbacks and Promises", "Core Modules", "NPM (Node Package Manager)", "Event Loop", "Streams", "File System Operations",
            "HTTP and Express.js", "Middleware", "Routing", "Database Interaction"],
        desc: "Node.js, often referred to as Node, is an open-source, cross-platform JavaScript runtime environment designed for server-side development. It enables developers to build networked and scalable applications by executing JavaScript code on the server, rather than just in web browsers. This runtime is built on Google's V8 JavaScript engine and provides a non-blocking, event-driven architecture, which is highly efficient for handling asynchronous I/O operations.One of Node.js's defining features is its ability to run JavaScript on the server, making it a versatile technology for both web and back-end development. It facilitates the creation of web servers, APIs, and real-time applications, offering a streamlined and unified approach to programming across the entire application stack. Node.js supports the use of packages and modules, managed via the Node Package Manager (NPM), a vast repository of pre-built libraries and tools that greatly expedite development."
    },
    {
        id: 6,
        name: "mongo",
        project: "MongoDB - Compass",
        photo: 'https://res.cloudinary.com/duzstta2v/image/upload/v1699939303/project_photo/ycouvzlmqvlsxwfsm4no.png',
        topics: ["Database and Collection Structure", "Document-Oriented Data Model", "CRUD Operations", "Indexes", "Querying and Filtering",
            "Aggregation Framework", "Schema Design", "Data Modeling", "Normalization and Denormalization", "Transactions"],
        desc: "MongoDB is a popular, open-source NoSQL database system designed to store and manage vast amounts of data efficiently. It belongs to the document-oriented database category and is known for its flexibility and scalability. MongoDB is not reliant on traditional relational database tables but stores data in BSON (Binary JSON) documents that can be nested and indexed.MongoDB's key features include its ability to handle large volumes of unstructured or semi-structured data, enabling developers to work with diverse data types without a fixed schema. This flexibility makes it suitable for a wide range of applications, from content management systems to real-time analytics and IoT platforms."
    },
]

module.exports = ProjectData