import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/footer.css';

function Footer() {
    return (
        <div class="container-fluid foot">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>   
            <ul class="list-inline mb-0">
			  <li class="list-inline-item">
            <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.instagram.com/mokshasood/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
            <li class="list-inline-item">
            <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.facebook.com/moksha.sood" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
            </li>
            <li class="list-inline-item">
            <a class="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/moksha-sood-91885b18a/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
       	</li>
       	</ul>
        </div>
    );
}

export default Footer;