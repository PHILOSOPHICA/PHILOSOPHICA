window.sr = ScrollReveal();

// Código para incrustar contenido de redes sociales
// Puedes usar los códigos de incrustación proporcionados por las plataformas

// Facebook
document.getElementById('facebook-section').innerHTML = `
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v17.0" nonce="rIdP3Ub6"></script>
<div class="fb-page" data-href="https://www.facebook.com/philosophicamx/" data-tabs="timeline" data-width="500px" data-height="700px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/philosophicamx/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/philosophicamx/">Philosophica</a></blockquote></div>
`;

// Twitter
document.getElementById('twitter-section').innerHTML = `
  <blockquote class="twitter-tweet">
    <p lang="en" dir="ltr">Check out this amazing website! #webdevelopment</p>
    &mdash; Twitter User (@twitteruser) <a href="https://twitter.com/twitteruser/status/1234567890">March 1, 2023</a>
  </blockquote>
`;

// YouTube
document.getElementById('youtube-section').innerHTML = `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
`;
