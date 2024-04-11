import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import Component1 from '../components/component1'
import BlogPostCard1 from '../components/blog-post-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ruby Smith | MIXSMITH</title>
        <meta property="og:title" content="Ruby Smith | MIXSMITH" />
      </Helmet>
      <section className="home-hero">
        <header data-role="Header" className="home-header navbar">
          <span className="home-text">
            <span className="home-text001">
              RUBY
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text002">SMITH</span>
          </span>
          <div className="home-nav">
            <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav1">
              <div className="home-container001">
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
            </div>
            <div className="home-icon-group"></div>
          </div>
        </header>
      </section>
      <div className="home-mobile-photo">
        <img
          alt="image"
          src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
          className="home-image"
        />
      </div>
      <section className="home-discography-og">
        <div className="home-slider slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="home-slider-track-container blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="home-slide banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/8a6a6f5864d1aabf875f2975d36a89e343e21a660857e36c62908c6e889ad3e1/nenah-3.jpg"
                    className="home-image01"
                  />
                </div>
                <div data-role="current-banner" className="home-slide01 banner">
                  <span className="home-text003">
                    <br className="home-text004"></br>
                    <span className="home-text005">
                      &apos;Tower Of God&apos;
                    </span>
                    <br className="home-text006"></br>
                    <span className="home-text007">Soundtrack</span>
                    <br className="home-text008"></br>
                    <span className="home-text009">Kevin Penkin</span>
                    <br className="home-text010"></br>
                    <br className="home-text011"></br>
                    <span className="home-text012">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/t/original/i/91bb0f0a661e5d6c02ca83220c02b2b0a454dec89512036d3aa6c613c4d186d6/towerofgod.jpg"
                    className="home-image02"
                  />
                </div>
                <div data-role="current-banner" className="home-slide02 banner">
                  <span className="home-text015">
                    <br className="home-text016"></br>
                    <span className="home-text017">MEMA.</span>
                    <br className="home-text018"></br>
                    <span className="home-text019">&apos;Ligas</span>
                    <span className="home-text020">&apos;</span>
                    <br className="home-text021"></br>
                    <br className="home-text022"></br>
                    <span className="home-text023">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://i1.sndcdn.com/artworks-sIuKNXKwzlGixyS5-GpR8jg-t500x500.jpg"
                    className="home-image03"
                  />
                </div>
                <div data-role="current-banner" className="home-slide03 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/b91383f579fe82e6e3f53df93664fa43bc82a7cfd0a496885d2e650dde41bc24/BIRHTDAY-COVER--scaled.jpeg"
                    className="home-image04"
                  />
                  <span className="home-text026">
                    <br className="home-text027"></br>
                    <span className="home-text028">Vivi Thill</span>
                    <br className="home-text029"></br>
                    <span className="home-text030">
                      &apos;i don&apos;t like my birthday&apos;
                    </span>
                    <br className="home-text031"></br>
                    <br className="home-text032"></br>
                    <span className="home-text033">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide04 banner">
                  <span className="home-text036">
                    <br className="home-text037"></br>
                    <span className="home-text038">Nenah</span>
                    <br className="home-text039"></br>
                    <span className="home-text040">&apos;Sick&apos;</span>
                    <br className="home-text041"></br>
                    <br className="home-text042"></br>
                    <span className="home-text043">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/4779634ee4d87ff48ba5259c177f2edb51384ce0cf96466739d038762594406b/nenah.jpg"
                    className="home-image05"
                  />
                </div>
                <div data-role="current-banner" className="home-slide05 banner">
                  <span className="home-text046">
                    <br className="home-text047"></br>
                    <span className="home-text048">Jade Empress</span>
                    <br className="home-text049"></br>
                    <span className="home-text050">&apos;Golden Hours</span>
                    <span className="home-text051">&apos;</span>
                    <br className="home-text052"></br>
                    <br className="home-text053"></br>
                    <span className="home-text054">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/0e5057fe059eea931492eaae1fa0e3ac0bb79d75d3f8b20a815de2da90472cab/golden-hours.jpeg"
                    className="home-image06"
                  />
                </div>
                <div data-role="current-banner" className="home-slide06 banner">
                  <span className="home-text057">
                    <br className="home-text058"></br>
                    <span className="home-text059">Juliana Davis</span>
                    <br className="home-text060"></br>
                    <span className="home-text061">&apos;Drinking Alone</span>
                    <span className="home-text062">&apos;</span>
                    <br className="home-text063"></br>
                    <br className="home-text064"></br>
                    <span className="home-text065">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/500/q/75/i/0e2de127bc3d96174464c2abb8d6461e7abd961a823efb729f6429be20f0e825/Juliana-Drinking-Alone.jpeg"
                    className="home-image07"
                  />
                </div>
                <div data-role="current-banner" className="home-slide07 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image08"
                  />
                  <span className="home-text068">
                    <br className="home-text069"></br>
                    <span className="home-text070">Kota Banks</span>
                    <br className="home-text071"></br>
                    <span className="home-text072">
                      &apos;20 Missed Calls&apos;
                    </span>
                    <br className="home-text073"></br>
                    <br className="home-text074"></br>
                    <span className="home-text075">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide08 banner">
                  <span className="home-text078">
                    <br className="home-text079"></br>
                    <span className="home-text080">Benedict Cork</span>
                    <br className="home-text081"></br>
                    <span className="home-text082">
                      &apos;The Midnight Sessions&apos;
                    </span>
                    <br className="home-text083"></br>
                    <span className="home-text084">EP</span>
                    <br className="home-text085"></br>
                    <br className="home-text086"></br>
                    <span className="home-text087">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/t/original/i/f53893b9bad4bd6626c2ced53e280551bcb9dea6fe15d520313ee610ef78a547/benedict-cork.jpg"
                    className="home-image09"
                  />
                </div>
                <div data-role="current-banner" className="home-slide09 banner">
                  <span className="home-text090">
                    <br className="home-text091"></br>
                    <span className="home-text092">Vivi Thill</span>
                    <br className="home-text093"></br>
                    <span className="home-text094">
                      &apos;don&apos;t break the heart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text095"></br>
                    <span className="home-text096">of a songwriter&apos;</span>
                    <br className="home-text097"></br>
                    <br className="home-text098"></br>
                    <span className="home-text099">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image10"
                  />
                </div>
                <div data-role="current-banner" className="home-slide10 banner">
                  <span className="home-text102">
                    <br className="home-text103"></br>
                    <span className="home-text104">Freddie Dickson</span>
                    <br className="home-text105"></br>
                    <span className="home-text106">
                      &apos;Idiot&apos;s Dream EP
                    </span>
                    <span className="home-text107">&apos;</span>
                    <br className="home-text108"></br>
                    <br className="home-text109"></br>
                    <span className="home-text110">Recording Engineer</span>
                    <br className="home-text111"></br>
                    <span className="home-text112">Mix Engineer</span>
                    <br className="home-text113"></br>
                    <span className="home-text114">Producer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/1a88dc27b47e1335e29b83e5df5df0ce11e256781c827a2da02032bebd245154/150937298_1518213858372527_7338739124970066346_o.jpeg"
                    className="home-image11"
                  />
                </div>
                <div data-role="current-banner" className="home-slide11 banner">
                  <span className="home-text117">
                    <br className="home-text118"></br>
                    <span className="home-text119">MEMA.</span>
                    <br className="home-text120"></br>
                    <span className="home-text121">&apos;Leve Escuro</span>
                    <span className="home-text122">&apos;</span>
                    <br className="home-text123"></br>
                    <span className="home-text124">Album</span>
                    <br className="home-text125"></br>
                    <br className="home-text126"></br>
                    <span className="home-text127">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://i.scdn.co/image/ab67616d0000b2730fb8066e3c560529a4d14feb"
                    className="home-image12"
                  />
                </div>
                <div data-role="current-banner" className="home-slide12 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/50fc70094115a398566c5333b3b3e99a3cdcd705c28778bcef0d2e27724a84b9/dancing-on-the-moon-1599217225-5lQzAHfpOq.jpg"
                    className="home-image13"
                  />
                  <span className="home-text130">
                    <br className="home-text131"></br>
                    <span className="home-text132">Unknown Brain ft.</span>
                    <br className="home-text133"></br>
                    <span className="home-text134">Luke Burr</span>
                    <br className="home-text135"></br>
                    <span className="home-text136">
                      &apos;Dancing On The Moon&apos;
                    </span>
                    <br className="home-text137"></br>
                    <br className="home-text138"></br>
                    <span className="home-text139">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide13 banner">
                  <span className="home-text142">
                    <br className="home-text143"></br>
                    <span className="home-text144">MEMA.</span>
                    <br className="home-text145"></br>
                    <span className="home-text146">&apos;Estou Bem&apos;</span>
                    <br className="home-text147"></br>
                    <br className="home-text148"></br>
                    <span className="home-text149">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image14"
                  />
                </div>
                <div data-role="current-banner" className="home-slide14 banner">
                  <span className="home-text152">
                    <br className="home-text153"></br>
                    <span className="home-text154">DOEXL</span>
                    <br className="home-text155"></br>
                    <span className="home-text156">&apos;MORPH EP&apos;</span>
                    <br className="home-text157"></br>
                    <br className="home-text158"></br>
                    <span className="home-text159">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/f70e1a868082caf0a8d36d2e26067c628b811ee8e35901f11f5653aa609411d2/a2983916112_10.jpeg"
                    className="home-image15"
                  />
                </div>
                <div data-role="current-banner" className="home-slide15 banner">
                  <img
                    alt="image"
                    src="https://media.pitchfork.com/photos/5e50060794f6ea0009d3f367/1:1/w_600/Look%20At%20Us%20Now%20Dad_Banoffee.jpg"
                    className="home-image16"
                  />
                  <span className="home-text162">
                    <br className="home-text163"></br>
                    <span className="home-text164">Banoffee</span>
                    <br className="home-text165"></br>
                    <span className="home-text166">
                      &apos;One Night Stand&apos;
                    </span>
                    <br className="home-text167"></br>
                    <br className="home-text168"></br>
                    <span className="home-text169">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide16 banner">
                  <span className="home-text172">
                    <br className="home-text173"></br>
                    <span className="home-text174">Jubilee ft. IQ</span>
                    <br className="home-text175"></br>
                    <span className="home-text176">
                      &apos;Fulla Curve&apos;
                    </span>
                    <br className="home-text177"></br>
                    <br className="home-text178"></br>
                    <span className="home-text179">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image17"
                  />
                </div>
                <div data-role="current-banner" className="home-slide17 banner">
                  <span className="home-text182">
                    <br className="home-text183"></br>
                    <span className="home-text184">ie saga</span>
                    <br className="home-text185"></br>
                    <span className="home-text186">&apos;Lived Too Much</span>
                    <span className="home-text187">&apos;</span>
                    <br className="home-text188"></br>
                    <br className="home-text189"></br>
                    <span className="home-text190">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/ab4f94d3e64dbb0729c198dbd15dbeb7ec5c31c1e866c34e5d2b89c9102fb00b/channels4_profile.jpeg"
                    className="home-image18"
                  />
                </div>
                <div data-role="current-banner" className="home-slide18 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image19"
                  />
                  <span className="home-text193">
                    <br className="home-text194"></br>
                    <span className="home-text195">Sandunes</span>
                    <br className="home-text196"></br>
                    <span className="home-text197">
                      &apos;A Little While&apos;
                    </span>
                    <br className="home-text198"></br>
                    <br className="home-text199"></br>
                    <span className="home-text200">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-controls">
              <button
                data-role="previous-banner-button"
                className="home-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container003">
            <Script
              html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '20px',
    loop: true,
    enableAutoplay: true,
    autoplayInterval: 800,
    transitionDuration: 0,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-discography-desktop">
        <div className="home-container004">
          <div className="home-container005">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-nx3sgWQ77e5X-0-t500x500.jpg"
              className="home-image20 covert-art"
            />
            <div className="text-padding">
              <span className="home-text203 text-margin AArtistName">
                <span className="AArtistName">Florian</span>
                <br></br>
              </span>
              <span className="home-text206 text-margin ASongTitle">
                &quot;L.O.B.A&quot;
              </span>
              <span className="home-text207 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container007">
            <img
              alt="image"
              src="https://globalmoneyworld.com/wp-content/uploads/2024/03/Sophie-Sutton-Nurse-1170x1170.jpg"
              className="home-image21 covert-art"
            />
            <div className="text-padding">
              <span className="home-text210 text-margin AArtistName">
                Sophie Sutton
              </span>
              <span className="home-text211 text-margin">
                &quot;Nurse&quot;
              </span>
              <span className="home-text212 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container009">
            <img
              alt="image"
              src="https://m.media-amazon.com/images/I/61V6DweOBxL._UF1000,1000_QL80_.jpg"
              className="home-image22 covert-art"
            />
            <div className="home-container010 text-padding">
              <span className="home-text215 AArtistName text-margin">
                Joy Denalane
              </span>
              <span className="home-text216 text-margin">
                &quot;Willpower&quot;
              </span>
              <span className="home-text217 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container011">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b2730fb8066e3c560529a4d14feb"
              className="home-image23 covert-art"
            />
            <div className="text-padding">
              <span className="home-text220 AArtistName text-margin">
                MEMA.
              </span>
              <span className="home-text221 text-margin">
                &quot;Leve Escura&quot;
              </span>
              <span className="home-text222 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container013">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
              className="home-image24 covert-art"
            />
            <div className="text-padding">
              <span className="home-text225 AArtistName text-margin">
                Sandunes
              </span>
              <span className="home-text226 text-margin">
                &quot;A Little While&quot;
              </span>
              <span className="home-text227 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container015">
            <img
              alt="image"
              src="https://i.ebayimg.com/images/g/tUMAAOSwa4dlkjN~/s-l1600.jpg"
              className="home-image25 covert-art"
            />
            <div className="home-container016 text-padding">
              <span className="home-text230 AArtistName text-margin">
                Nikki Minaj
              </span>
              <span className="home-text231 text-margin">
                &quot;Are You Gone Already&quot;, &apos;Let Me Calm Down (ft. J
                Cole)&quot;, &quot;Pink Birthday&quot;, &quot;Blessings (ft
                Tasha Cobbs Leonard)&quot;
              </span>
              <span className="home-text232 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container017">
            <img
              alt="image"
              src="https://s3.amazonaws.com/media.thecrimson.com/photos/2023/11/20/191149_1367121.png"
              className="home-image26 covert-art"
            />
            <div className="home-container018 text-padding">
              <span className="home-text235 AArtistName text-margin">
                Sabrina Carpenter
              </span>
              <span className="home-text236 text-margin">
                &quot;fruitcake&quot;
              </span>
              <span className="home-text237 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container019">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
              className="home-image27 covert-art"
            />
            <div className="home-container020 text-padding">
              <span className="home-text240 AArtistName text-margin">
                Vivi Thill
              </span>
              <span className="home-text241 text-margin">
                &quot;don&apos;t break the heart of a songwriter&quot;
              </span>
              <span className="home-text242 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container021">
            <img
              alt="image"
              src="https://best-fit.transforms.svdcdn.com/production/albums/FLETCHER-In-Search-Of-The-Antidote-cover.jpg?w=768&amp;q=95&amp;auto=format&amp;fit=crop&amp;dm=1709979373&amp;s=f66637f31b36d75dc97b437bb2e22589"
              className="home-image28 covert-art"
            />
            <div className="home-container022 text-padding">
              <span className="home-text245 AArtistName text-margin">
                FLETCHER
              </span>
              <span className="home-text246 text-margin">
                &quot;In Search of the Antidote&quot;
              </span>
              <span className="home-text247 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container023">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
              className="home-image29 covert-art"
            />
            <div className="home-container024 text-padding">
              <span className="home-text250 AArtistName text-margin">
                MEMA.
              </span>
              <span className="home-text251 text-margin">
                &quot;Estou Bem&quot;
              </span>
              <span className="home-text252 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container025">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
              className="home-image30 covert-art"
            />
            <div className="text-padding">
              <span className="home-text255 AArtistName text-margin">
                Kota Banks
              </span>
              <span className="home-text256 text-margin">
                &quot;20 Missed Calls&quot;
              </span>
              <span className="home-text257 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container027">
            <img
              alt="image"
              src="https://media.pitchfork.com/photos/5e50060794f6ea0009d3f367/1:1/w_600/Look%20At%20Us%20Now%20Dad_Banoffee.jpg"
              className="home-image31 covert-art"
            />
            <div className="text-padding">
              <span className="home-text260 text-margin">
                <span className="AArtistName">Banoffee</span>
                <br></br>
              </span>
              <span className="home-text263 text-margin">
                &quot;One Night Stand&quot;
              </span>
              <span className="home-text264 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container029">
            <img
              alt="image"
              src="https://f4.bcbits.com/img/a0023412240_10.jpg"
              className="home-image32 covert-art"
            />
            <div className="text-padding">
              <span className="home-text267 text-margin">
                <span className="AArtistName">Jubilee ft. IQ</span>
                <br></br>
              </span>
              <span className="home-text270 text-margin">
                &quot;Fulla Curve&quot;
              </span>
              <span className="home-text271 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container031">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/88/2e/c3/882ec3e7-1479-ae6f-b617-c29d2a5d83a0/7333475706225.jpg/1200x1200bb.jpg"
              className="home-image33 covert-art"
            />
            <div className="text-padding">
              <span className="home-text274 text-margin">
                <span className="AArtistName">COWZ</span>
                <br></br>
              </span>
              <span className="home-text277 text-margin">
                &quot;Most Fun I&apos;ve Had in Ages&quot;
              </span>
              <span className="home-text278 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container033">
            <img
              alt="image"
              src="https://freight.cargo.site/w/500/q/75/i/0e2de127bc3d96174464c2abb8d6461e7abd961a823efb729f6429be20f0e825/Juliana-Drinking-Alone.jpeg"
              className="home-image34 covert-art"
            />
            <div className="text-padding">
              <span className="home-text281 text-margin">
                <span className="AArtistName">Juliana Davis</span>
                <br></br>
              </span>
              <span className="home-text284 text-margin">
                &quot;Drinking Alone&quot;
              </span>
              <span className="home-text285 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container035">
            <img
              alt="image"
              src="https://i0.wp.com/loudwomen.org/wp-content/uploads/2024/01/420524143_339386165657004_6832940895509969388_n.jpg?fit=1053%2C1053&amp;ssl=1"
              className="home-image35 covert-art"
            />
            <div className="text-padding">
              <span className="home-text288 text-margin">
                <span className="AArtistName">COWZ</span>
                <br></br>
              </span>
              <span className="home-text291 text-margin">
                &quot;DOMINATION&quot;
              </span>
              <span className="home-text292 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container037">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b273a4ee671334d431568e6adfa9"
              className="home-image36 covert-art"
            />
            <div className="text-padding">
              <span className="home-text295 text-margin">
                <span className="AArtistName">JEYMES SAMUEL</span>
                <br></br>
              </span>
              <span className="home-text298 text-margin">
                &quot;THE BOOK OF CLARENCE (The Motion Picture Soundtrack)&quot;
              </span>
              <span className="home-text299 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container039">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-sIuKNXKwzlGixyS5-GpR8jg-t500x500.jpg"
              className="home-image37 covert-art"
            />
            <div className="text-padding">
              <span className="home-text302 text-margin">
                <span className="AArtistName">MEMA.</span>
                <br></br>
              </span>
              <span className="home-text305 text-margin">
                &quot;Ligas&quot;
              </span>
              <span className="home-text306 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container041">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/f70e1a868082caf0a8d36d2e26067c628b811ee8e35901f11f5653aa609411d2/a2983916112_10.jpeg"
              className="home-image38 covert-art"
            />
            <div className="text-padding">
              <span className="home-text309 text-margin">
                <span className="AArtistName">DOEXL</span>
                <br></br>
              </span>
              <span className="home-text312 text-margin">
                &quot;Morph EP&quot;
              </span>
              <span className="home-text313 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container043">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/b91383f579fe82e6e3f53df93664fa43bc82a7cfd0a496885d2e650dde41bc24/BIRHTDAY-COVER--scaled.jpeg"
              className="home-image39 covert-art"
            />
            <div className="text-padding">
              <span className="home-text316 text-margin">
                <span className="AArtistName">Vivi Thill</span>
                <br></br>
              </span>
              <span className="home-text319 text-margin">
                &quot;i don&apos;t like my birthday&quot;
              </span>
              <span className="home-text320 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container045">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/65/30/c0/6530c0ea-7214-83c2-226f-c254b80f173a/659783312178_cover.jpg/486x486bb.png"
              className="home-image40 covert-art"
            />
            <div className="text-padding">
              <span className="home-text323 text-margin">
                <span className="AArtistName">Midheaven</span>
                <br></br>
              </span>
              <span className="home-text326 text-margin">
                &quot;Diet Shasta EP&quot;
              </span>
              <span className="home-text327 text-margin">
                <span className="ARole">Producer / Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container047">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/4779634ee4d87ff48ba5259c177f2edb51384ce0cf96466739d038762594406b/nenah.jpg"
              className="home-image41 covert-art"
            />
            <div className="text-padding">
              <span className="home-text330 text-margin">
                <span className="AArtistName">NENAH</span>
                <br></br>
              </span>
              <span className="home-text333 text-margin">&quot;Sick&quot;</span>
              <span className="home-text334 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container049">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/ccb4ff446613515f1996ce559f4c46dabcf9944adf091288bd4d459b44837e40/nenah-fake-fur.jpeg"
              className="home-image42 covert-art"
            />
            <div className="text-padding">
              <span className="home-text337 text-margin">
                <span className="AArtistName">NENAH</span>
                <br></br>
              </span>
              <span className="home-text340 text-margin">
                &quot;Fake Fur ft. Pianwoo&quot;
              </span>
              <span className="home-text341 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container051">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-fb5TB7IlpKWOFKOC-ySjmWw-t500x500.jpg"
              className="home-image43 covert-art"
            />
            <div className="home-container052 text-padding">
              <span className="home-text344 text-margin AArtistName">
                Florian
              </span>
              <span className="home-text345 text-margin">
                &quot;fr33ze&quot;
              </span>
              <span className="home-text346 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container053">
            <img
              alt="image"
              src="https://freight.cargo.site/t/original/i/f53893b9bad4bd6626c2ced53e280551bcb9dea6fe15d520313ee610ef78a547/benedict-cork.jpg"
              className="home-image44 covert-art"
            />
            <div className="text-padding">
              <span className="home-text349 text-margin">
                <span className="AArtistName">Benedict Cork</span>
                <br></br>
              </span>
              <span className="home-text352 text-margin">
                &quot;The Midnight Sessions&quot;
              </span>
              <span className="home-text353 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container055">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/50fc70094115a398566c5333b3b3e99a3cdcd705c28778bcef0d2e27724a84b9/dancing-on-the-moon-1599217225-5lQzAHfpOq.jpg"
              className="home-image45 covert-art"
            />
            <div className="home-container056 text-padding">
              <span className="home-text356 text-margin AArtistName">
                Unknown Brain ft. Luke Burr
              </span>
              <span className="home-text357 text-margin">
                &quot;Dancing On The Moon&quot;
              </span>
              <span className="home-text358 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container057">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/1a88dc27b47e1335e29b83e5df5df0ce11e256781c827a2da02032bebd245154/150937298_1518213858372527_7338739124970066346_o.jpeg"
              className="home-image46 covert-art"
            />
            <div className="text-padding">
              <span className="home-text361 text-margin">
                <span className="AArtistName">Freddie Dickson</span>
                <br></br>
              </span>
              <span className="home-text364 text-margin">
                &quot;Idiot&apos;s Dream EP&quot;
              </span>
              <span className="home-text365 text-margin">
                <span className="ARole">Producer / Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container059">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/0e5057fe059eea931492eaae1fa0e3ac0bb79d75d3f8b20a815de2da90472cab/golden-hours.jpeg"
              className="home-image47 covert-art"
            />
            <div className="text-padding">
              <span className="home-text368 text-margin">
                <span className="AArtistName">Jade Empress</span>
                <br></br>
              </span>
              <span className="home-text371 text-margin">
                &quot;Golden Hours&quot;
              </span>
              <span className="home-text372 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-discography-mobile">
        <div className="home-container061">
          <div className="home-container062">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-nx3sgWQ77e5X-0-t500x500.jpg"
              className="home-image48 covert-art"
            />
            <div className="text-padding">
              <span className="home-text375 text-margin AArtistName">
                <span className="AArtistName">Florian</span>
                <br></br>
              </span>
              <span className="home-text378 text-margin ASongTitle">
                &quot;L.O.B.A&quot;
              </span>
              <span className="home-text379 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container064">
            <img
              alt="image"
              src="https://globalmoneyworld.com/wp-content/uploads/2024/03/Sophie-Sutton-Nurse-1170x1170.jpg"
              className="home-image49 covert-art"
            />
            <div className="text-padding">
              <span className="home-text382 text-margin AArtistName">
                Sophie Sutton
              </span>
              <span className="home-text383 text-margin">
                &quot;Nurse&quot;
              </span>
              <span className="home-text384 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container066">
            <img
              alt="image"
              src="https://m.media-amazon.com/images/I/61V6DweOBxL._UF1000,1000_QL80_.jpg"
              className="home-image50 covert-art"
            />
            <div className="home-container067 text-padding">
              <span className="home-text387 text-margin AArtistName">
                Joy Denalane
              </span>
              <span className="home-text388 text-margin">
                &quot;Willpower&quot;
              </span>
              <span className="home-text389 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container068">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b2730fb8066e3c560529a4d14feb"
              className="home-image51 covert-art"
            />
            <div className="text-padding">
              <span className="home-text392 text-margin AArtistName">
                MEMA.
              </span>
              <span className="home-text393 text-margin">
                &quot;Leve Escura&quot;
              </span>
              <span className="home-text394 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container070">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
              className="home-image52 covert-art"
            />
            <div className="text-padding">
              <span className="home-text397 text-margin AArtistName">
                Sandunes
              </span>
              <span className="home-text398 text-margin">
                &quot;A Little While&quot;
              </span>
              <span className="home-text399 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container072">
            <img
              alt="image"
              src="https://i.ebayimg.com/images/g/tUMAAOSwa4dlkjN~/s-l1600.jpg"
              className="home-image53 covert-art"
            />
            <div className="home-container073 text-padding">
              <span className="home-text402 text-margin AArtistName">
                Nikki Minaj
              </span>
              <span className="home-text403 text-margin">
                &quot;Are You Gone Already&quot;, &apos;Let Me Calm Down (ft. J
                Cole)&quot;, &quot;Pink Birthday&quot;, &quot;Blessings (ft
                Tasha Cobbs Leonard)&quot;
              </span>
              <span className="home-text404 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container074">
            <img
              alt="image"
              src="https://s3.amazonaws.com/media.thecrimson.com/photos/2023/11/20/191149_1367121.png"
              className="home-image54 covert-art"
            />
            <div className="home-container075 text-padding">
              <span className="home-text407 text-margin AArtistName">
                Sabrina Carpenter
              </span>
              <span className="home-text408 text-margin">
                &quot;fruitcake&quot;
              </span>
              <span className="home-text409 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container076">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
              className="home-image55 covert-art"
            />
            <div className="home-container077 text-padding">
              <span className="home-text412 text-margin AArtistName">
                Vivi Thill
              </span>
              <span className="home-text413 text-margin">
                &quot;don&apos;t break the heart of a songwriter&quot;
              </span>
              <span className="home-text414 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container078">
            <img
              alt="image"
              src="https://best-fit.transforms.svdcdn.com/production/albums/FLETCHER-In-Search-Of-The-Antidote-cover.jpg?w=768&amp;q=95&amp;auto=format&amp;fit=crop&amp;dm=1709979373&amp;s=f66637f31b36d75dc97b437bb2e22589"
              className="home-image56 covert-art"
            />
            <div className="home-container079 text-padding">
              <span className="home-text417 text-margin AArtistName">
                FLETCHER
              </span>
              <span className="home-text418 text-margin">
                &quot;In Search of the Antidote&quot;
              </span>
              <span className="home-text419 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container080">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
              className="home-image57 covert-art"
            />
            <div className="home-container081 text-padding">
              <span className="home-text422 text-margin AArtistName">
                MEMA.
              </span>
              <span className="home-text423 text-margin">
                &quot;Estou Bem&quot;
              </span>
              <span className="home-text424 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container082">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
              className="home-image58 covert-art"
            />
            <div className="text-padding">
              <span className="home-text427 text-margin AArtistName">
                Kota Banks
              </span>
              <span className="home-text428 text-margin">
                &quot;20 Missed Calls&quot;
              </span>
              <span className="home-text429 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container084">
            <img
              alt="image"
              src="https://media.pitchfork.com/photos/5e50060794f6ea0009d3f367/1:1/w_600/Look%20At%20Us%20Now%20Dad_Banoffee.jpg"
              className="home-image59 covert-art"
            />
            <div className="text-padding">
              <span className="home-text432 text-margin">
                <span className="AArtistName">Banoffee</span>
                <br></br>
              </span>
              <span className="home-text435 text-margin">
                &quot;One Night Stand&quot;
              </span>
              <span className="home-text436 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container086">
            <img
              alt="image"
              src="https://f4.bcbits.com/img/a0023412240_10.jpg"
              className="home-image60 covert-art"
            />
            <div className="text-padding">
              <span className="home-text439 text-margin">
                <span className="AArtistName">Jubilee ft. IQ</span>
                <br></br>
              </span>
              <span className="home-text442 text-margin">
                &quot;Fulla Curve&quot;
              </span>
              <span className="home-text443 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container088">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/88/2e/c3/882ec3e7-1479-ae6f-b617-c29d2a5d83a0/7333475706225.jpg/1200x1200bb.jpg"
              className="home-image61 covert-art"
            />
            <div className="text-padding">
              <span className="home-text446 text-margin">
                <span className="AArtistName">COWZ</span>
                <br></br>
              </span>
              <span className="home-text449 text-margin">
                &quot;Most Fun I&apos;ve Had in Ages&quot;
              </span>
              <span className="home-text450 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container090">
            <img
              alt="image"
              src="https://freight.cargo.site/w/500/q/75/i/0e2de127bc3d96174464c2abb8d6461e7abd961a823efb729f6429be20f0e825/Juliana-Drinking-Alone.jpeg"
              className="home-image62 covert-art"
            />
            <div className="text-padding">
              <span className="home-text453 text-margin">
                <span className="AArtistName">Juliana Davis</span>
                <br></br>
              </span>
              <span className="home-text456 text-margin">
                &quot;Drinking Alone&quot;
              </span>
              <span className="home-text457 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container092">
            <img
              alt="image"
              src="https://i0.wp.com/loudwomen.org/wp-content/uploads/2024/01/420524143_339386165657004_6832940895509969388_n.jpg?fit=1053%2C1053&amp;ssl=1"
              className="home-image63 covert-art"
            />
            <div className="text-padding">
              <span className="home-text460 text-margin">
                <span className="AArtistName">COWZ</span>
                <br></br>
              </span>
              <span className="home-text463 text-margin">
                &quot;DOMINATION&quot;
              </span>
              <span className="home-text464 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container094">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b273a4ee671334d431568e6adfa9"
              className="home-image64 covert-art"
            />
            <div className="text-padding">
              <span className="home-text467 text-margin">
                <span className="AArtistName">JEYMES SAMUEL</span>
                <br></br>
              </span>
              <span className="home-text470 text-margin">
                &quot;THE BOOK OF CLARENCE (The Motion Picture Soundtrack)&quot;
              </span>
              <span className="home-text471 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container096">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-sIuKNXKwzlGixyS5-GpR8jg-t500x500.jpg"
              className="home-image65 covert-art"
            />
            <div className="text-padding">
              <span className="home-text474 text-margin">
                <span className="AArtistName">MEMA.</span>
                <br></br>
              </span>
              <span className="home-text477 text-margin">
                &quot;Ligas&quot;
              </span>
              <span className="home-text478 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container098">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/f70e1a868082caf0a8d36d2e26067c628b811ee8e35901f11f5653aa609411d2/a2983916112_10.jpeg"
              className="home-image66 covert-art"
            />
            <div className="text-padding">
              <span className="home-text481 text-margin">
                <span className="AArtistName">DOEXL</span>
                <br></br>
              </span>
              <span className="home-text484 text-margin">
                &quot;Morph EP&quot;
              </span>
              <span className="home-text485 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container100">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/b91383f579fe82e6e3f53df93664fa43bc82a7cfd0a496885d2e650dde41bc24/BIRHTDAY-COVER--scaled.jpeg"
              className="home-image67 covert-art"
            />
            <div className="text-padding">
              <span className="home-text488 text-margin">
                <span className="AArtistName">Vivi Thill</span>
                <br></br>
              </span>
              <span className="home-text491 text-margin">
                &quot;i don&apos;t like my birthday&quot;
              </span>
              <span className="home-text492 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container102">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/65/30/c0/6530c0ea-7214-83c2-226f-c254b80f173a/659783312178_cover.jpg/486x486bb.png"
              className="home-image68 covert-art"
            />
            <div className="text-padding">
              <span className="home-text495 text-margin">
                <span className="AArtistName">Midheaven</span>
                <br></br>
              </span>
              <span className="home-text498 text-margin">
                &quot;Diet Shasta EP&quot;
              </span>
              <span className="home-text499 text-margin">
                <span className="ARole">Producer / Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container104">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/4779634ee4d87ff48ba5259c177f2edb51384ce0cf96466739d038762594406b/nenah.jpg"
              className="home-image69 covert-art"
            />
            <div className="text-padding">
              <span className="home-text502 text-margin">
                <span className="AArtistName">NENAH</span>
                <br></br>
              </span>
              <span className="home-text505 text-margin">&quot;Sick&quot;</span>
              <span className="home-text506 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container106">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/ccb4ff446613515f1996ce559f4c46dabcf9944adf091288bd4d459b44837e40/nenah-fake-fur.jpeg"
              className="home-image70 covert-art"
            />
            <div className="text-padding">
              <span className="home-text509 text-margin">
                <span className="AArtistName">NENAH</span>
                <br></br>
              </span>
              <span className="home-text512 text-margin">
                &quot;Fake Fur ft. Pianwoo&quot;
              </span>
              <span className="home-text513 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container108">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-fb5TB7IlpKWOFKOC-ySjmWw-t500x500.jpg"
              className="home-image71 covert-art"
            />
            <div className="home-container109 text-padding">
              <span className="home-text516 AArtistName text-margin">
                Florian
              </span>
              <span className="home-text517 text-margin">
                &quot;fr33ze&quot;
              </span>
              <span className="home-text518 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container110">
            <img
              alt="image"
              src="https://freight.cargo.site/t/original/i/f53893b9bad4bd6626c2ced53e280551bcb9dea6fe15d520313ee610ef78a547/benedict-cork.jpg"
              className="home-image72 covert-art"
            />
            <div className="text-padding">
              <span className="home-text521 text-margin">
                <span className="AArtistName">Benedict Cork</span>
                <br></br>
              </span>
              <span className="home-text524 text-margin">
                &quot;The Midnight Sessions&quot;
              </span>
              <span className="home-text525 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container112">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/50fc70094115a398566c5333b3b3e99a3cdcd705c28778bcef0d2e27724a84b9/dancing-on-the-moon-1599217225-5lQzAHfpOq.jpg"
              className="home-image73 covert-art"
            />
            <div className="home-container113 text-padding">
              <span className="home-text528 text-margin AArtistName">
                Unknown Brain ft. Luke Burr
              </span>
              <span className="home-text529 text-margin">
                &quot;Dancing On The Moon&quot;
              </span>
              <span className="home-text530 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container114">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/1a88dc27b47e1335e29b83e5df5df0ce11e256781c827a2da02032bebd245154/150937298_1518213858372527_7338739124970066346_o.jpeg"
              className="home-image74 covert-art"
            />
            <div className="text-padding">
              <span className="home-text533 text-margin">
                <span className="AArtistName">Freddie Dickson</span>
                <br></br>
              </span>
              <span className="home-text536 text-margin">
                &quot;Idiot&apos;s Dream EP&quot;
              </span>
              <span className="home-text537 text-margin">
                <span className="ARole">Producer / Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container116">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/0e5057fe059eea931492eaae1fa0e3ac0bb79d75d3f8b20a815de2da90472cab/golden-hours.jpeg"
              className="home-image75 covert-art"
            />
            <div className="text-padding">
              <span className="home-text540 text-margin">
                <span className="AArtistName">Jade Empress</span>
                <br></br>
              </span>
              <span className="home-text543 text-margin">
                &quot;Golden Hours&quot;
              </span>
              <span className="home-text544 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div id="listen" className="home-spotify-player">
        <div className="home-container118">
          <div className="home-container119">
            <div className="home-container120">
              <svg viewBox="0 0 1024 1024" className="home-icon08">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <h1 className="home-heading">
              <span className="home-text547">LISTEN</span>
              <br></br>
            </h1>
          </div>
        </div>
        <div className="home-container121">
          <div className="home-container122">
            <Script
              html={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3t77EbWwWUgGWbzMkwqsqz?utm_source=generator&theme=0" width="100%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
            ></Script>
          </div>
        </div>
        <div className="home-live-sessions">
          <div className="home-container123">
            <div className="home-container124">
              <div className="home-container125">
                <Script
                  html={`<iframe width="420" height="280" src="https://www.youtube-nocookie.com/embed/nusuZ1bneQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
                ></Script>
              </div>
            </div>
            <div className="home-container126">
              <div className="home-container127">
                <Script
                  html={`<iframe width="420" height="280" src="https://www.youtube-nocookie.com/embed/4a-5UhhmJ2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
                ></Script>
              </div>
            </div>
          </div>
          <div className="home-container128">
            <span className="home-text549">
              Live Sessions recorded and mixed by Ruby Smith for Circle Studios
              by Sony Music
            </span>
          </div>
        </div>
      </div>
      <section id="about" className="home-about">
        <div className="home-container129">
          <div className="home-container130">
            <div className="home-container131">
              <div className="home-container132">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <h1 className="home-heading1">
                <span className="home-text550">ABOUT</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              <span className="home-text552">Los Angeles</span>
              <span className="home-text553">
                {' '}
                based mixer working with stereo and immersive formats.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text554">
                Mentored by GRAMMY award winning mixer
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text555">Rob Kinelski</span>
              <span className="home-text556">
                , Smith is a rising talent set apart by her perspective being
                immersed in music scenes across the globe. From Brisbane, to
                London, to Berlin, to Los Angeles.
              </span>
              <br className="home-text557"></br>
              <br className="home-text558"></br>
              <span className="home-text559">
                Growing up in Australia, Smith cured small-town-boredom getting
                her first DAW at age 12, setting in motion a lifelong obsession.
                She went on to play in bands at shows and festivals across the
                country before moving to London in 2017 to learn from some of
                the industry&apos;s top professionals.
              </span>
              <br className="home-text560"></br>
              <br className="home-text561"></br>
              <span className="home-text562">
                Smith cut her teeth engineering in London and Berlin&apos;s
                lively studio scenes. Working out of 
              </span>
              <span className="home-text563">
                Sony Music&apos;s Circle Studios, Red Bull Studio, Strongroom
                Studios and Noatune Studios
              </span>
              <span className="home-text564">
                . Working with a range of artists;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text565">
                Joy Denalane, Jubilee, Banoffee, Headie One
              </span>
              <span className="home-text566">, </span>
              <span className="home-text567">Kota Banks </span>
              <span className="home-text568">+ more.</span>
              <br className="home-text569"></br>
              <br className="home-text570"></br>
              <span className="home-text571">
                Passionate about educating and empowering the next generation of
                music makers, Smith has lectured students at BIMM Berlin
                teaching Recording Techniques, Mixing, and Psychology of Music.
                As well as leading masterclasses for SAE mentoring rising
                producers.
              </span>
              <br></br>
            </p>
            <div className="home-container133">
              <a
                href="http://www.instagram.com/rubysmith.wav"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon12"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ruby-smith-54b8221a4/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon14 GreenHead1"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="home-container134">
            <div className="home-container135">
              <span className="home-text573">
                <br className="home-text574"></br>
                <br className="home-text575"></br>
                <br className="home-text576"></br>
                <br className="home-text577"></br>
                <br className="home-text578"></br>
                <br className="home-text579"></br>
                <br className="home-text580"></br>
                <br className="home-text581"></br>
                <br className="home-text582"></br>
                <br className="home-text583"></br>
                <br className="home-text584"></br>
                <br className="home-text585"></br>
                <br className="home-text586"></br>
                <br className="home-text587"></br>
                <br className="home-text588"></br>
                <br className="home-text589"></br>
                <br className="home-text590"></br>
                <br className="home-text591"></br>
                <br className="home-text592"></br>
                <br className="home-text593"></br>
                <br className="home-text594"></br>
                <br className="home-text595"></br>
                <br className="home-text596"></br>
                <br className="home-text597"></br>
                <br className="home-text598"></br>
                <br className="home-text599"></br>
                <br className="home-text600"></br>
                <br className="home-text601"></br>
                <span className="home-text602">Photographed by</span>
                <span className="home-text603"> Linh Nguyen</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-discography">
        <div className="home-slider1 slider blaze-slider">
          <div className="home-slider-container1 blaze-container">
            <div className="home-slider-track-container1 blaze-track-container">
              <div className="home-slider-track1 blaze-track">
                <div data-role="current-banner" className="home-slide19 banner">
                  <span className="home-text605">
                    <br className="home-text606"></br>
                    <span className="home-text607">Vivi Thill</span>
                    <br className="home-text608"></br>
                    <span className="home-text609">
                      &apos;don&apos;t break the heart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text610"></br>
                    <span className="home-text611">of a songwriter&apos;</span>
                    <br className="home-text612"></br>
                    <br className="home-text613"></br>
                    <span className="home-text614">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image76"
                  />
                </div>
                <div data-role="current-banner" className="home-slide20 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image77"
                  />
                  <span className="home-text617">
                    <br className="home-text618"></br>
                    <span className="home-text619">Kota Banks</span>
                    <br className="home-text620"></br>
                    <span className="home-text621">
                      &apos;20 Missed Calls&apos;
                    </span>
                    <br className="home-text622"></br>
                    <br className="home-text623"></br>
                    <span className="home-text624">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide21 banner">
                  <span className="home-text627">
                    <br className="home-text628"></br>
                    <span className="home-text629">MEMA.</span>
                    <br className="home-text630"></br>
                    <span className="home-text631">&apos;Estou Bem&apos;</span>
                    <br className="home-text632"></br>
                    <br className="home-text633"></br>
                    <span className="home-text634">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image78"
                  />
                </div>
                <div data-role="current-banner" className="home-slide22 banner">
                  <span className="home-text637"></span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image79"
                  />
                </div>
                <div data-role="current-banner" className="home-slide23 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image80"
                  />
                  <span className="home-text638">
                    <br className="home-text639"></br>
                    <span className="home-text640">Sandunes</span>
                    <br className="home-text641"></br>
                    <span className="home-text642">
                      &apos;A Little While&apos;
                    </span>
                    <br className="home-text643"></br>
                    <br className="home-text644"></br>
                    <span className="home-text645">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-controls1">
              <button
                data-role="previous-banner-button"
                className="home-previous1 blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next1 blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container137">
            <Script
              html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '20px',
    loop: true,
    enableAutoplay: true,
    autoplayinterval: 500,
    transitionDuration: 0,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <div className="home-what-i-do-web">
        <div className="home-container138">
          <div id="whatido" className="home-container139">
            <div className="home-container140">
              <div className="home-container141">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <h1 className="home-heading2">
                <span className="home-text648">WHAT I DO</span>
                <br className="home-text649"></br>
              </h1>
            </div>
          </div>
          <div className="home-container142">
            <div className="home-container143">
              <span className="home-text650">
                <span className="home-text651">RECORDING</span>
                <br className="home-text652"></br>
                <span className="home-text653"> Vocal Tracking</span>
                <br className="home-text654"></br>
                <span className="home-text655"> Full band tracking</span>
                <br className="home-text656"></br>
                <span className="home-text657"> Live Sessions</span>
                <br className="home-text658"></br>
                <span className="home-text659">
                   Podcast, Voiceover &amp; Radio IDs
                </span>
                <br className="home-text660"></br>
                <span className="home-text661"> Broadcast for livestream</span>
                <br className="home-text662"></br>
                <br className="home-text663"></br>
                <span className="home-text664">SOFTWARE I USE</span>
                <br className="home-text665"></br>
                <span className="home-text666"> Pro Tools HD</span>
                <br className="home-text667"></br>
                <span className="home-text668"> Logic Pro X</span>
                <br className="home-text669"></br>
                <span className="home-text670"> </span>
                <span className="home-text671">UAD Console</span>
                <br className="home-text672"></br>
                <span className="home-text673"> Izotope RX</span>
                <br className="home-text674"></br>
                <span className="home-text675"> Fab Filter Pro</span>
                <br className="home-text676"></br>
                <span className="home-text677">
                   Soundtoys
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text678"></br>
                <span className="home-text679"> + more</span>
                <br className="home-text680"></br>
                <br className="home-text681"></br>
                <span className="home-text682">HARDWARE I USE</span>
                <br className="home-text683"></br>
                <span className="home-text684"> SSL4000G Series</span>
                <br className="home-text685"></br>
                <span className="home-text686"> SSL AWS 948</span>
                <br className="home-text687"></br>
                <span className="home-text688">
                   Outboard preamps, compressors &amp; EQs
                </span>
                <br className="home-text689"></br>
                <span className="home-text690">
                   Dante Level 1 Certification
                </span>
                <br className="home-text691"></br>
                <span className="home-text692">
                   Universal Audio Apollo Systems
                </span>
                <br className="home-text693"></br>
                <span className="home-text694">
                   Wireless In Ear Monitoring Systems
                </span>
                <br className="home-text695"></br>
                <span className="home-text696">
                   Wireless Microphone Systems
                </span>
                <br className="home-text697"></br>
                <span className="home-text698"> Ferrofish Converters</span>
                <br className="home-text699"></br>
                <span className="home-text700">
                   Antelope Orion Converters
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text701"></br>
                <span className="home-text702"> + more</span>
                <br className="home-text703"></br>
              </span>
            </div>
            <span className="home-text704">
              <span className="home-text705">MIXING</span>
              <br className="home-text706"></br>
              <span className="home-text707"> Stereo &amp; Atmos Mixing</span>
              <br className="home-text708"></br>
              <span className="home-text709"> Vocal Tuning with Melodyne</span>
              <br className="home-text710"></br>
              <span className="home-text711">
                 Vocalign
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text712"></br>
              <span className="home-text713"> Drum Editing</span>
              <br className="home-text714"></br>
              <span className="home-text715"> Podcast</span>
              <br className="home-text716"></br>
              <br className="home-text717"></br>
              <br className="home-text718"></br>
              <span className="home-text719">STUDIOS IVE WORKED FOR</span>
              <br className="home-text720"></br>
              <span className="home-text721">
                 Rob Kinelski - Mix Assistant
              </span>
              <br className="home-text722"></br>
              <span className="home-text723">
                 Circle Studios by Sony Music
              </span>
              <br className="home-text724"></br>
              <span className="home-text725">
                 Red Bull Studios London &amp; Berlin
              </span>
              <br className="home-text726"></br>
              <span className="home-text727"> Strongroom Studios London</span>
              <br className="home-text728"></br>
              <span className="home-text729"> Noatune Studios London</span>
              <br className="home-text730"></br>
              <br className="home-text731"></br>
              <span className="home-text732">AWARDS</span>
              <br className="home-text733"></br>
              <span className="home-text734">
                 Awarded Scholarship for Mix With   The Masters, from We Are
                Moving   The Needle
              </span>
              <br className="home-text735"></br>
              <span className="home-text736">
                 Overall Winner of Shure x Red   Bull’s Soundscapes Competition
              </span>
              <br className="home-text737"></br>
              <span className="home-text738">
                 Madison Square Garden’s Up and   Coming Award
              </span>
              <br className="home-text739"></br>
              <br className="home-text740"></br>
              <span className="home-text741">MASTERCLASSES</span>
              <br className="home-text742"></br>
              <span className="home-text743"> P</span>
              <span className="home-text744">
                op Beuro x SAE Electronic   Barcamp
              </span>
              <br className="home-text745"></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-what-i-do-mobile">
        <div className="home-container144">
          <div className="home-container145">
            <div className="home-container146">
              <svg viewBox="0 0 1024 1024" className="home-icon22">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <h1 className="home-heading3">
              <span className="home-text746">WHAT I DO</span>
              <br className="home-text747"></br>
            </h1>
          </div>
        </div>
        <div className="home-container147">
          <Component1></Component1>
        </div>
      </div>
      <div className="home-blog">
        <h1 id="blog" className="home-heading4">
          <span className="home-text748">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text749">&gt;</span>
          <span className="home-text750">BLOG</span>
          <br></br>
        </h1>
      </div>
      <div className="home-blog1">
        <div className="home-container148">
          <BlogPostCard1
            label="ENGINEERING"
            title="Why I bounce and label stems the same way every time"
            author="Ruby"
            imageSrc="https://freight.cargo.site/w/700/q/75/i/cc96e14a645ddc6f1519f992742420d722b796593c13d23667012519958c551f/P1150624.jpg"
            profileSrc="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName3"
          ></BlogPostCard1>
        </div>
        <div className="home-container149">
          <BlogPostCard1
            title="The Engineer's Swiss Army Knife: My Go-To Tools for Any Recording Situation"
            author="Ruby"
            imageSrc="https://freight.cargo.site/w/1500/q/75/i/e566bfd5e3749ff2e622b56c64d7efc96e849888ced3969a6dfd4cc226d47e7a/7__Moog_Sound_Studio_Screwdriver.jpg"
            profileSrc="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName2"
          ></BlogPostCard1>
        </div>
        <div className="home-container150">
          <BlogPostCard1
            label="ENGINEERING"
            title="How I put the vocalists experience first in vocal recording sessions"
            author="Ruby"
            imageSrc="https://freight.cargo.site/w/600/q/94/i/017413563fde9f6ef826aa92132d22e23255927b3ca47e6cc8cceb4dd4c474b3/telefunken-u47-microphone.jpg"
            description="What do you listen for when you listen to music? For engineers and musicians alike, it's easy to catch yourself just listeni"
            profileSrc="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName1"
          ></BlogPostCard1>
        </div>
      </div>
      <section id="contact" className="home-contact">
        <div className="home-content">
          <img
            alt="image"
            src="https://freight.cargo.site/w/400/q/75/i/7c0670ae8d6010db1918d143eb7bc3ff6c656a62b8908f3c6b0d706797758e07/New-Project-1.png"
            className="home-image81"
          />
          <div className="home-container151">
            <span className="home-text752">
              <span className="home-text753">  RUBY SMITH</span>
              <br></br>
              <span>AUDIO ENGINEER</span>
              <br></br>
            </span>
            <span className="home-text757">
              <br></br>
              <span>Stay in touch</span>
              <br></br>
            </span>
            <span className="home-text761">
              <span className="home-text762">For all enquiries:</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>ruby@rubysmith.xyz</span>
            </span>
            <svg viewBox="0 0 1024 1024" className="home-icon24">
              <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
            </svg>
            <a
              href="http://www.instagram.com/rubysmith.wav"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon26">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ruby-smith-54b8221a4/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon28 GreenHead1"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content1">
          <div className="home-bottom">
            <span className="home-text766">
              <span>© 2024 MIXSMITH LLC</span>
              <br></br>
            </span>
            <button data-role="scroll-top" className="home-button button">
              <img alt="image" src="/arrow.svg" className="home-image82" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-container153">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
