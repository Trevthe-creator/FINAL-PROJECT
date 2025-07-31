# FINAL-PROJECT

generate a  page based on a linked in theme that contains a section which has diffrent professional details and profiles where you can click their card and directs you to their profile .This should apply to all  cards containing their professional details. in this professional profile pages they should first contain their official names their cv  their social media accounts like linked in acc, whatsapp, instagram  and  x next it should contain a section where an intrested party can invite this professional for a job offer in which a notification will be displayed to the person who is going to recieve the job offer and that where he/she is going to choose whether to pick the job or note .for the part of the job offer it should contain what the job is about ,the salary for the job and  the working hours you can add  some  extra details for the parts which are missing. List out all categories of professions and add most marketable careers In them  and each career add 5 professionals in each career , remember they should have their own page containing the details I mentioned in the profile page. Remider the users can update their profile like their cv's their profile picture their names and what knot add picture which are accurate to the profession in which it is labelled to.As much as it is a web for professionals add a section where one will be redirected to a talent/hobby page in which a link should be placed in every user or profeesional .this''talent/ jobby page should be fun themed because peolpe are showcasing what they can do example 
"I might be a software engineer but also  an artist " I believe this should improve a connection to the job seekers and the job givers because both could have the same hobby and that adds a connection .the home page in which contains the proffesional cards and details shoulds have an official and classy look but for talent and hobby page should contain a fun and exciting look with a funlike transition with a slideshow background with pictures of people with their hoobies make about five background images  make this a place of free expressions where The professional accounts are linked to the talent/hobby in which should be displayed in their profile pages .Remember you are one of the best web developers so add other features to improve this website .DISCLAIMER  IT SHOULD BE WRITTEN IN html, css and javascript


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TKInvite - Professional Network</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
</head>
<body>
    <!-- Professional Page -->
    <div id="professionalPage">
        <header class="header">
            <nav class="nav-container">
                <a href="#" class="logo">TKInvite</a>
                <div class="nav-links">
                    <a href="#" class="nav-link">Home</a>
                    <a href="#" class="nav-link">Professionals</a>
                    <a href="#" class="nav-link">About</a>
                    <button class="talent-btn" onclick="switchToTalentPage()">
                        <i class="fas fa-palette"></i> Talents & Hobbies
                    </button>
                </div>
            </nav>
        </header>

        <section class="hero">
            <h1>Connect with Top Professionals</h1>
            <p>Discover talented individuals across various industries and invite them for your next project or job opportunity.</p>
        </section>

        <main class="main-container">
            <div class="categories" id="categoriesContainer">
                <!-- Categories will be dynamically generated -->
            </div>
        </main>
    </div>

    <!-- Talent Page -->
    <div id="talentPage" class="talent-page">
        <button class="back-to-professional" onclick="switchToProfessionalPage()">
            <i class="fas fa-arrow-left"></i>
        </button>
        
        <div class="talent-slideshow">
            <div class="slide active" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect width=%22400%22 height=%22300%22 fill=%22%23667eea%22/><text x=%22200%22 y=%22150%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22>Creative Artists at Work</text></svg>')"></div>
            <div class="slide" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect width=%22400%22 height=%22300%22 fill=%22%23764ba2%22/><text x=%22200%22 y=%22150%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22>Musicians Performing</text></svg>')"></div>
            <div class="slide" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www







