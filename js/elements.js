/*
  HTML Elements injected into divs
*/

group = `
    <div id="group">
    <!-- Navigation
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <!-- Page Content -->
    <div class="container">

      <!-- Page Heading -->
      <h1 class="my-4">Data Visualization @ The New School<br>
        <small>Art, Media, & Technology MS</small>
      </h1>

      <div class="row">
      <!-- entries added here -->
      </div>
      
      <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script>

      </script> -->
      <!-- /.row -->

      <!-- Pagination - ->
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>

    </div>
    <!-- /.container - ->

    <!-- Footer - ->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
      </div>
      <!-- /.container - ->
    </footer> -->

    <!-- Bootstrap core JavaScript
    <script src="assets/startbootstrap-3-col-portfolio-gh-pages/vendor/jquery/jquery.min.js"></script> -->
    </div>
`;

indiv = ` 
    <div id="indiv">
    <!-- Navigation
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <!-- Page Content -->
    <div class="container" id="entryContainer">

    <!-- Project Specific Content -->

    </div>
    <!-- /.container -->

    <!-- Footer
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
      </div>
      <!-- /.container - ->
    </footer> -->

    <!-- Bootstrap core JavaScript
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> -->

    
    <!-- DV project additions for this template
    <link href="../../css/workStyle.css" rel="stylesheet">
    <script src="../../js/data.js" type="text/javascript"></script>
    <script src="../../js/workCode.js" type="text/javascript"></script> -->
    </div>
`;


gEntry = `
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#" data-uid="{3}" data-idx="{4}"><img class="card-img-top" src="assets/img_work/{0}" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#" data-uid="{3}" data-idx="{4}">{1}</a>
              </h4>
              <p class="card-text">{2}</p>
            </div>
          </div>
        </div>
`;

iEntry = `
      <!-- Portfolio Item Heading -->
      <h1 class="my-4">"{1}"
      </h1>

      <!-- Portfolio Item Row -->
      <div class="row">

        <div class="col-md-8">
          <img class="img-fluid" id="fixedszP" src="assets/img_work/{0}" alt="">
        </div>

        <div class="col-md-4">
          <h3 class="my-3">Project Description</h3>
          <p>{3}</p>
          <!--
          <h3 class="my-3">Project Details</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul> -->
        </div>

      </div>
      <!-- /.row -->

      <!-- Related Projects Row -->
      <!-- 
      <h3 class="my-4">Related Projects</h3>

      <div class="row">

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

      </div>
      -->

        &nbsp
        <div class="row">
        <div class="col-md-8">
          <img class="img-fluid" id="fixedszP" src="assets/img_people/{4}" alt="">
        </div>
        
        <div class="col-md-4">
          <h3 class="my-3">{5} 
            <a href="mailto:{7}"> <img height="20" src="assets/envelope.svg" title="Email"></a>
            <a href="{8}"> <img height="20" src="assets/home.svg" title="Personal Site"></a>
            <a href="{2}"> <img class="my-4" height="20" src="assets/link.svg" title="Link to Project"></a>
          </h3>
          <p>{6}</p>
          
        </div>      
      </div>







      <!-- /.row -->
`;

iEntryBAK = `
      <!-- Portfolio Item Heading 
      <h1 class="my-4">Page Heading
        <small>Secondary Text</small>
      </h1> -->

      <!-- Portfolio Item Row -->
      <div class="row">
        <h3 class="my-4">"{1}"</h3>
        
        <div class="col-md-8 wc">
          <img class="img-fluid" src="assets/img_work/{0}" alt="">
        </div> 
        <div class="col-md-4 wc">
   
          <h3 class="my-3">A Collaboration With</h3>
          <ul>
            <li>Michael Wolf</li>
            <li>Vivian Westwood</li>
            <li>Dolly Parton</li>
            <li>Each would be</li>
            <li>a link to that</li>
            <li>persons first project.</li>
          </ul> 
        </div> 
        
        
 	<!-- <center class="col-md-12 nc">
 	  <div class="col-md-8">
            <img class="img-fluid" id="fixedszW" src="assets/img_work/{0}" alt=""> 
          </div>
          <br>
          <p>{3}</p>
        </center> -->
        
        
          &nbsp
  
        <div class="col-md-7">
          <img class="img-fluid" id="fixedszP" src="assets/img_people/{4}" alt="">
        </div>
        
        <div class="col-md-4">
          <h3 class="my-3">{5} 
            <a href="mailto:{7}"> <img height="20" src="assets/envelope.svg" title="Email"></a>
            <a href="{8}"> <img height="20" src="assets/home.svg" title="Personal Site"></a>
            <a href="{2}"> <img class="my-4" height="20" src="assets/link.svg" title="Link to Project"></a>
          </h3>
          <p>{6}</p>
          
        </div>      
      </div>
      <!-- /.row -->

      
      <!-- Related Projects Row -->
      <!-- <h3 class="my-4">Related Projects (How are we doing this?)</h3> -->
      <h3 class="my-4"></h3>

      <div class="row">
      
        <!--
        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div>

        <div class="col-md-3 col-sm-6 mb-4">
          <a href="#">
            <img class="img-fluid" src="http://placehold.it/500x300" alt="">
          </a>
        </div> -->

      </div>
      <!-- /.row -->
`;

foot = '<span id="foot" class="col-lg-4 col-sm-6 portfolio-item">.</span>';

