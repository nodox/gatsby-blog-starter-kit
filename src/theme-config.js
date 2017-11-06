module.exports = {
    name: 'Steven Natera',
    pages: {
      home: {
        path: '/',
        title: 'Home',
        introText: 'Hi! I\'m Steven Natera. I write this blog, \
                    teach software engineering workshops, and explore \
                    emerging technologies.',
        content: [
          {
            header: '',
            paragraph: ''
          }
        ]
      },
      about: {
        path: '/about',
        title: 'About',
        introText: 'Hi! I\'m Steven Natera. I write this blog, teach software \
                    engineering workshops, and explore emerging technologies.',
        content: [
          {
            header: 'About',
            paragraph: 'I\'m Steven Natera, a software engineer and entrepreneur. I spend a  \
                      my free time working on open source projects, exploring emerging \
                      technologies (currently working with Rust and Webassembly), advising startups \
                      on technical requirements or teaching an introductory web development course. \
                      I\'m happy to be emailed about technical queries, startup ideas, \
                      press inquiries and certainly any corrections or suggestions for material \
                      presented on my site.'
          }
        ]
      },
      contact: {
        path: '/contact',
        title: 'Contact',
        introText: 'I\'m pretty easy to get hold of, here\'s how I use \
                    different channels to communicate with people and how best \
                    to contact me',

        content: [
          {
            header: 'Contact',
            paragraph: 'Email is the easiest way if you want to reach out \
                        and I usually respond promptly. Use the contact form \
                        below.'
          },
          {
            header: 'What will get a response',
            paragraph: 'Inqueries about speaking at events or invitations to write \
                        a guest post, will get a response even if I can\'t \
                        accept the invite. If you are interested in \
                        collaborating on one of my open source projects or want \
                        career advice I will respond. If your message doesn\'t \
                        explicitly look like it needs a response or it\'s vague \
                        or not clear what the purpose is, you may not hear \
                        back from me. Recruiters or solicitors who send vague, \
                        unpersonalized, or mass emails are not welcome.'
          },

        ]
      },
      speaking: {
        path: '/speaking',
        title: 'Speaking',
        introText: 'I deliver talks on NodeJS and I teach software engineering \
                    workshops.',
        content: [
          {
            header: 'Speaking',
            paragraph: 'You\'ll often find me speaking at colleges, or technology  \
                    events showing people how easy it is to create robust web \
                    applications. I cater to a wide variety of audiences, from curious the \
                    first-timers looking to get their feet wet in web development to the \
                    experienced professionals looking to perfect their craft with new tips and tricks.',
          },
          {
            header: 'Style',
            paragraph: 'A huge amount of effort goes into all my talks and workshops, and I continue to refine my approach over time. \
                        The events that I find the most fulfilling and receive the best feedback are those that blend \
                        learning with entertainment. I usually blend visual presentations with live demos and frequently \
                        involve the audience in activities. My talks are very carefully prepared and rehearsed yet also \
                        remain as ad-libbed as possible; they must feel organic and natural as possible.'
          }
        ]
      },
      thanks: {
        path: '/thanks',
        title: 'Thanks',
        introText: '',
        content: [
          {
            header: 'Thank you',
            paragraph: 'Your email has been sent. I will ensure I respond as \
                        soon as possible. Read my blog posts in the mean time. \
                        Follow me on Twitter for my latest updates.',
          }
        ]
      },
      '404': {
        path: '/404',
        title: 'NOT FOUND',
        introText: '',
        content: [
          {
            header: 'NOT FOUND',
            paragraph: 'You just hit a route that \
                        does not exist... the sadness.'
          }
        ]
      }
    },
    socialLinks: [
      {
        path: 'https://www.twitter.com/stevennatera',
        icon: 'fa-twitter',
        name: 'Twitter',
      },
      {
        path: 'https://www.linkedin.com/in/snatera',
        icon: 'fa-linkedin',
        name: 'LinkedIn',
      },
      {
        path: 'https://www.github.com/nodox',
        icon: 'fa-github',
        name: 'Github',
      }
    ],
    copyright: {
      owner: '© Steven Natera',
    },
}
