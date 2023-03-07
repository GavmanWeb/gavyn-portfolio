import { Component } from 'react'

export default class HireMePage extends Component {
  constructor () {
    super()

    this.state = { siteUrl: 'http://gavyncaldwell.com' }
  }
  render () {
    return (
      <div className='c-page'>
        <section className='c-hero'>
          <div className='c-hero__content-container'>
            <img
              alt='Responsive Web Developer in Utah'
              src='https://res.cloudinary.com/gavmanweb/image/upload/v1510858974/portfolio/CuriousCodeFullTop_zz9d9a.png' />
            <h3>
              Front End Web Developer committed to helping you give your
              users an amazing experience, and have an amazing one yourself.
            </h3>
          </div>
          <span className='c-scrolldown'>Scroll Down &#8595;</span>
          <video className='c-video' playsInline autoPlay muted loop>
            <source src='https://res.cloudinary.com/gavmanweb/video/upload/q_80/v1510093657/web-vid_zakx7r.mp4' type='video/mp4' />
          </video>
        </section>

        <section className='o-section o-section--white'>
          <main className='o-section__main-content'>
            <h1 className='o-section__header'>Responsive Design</h1>
            <p>
              In todays world
              <a href='http://tcrn.ch/2mHKS9Y' target='_blank' rel='noopener noreferrer'> 51.3% </a>
              of everyone that visits your website will do so on their phones.
              Lets make sure that when they visit yours, it's a great experience!
              read
              <a href='http://bit.ly/2nW6j81' target='_blanck' rel='noopener noreferrer'>  here </a>
              to learn more.
            </p>

            <h2 className='c-search-form-header'>
              Search here for your website and see if it's mobile friendly
            </h2>
            <small className='c-search-form-header'>
              (If your website doesn't load it means you don't allow it
              to render in iframes)
            </small>
            <form className='c-search-form' onSubmit={this.searchSite.bind(this)}>
              <input
                defaultValue='http://'
                type='text'
                placeholder='Enter Your Website URL'
                ref='siteSearch' />
              <button type='submit'>Search</button>
            </form>
          </main>

          <aside className='o-section__aside-content o-section__aside-content--center'>
            <div className='c-phone-view'>
              <span className='c-phone-speaker' />
              <iframe title='mobile-view' src={this.state.siteUrl} />
              <span className='c-phone-mic' />
            </div>
          </aside>
        </section>

        <section className='o-section o-section--homepage-bg'>
          <aside className='o-section__aside-content o-section__aside-content--vertical-center'>
            <div className='c-img-container c-img-container--hide-on-mobile'>
              <img alt='Responsive Web Developer in Utah' src='https://res.cloudinary.com/gavmanweb/image/upload/v1490392405/portfolio/responsive-2044932_1920_j3yiey.png' />
            </div>
          </aside>

          <main className='o-section__main-content'>
            <h1 className='o-section__header'>Great UX</h1>
            <p>
              UX means User Experience, and it is EXTREMELY important! Great
              UX will help your users get done what they need to
              get done, find what they're looking for and over all, have an
              enjoyable experience. Lets give your users just that.
              read <a href='http://bit.ly/2nW6j81' target='_blanck'> here </a>
              to learn more.
            </p>
          </main>
          <span className='c-overlay' />
        </section>

        <section className='o-section o-section--white'>
          <main className='o-section__main-content'>
            <h1 className='o-section__header'>Contact Me!</h1>
            <p>
              Whether you need a website from scratch or you need to fix your website,
              I can help. Contact me, tell me everything I need to know, and
              I'll contact you asap so we can start making your website AWESOME.
            </p>
          </main>

          <aside className='o-section__aside-content o-section__aside-content--lg o-section__aside-content--center'>
            <form
              className='c-contact-form'
              action='https://formcarry.com/s/r1xlEfU3b'
              method='POST'
              acceptCharset='UTF-8'>
              <input type='email' placeholder='enter email address' name='email' />
              <textarea defaultValue='Contact Me!' name='message' />
              <button type='submit'>Send</button>
            </form>
          </aside>
        </section>
      </div>
    )
  }

  searchSite (event) {
    event.preventDefault()
    let url = this.refs.siteSearch.value
    this.setState({ siteUrl: url })
  }
}
