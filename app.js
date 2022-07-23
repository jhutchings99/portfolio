// NAV BAR HEIGHT CHANGE AND COLOR CHANGE
const scrollElements = document.querySelectorAll(".js-scroll");

window.addEventListener('scroll', function () {
    let header = document.querySelector('header')
    let navColor = document.querySelector('.nav-menu')
    let bar1 = document.querySelector('.bar');
    let bar2 = document.querySelector('.bar:nth-child(2)');
    let bar3 = document.querySelector('.bar:nth-child(3)');
    let windowPosition = window.scrollY > 0

    header.classList.toggle('scrolling-active', windowPosition);
    navColor.classList.toggle('scrolling-active-nav', windowPosition)

    bar1.classList.toggle('scrolling-active-bar', windowPosition);
    bar2.classList.toggle('scrolling-active-bar', windowPosition);
    bar3.classList.toggle('scrolling-active-bar', windowPosition);
})



// NAV BAR HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
let header = document.querySelector('header')
let bar1 = document.querySelector('.bar');
let bar2 = document.querySelector('.bar:nth-child(2)');
let bar3 = document.querySelector('.bar:nth-child(3)');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    header.classList.toggle('scroll-active')
    bar1.classList.toggle('scroll-active-bar');
    bar2.classList.toggle('scroll-active-bar');
    bar3.classList.toggle('scroll-active-bar');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    header.classList.remove('scroll-active');
}))

var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
})

var app3 = new Vue({
    el: '#app3',
    vuetify: new Vuetify(),
    data: {
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
        ],

        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

        subject: '',
        subjectRules: [
          v => !!v || 'Subject is required',
        ],

        message: '',
        messageRules: [
          v => !!v || 'Message is required',
        ],
      },
      methods: {
        validate: function () {
          this.$refs.form.validate()
        },
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },

        sendEmail: function () {
          if (this.valid) {
            console.log('send')
            var templateParams = {
              name: this.name,
              email: this.email,
              subject: this.subject,
              message: this.message,
            }

            emailjs.send("gmail","template_9368y1w", templateParams);
            this.reset();
            this.resetValidation();
            setInterval(function() {
              window.location.reload();
            }, 1000); 
          }
        }
      },
  })