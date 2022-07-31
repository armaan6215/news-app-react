import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import PropTypes from "prop-types";

export default function News(props) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const article= [
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Patrick Collinson",
    "title": "‘Brexit to blame’: UK shoppers pay up to 50% more than those in EU",
    "description": "From Zara to Ikea and Decathlon, stores charge more for same items, Guardian Money research findsZara is charging British shoppers as much as 50% more than in Spain, while Decathlon partly blames Brexit for markups on e-bikes that can be up to £250 pricier in…",
    "url": "https://amp.theguardian.com/money/2022/jul/30/brexit-uk-shoppers-pay-more-eu-zara-ikea-decathlon",
    "urlToImage": "https://i.guim.co.uk/img/media/6ad8d295569397b15ce3e48d187c66de46ce8863/19_0_2522_1513/master/2522.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fb77282874c1227a91da754e3a307956",
    "publishedAt": "2022-07-30T11:00:23Z",
    "content": "Zara is charging British shoppers as much as 50% more than in Spain, while Decathlon partly blames Brexit for markups on e-bikes that can be up to £250 pricier in the UK than in France.\r\nThe figures … [+13060 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Guy Lodge",
    "title": "Streaming: the pick of the best children’s films for the summer holidays",
    "description": "Our critic surveys the streaming services’s current offerings to find the best family films – from Monsters, Inc to The Muppet Movie, Wolfwalkers to WadjdaYou’ve survived the heatwave, perhaps already been away, and still the school holidays stretch languidly…",
    "url": "https://amp.theguardian.com/film/2022/jul/30/streaming-the-pick-of-the-best-childrens-films-summer-holidays-family",
    "urlToImage": "https://i.guim.co.uk/img/media/b334d69acf435db1fef6c199d4a5ddaaff83981d/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=1c004fc0faf630521a8d86b74d62f42c",
    "publishedAt": "2022-07-30T07:00:19Z",
    "content": "Youve survived the heatwave, perhaps already been away, and still the school holidays stretch languidly into September, demanding plans and playdates and activities to fill the slowed summer hours. S… [+10150 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Riaz Phillips",
    "title": "Coconut curry and peppered tofu: Riaz Phillips’ vegan Jamaican recipes",
    "description": "A rich and satisfying sweet potato and chickpea coconut curry, and Jamaica meets China in a vegan take on peppered steak in a sticky, sweet and sour tofu stir-fryThere’s lots I crave about Jamaican food, beyond jerk and curried meat. At cook shops, tucked awa…",
    "url": "https://amp.theguardian.com/food/2022/jul/30/coconut-curry-peppered-tofu-vegan-jamaican-recipes-riaz-phillips",
    "urlToImage": "https://i.guim.co.uk/img/media/5e812a49bfe496e85d3f98a687a9e7a5e4c1db4c/0_0_4478_2686/master/4478.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9ede1b8f91430f217af98b0089bb4adc",
    "publishedAt": "2022-07-30T12:00:24Z",
    "content": "Theres lots I crave about Jamaican food, beyond jerk and curried meat. At cook shops, tucked away in shopping plazas, on highway roadsides and up in the hills, the Rastafari and Seventh-Day Adventist… [+5142 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "jmann@insider.com (Jyoti Mann)",
    "title": "Walmart plans to start selling used goods from companies including Apple and Samsung to help customers save money",
    "description": "The retailer will sell products including headphones, tablets and sewing machines for low prices as part of its \"Walmart Restored\" program.",
    "url": "https://www.businessinsider.com/walmart-plans-to-sell-used-goods-from-companies-such-as-apple-samsung-2022-7",
    "urlToImage": "https://i.insider.com/62cc3d3b114c1e001872ff64?width=1200&format=jpeg",
    "publishedAt": "2022-07-30T12:16:04Z",
    "content": "Walmart will start selling used products including headphones, tablets and sewing machines later this year to help shoppers save money and boost its online marketplace. \r\nThe retailer will let custom… [+1398 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Tech",
    "title": "Apple Watch Series 8 launch will be as important as iPhone 14 series; Here’s why - HT Tech",
    "description": "Apple Watch Series 8 launch will be as important as iPhone 14 series; Here’s why  HT TechView Full coverage on Google News",
    "url": "https://tech.hindustantimes.com/wearables/news/apple-watch-series-8-launch-will-be-as-important-as-iphone-14-series-here-s-why-71659177500574.html",
    "urlToImage": "https://images.hindustantimes.com/tech/img/2022/07/30/1600x900/20220409_182800_1649511626479_1659177752122_1659177752122.jpg",
    "publishedAt": "2022-07-30T10:43:18Z",
    "content": "The iPhone 14 series will definitely be one of the biggest releases of this year for tech enthusiasts. That's the way it has always been, ever since the late co-founder Steve Jobs started it all ! Th… [+2074 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Tech",
    "title": "Garena Free Fire MAX Redeem Codes for July 30: A chance to win the Riverdust Splasher - HT Tech",
    "description": "Garena Free Fire MAX Redeem Codes for July 30: A chance to win the Riverdust Splasher  HT Tech\r\nGarena Free Fire MAX redeem codes for 30 July 2022: How to claim free diamonds and gloo wall today  Sportskeeda\r\nGarena Free Fire Max Red…",
    "url": "https://tech.hindustantimes.com/how-to/garena-free-fire-max-redeem-codes-for-july-30-a-chance-to-win-the-riverdust-splasher-71659146128083.html",
    "urlToImage": "https://images.hindustantimes.com/tech/img/2022/07/30/1600x900/056_1651885411062_1659146227064_1659146227064.jpg",
    "publishedAt": "2022-07-30T02:12:29Z",
    "content": "Garena Free Fire MAX Redeem Codes for July 30: Recently, Free Fire social media accounts posted the best outfits of the year for every year since the game came out in 2018. The costumes were selected… [+2763 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Yúbal Fernández",
    "title": "De Android a iPhone: guía con los pasos antes y durante el proceso de llevar tus datos de Android a un nuevo iPhone",
    "description": "Vamos a explicarte cómo pasar de un móvil Android a un iPhone, migrando tus datos desde el sistema operativo de Google al de Apple. Igual que hicimos cuando te explicamos cómo pasar de iPhone a Android, ahora haremos la inversa diciéndote no solo el proceso p…",
    "url": "https://www.xataka.com/basics/android-a-iphone-guia-pasos-antes-durante-proceso-llevar-tus-datos-android-a-nuevo-iphone",
    "urlToImage": "https://i.blogs.es/3266bc/android-a-iphone/840_560.jpg",
    "publishedAt": "2022-07-30T10:00:46Z",
    "content": "Vamos a explicarte cómo pasar de un móvil Android a un iPhone, migrando tus datos desde el sistema operativo de Google al de Apple. Igual que hicimos cuando te explicamos cómo pasar de iPhone a Andro… [+14988 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Apple Newsroom"
    },
    "author": null,
    "title": "Recommended settings for Wi-Fi routers and access points",
    "description": "For the best security, performance, and reliability, we recommend these settings for Wi-Fi routers, base stations, or access points used with Apple products.",
    "url": "https://support.apple.com/en-us/HT202068",
    "urlToImage": null,
    "publishedAt": "2022-07-30T10:25:01Z",
    "content": "Set to a single, unique name (case-sensitive)\r\nThe Wi-Fi network name, or SSID (service set identifier), is the name your network uses to advertise its presence to other devices. It's also the name t… [+681 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Medium"
    },
    "author": "Kevin Fang",
    "title": "Dear startups: I hate subscription services",
    "description": "While SaaS models work wonderfully for B2B and many industries, it is not a one-size-fits-all tool to generate profits out of any product. Some apps and programs are best sold as-is, a buy-once, and forget about it deal.",
    "url": "https://fangdaddy.medium.com/dear-startups-i-hate-subscription-services-aecefeb0f089",
    "urlToImage": "https://miro.medium.com/max/1200/1*u3Ijsd2UiUgCI6FcxMOwcQ.jpeg",
    "publishedAt": "2022-07-30T08:33:50Z",
    "content": "Do we really need all these boxes? | Photo by Unsplash\r\nSubscriptions, Subscriptions, Subscriptions.\r\nEvery startup company these days tries to sell you a subscription.\r\nBoxes of random consignment k… [+6107 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Routersecurity.org"
    },
    "author": null,
    "title": "Router Security",
    "description": "Router Security Home Page",
    "url": "https://routersecurity.org/",
    "urlToImage": null,
    "publishedAt": "2022-07-30T10:15:44Z",
    "content": "This site focuses on the security of routers. Period. If you are interested in faster WiFi, look elsewhere.\r\nSee the recent updates to this site.\r\nTo be clear, this site is about ROUTER security, not… [+30072 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Benjamin Mayo",
    "title": "Martin Scorsese and Leonardo DiCaprio pair up again for another Apple TV+ movie",
    "description": "Before Killers of the Flower Moon even has an official release date, esteemed director Martin Scorsese and actor Leonardo DiCaprio have announced their next project set up at Apple Original Films, destined for Apple TV+ …\n more…\nThe post Martin Scorsese and L…",
    "url": "https://9to5mac.com/2022/07/30/scorsese-dicaprio-apple-tv-plus/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/apple-tv-plus-martin-scorsese.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-07-30T11:30:11Z",
    "content": "Before Killers of the Flower Moon even has an official release date, esteemed director Martin Scorsese and actor Leonardo DiCaprio have announced their next project set up at Apple Original Films, de… [+1075 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "José Adorno",
    "title": "New Beats Fit Pro colors confirmed by unreleased assets, availability unknown",
    "description": "Soon, Beats Fit Pro – the true competitor – will get more colors. 9to5Mac was able to discover unreleased assets that show the wireless earbuds in a new light pink, which hasn’t been announced by Apple or Beats so far.\n more…\nThe post New Beats Fit Pro colors…",
    "url": "https://9to5mac.com/2022/07/30/unreleased-beats-fit-pro-colors-spotted/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/unreleased-beats-fit-pro-9to5mac.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-07-30T11:58:17Z",
    "content": "Soon, Beats Fit Pro the true AirPods Pro competitor will get more colors. 9to5Mac was able to discover unreleased assets that show the wireless earbuds in a new light pink, which hasn’t been announce… [+1837 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Benjamin Mayo",
    "title": "iMessage encryption was one reason why Secret Service lost January 6 texts, may prevent employees from using iMessage in future",
    "description": "In the aftermath of the January 6, 2021 Capitol riots, the Secret Service has been blasted for losing text messages sent around that time about the attack, potentially violating federal record preservation laws. \nVia Politico, the Secret Service says one reas…",
    "url": "https://9to5mac.com/2022/07/30/imessage-encryption-january-6-riots/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/imessage-texts.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-07-30T11:05:14Z",
    "content": "In the aftermath of the January 6, 2021 Capitol riots, the Secret Service has been blasted for losing text messages sent around that time about the attack, potentially violating federal record preser… [+1882 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Tomoko Yokoi, Contributor, \n Tomoko Yokoi, Contributor\n https://www.forbes.com/sites/tomokoyokoi/",
    "title": "Some Machines Are Making Work More Accessible",
    "description": "Machines and robots in the workplace are often described as harbingers of automation. However, machines can also improve accessibility into the workplace for those with disabilities. This article provides a brief overview of how some machines are making the w…",
    "url": "https://www.forbes.com/sites/tomokoyokoi/2022/07/30/some-machines-are-making-work-more-accessible/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/62e4bf99d052bd56be5398d2/0x0.jpg?format=jpg&width=1200",
    "publishedAt": "2022-07-30T05:49:20Z",
    "content": "Accessibility computer icon\r\ngetty\r\nThe DAWN café in central Tokyo, Japan looks like any other modern service establishments in a bustling metropolis with its sleek architecture, open space and plent… [+4475 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Genbeta.com"
    },
    "author": "Bárbara Bécares",
    "title": "Instagram ha parado sus nuevos planes estilo TikTok: qué estaba pasando que hasta las hermanas Kardashian se han quejado",
    "description": "Instagram puso en marcha muchos cambios últimamente que han disgustado tanto a los usuarios que hasta se creó un Change.org para frenarlo (la campaña ya no está disponible). \n\n!--more-->\n\nLas hermanas Kardashian, grandes usuarias de esta plataforma, también …",
    "url": "https://www.genbeta.com/actualidad/instagram-ha-parado-sus-nuevos-planes-estilo-tiktok-que-estaba-pasando-que-hermanas-kardashian-se-han-quejado",
    "urlToImage": "https://i.blogs.es/ba7001/reels_iosx_2/840_560.jpg",
    "publishedAt": "2022-07-30T10:00:46Z",
    "content": "Instagram puso en marcha muchos cambios últimamente que han disgustado tanto a los usuarios que hasta se creó un Change.org para frenarlo (la campaña ya no está disponible). \r\nLas hermanas Kardashian… [+2385 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Journal du Geek",
    "title": "Découvrez comment tripler la vitesse de votre Mac pour moins de 20 euros",
    "description": "Découvrez comment redonner à votre Mac la vitesse de ses débuts avec un tout petit investissement. \nDécouvrez comment tripler la vitesse de votre Mac pour moins de 20 euros🚀",
    "url": "https://www.journaldugeek.com/bon-plan/decouvrez-comment-tripler-la-vitesse-de-votre-mac-pour-moins-de-20-euros/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/05/washing-machine-intego.jpg",
    "publishedAt": "2022-07-30T08:15:46Z",
    "content": "Découvrez comment redonner à votre Mac la vitesse de ses débuts avec un tout petit investissement.Au fil du temps, les appareils électroniques ont tendance à perdre de leurs performances. Les ordinat… [+3178 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "La consola que Apple lanzó hace siglos y que poca gente recuerda",
    "description": "Nos encantaría que Apple entrase en el mundo del gaming por la puerta grande con una consola, lo he comentado en varias ocasiones, pero en realidad es algo que la compañía ya hizo el siglo pasado. Lo que ves en la imagen es una consola de salón de Apple que e…",
    "url": "https://www.applesfera.com/apple-1/consola-que-apple-lanzo-hace-siglos-que-poca-gente-recuerda",
    "urlToImage": "https://i.blogs.es/c3d41e/apple-pippin/840_560.jpeg",
    "publishedAt": "2022-07-30T09:00:45Z",
    "content": "Nos encantaría que Apple entrase en el mundo del gaming por la puerta grande con una consola, lo he comentado en varias ocasiones, pero en realidad es algo que la compañía ya hizo el siglo pasado. Lo… [+2132 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Jesús Quesada",
    "title": "Google Pixel 6a VS iPhone SE (2022): cuáles son sus características, diferencias y precios",
    "description": "El iPhone SE (2022) es el smartphone más económico de Apple, pero no por ello el menos potente; incorpora el potente procesador Apple A15 Bionic, el mismo que la compañía integra en los modelos más caros, por lo que a buen precio podemos tener el rendimiento …",
    "url": "https://www.applesfera.com/seleccion/google-pixel-6a-vs-iphone-se-2022-cuales-sus-caracteristicas-diferencias-precios",
    "urlToImage": "https://i.blogs.es/341e02/pixel-6a-vs-iphone-se-2022/840_560.jpg",
    "publishedAt": "2022-07-30T11:00:46Z",
    "content": "El iPhone SE (2022) es el smartphone más económico de Apple, pero no por ello el menos potente; incorpora el potente procesador Apple A15 Bionic, el mismo que la compañía integra en los modelos más c… [+4382 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Tyler Lee",
    "title": "Fresh renders of the Samsung Galaxy Watch 5 Pro have surfaced",
    "description": "Thanks to a bunch of newly-leaked renders, we have a much clearer idea of what to expect from Samsung’s Galaxy Watch 5 Pro.\nThe post Fresh renders of the Samsung Galaxy Watch 5 Pro have surfaced first appeared on Phandroid.",
    "url": "https://phandroid.com/2022/07/29/fresh-renders-of-the-samsung-galaxy-watch-5-pro-have-surfaced/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2022/07/galaxywatch-5-640x360.jpg",
    "publishedAt": "2022-07-30T00:20:13Z",
    "content": "Along with the Galaxy Z Fold 4 and Flip 4, come 10th of August, Samsung is also expected to announce their next-gen smartwatch, the Galaxy Watch 5. Now thanks to Evan Blass, he has published a bunch … [+1262 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "HYPEBEAST"
    },
    "author": "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
    "title": "Leonardo DiCaprio and Martin Scorsese Team up for Their Seventh Film Together, 'The Wager'",
    "description": "Leonardo DiCaprio and Martin Scorsese are reuniting for their seventh film together — an adaptation of David Grann's nonfiction book, The Wager: A Tale of Shipwreck, Mutiny, and Murder.According to reports, Apple Original Films won the rights to the book and …",
    "url": "https://hypebeast.com/2022/7/leonardo-dicaprio-martin-scorsese-apple-originals-new-film-the-wager",
    "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Ftw-leonardo-dicaprio-martin-scorsese-apple-originals-new-film-the-wager.jpg?w=960&cbr=1&q=90&fit=max",
    "publishedAt": "2022-07-30T09:50:06Z",
    "content": "Leonardo DiCaprio and Martin Scorsese are reuniting for their seventh film together an adaptation of David Grann’s nonfiction book, The Wager: A Tale of Shipwreck, Mutiny, and Murder.\r\nAccording to r… [+1112 chars]"
    },
    {
    "source": {
    "id": "die-zeit",
    "name": "Die Zeit"
    },
    "author": "ZEIT ONLINE: News ",
    "title": "US-Börse: Amazon und Apple treiben US-Börsen an - Starker Juli",
    "description": "",
    "url": "https://www.zeit.de/zustimmung?url=https%3A%2F%2Fwww.zeit.de%2Fnews%2F2022-07%2F30%2Famazon-und-apple-treiben-us-boersen-an-starker-juli",
    "urlToImage": null,
    "publishedAt": "2022-07-30T01:12:06Z",
    "content": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BGR"
    },
    "author": "Maren Estrada",
    "title": "10 deals you can’t miss on Saturday: $13 Beckham Hotel pillows, $99 AirPods, pimple patches, more",
    "description": "BGR’s veteran team of deals experts always digs deep to find the best sales that other sites don’t tell you about. Today, on Saturday, July 30, there 10 stand-out deals that you should check out. Highlights include #1 best-selling Beckham Hotel Collection bed…",
    "url": "https://bgr.com/deals/10-deals-you-cant-miss-on-saturday-13-beckham-hotel-pillows-99-airpods-pimple-patches-more/",
    "urlToImage": "https://bgr.com/wp-content/uploads/2022/02/bgr-deals-of-the-day-2022-saturday.jpg?quality=82&strip=all",
    "publishedAt": "2022-07-30T11:58:00Z",
    "content": "If you purchase an independently reviewed product or service through a link on our website, we may receive an affiliate commission. Learn more.\r\nBGR’s veteran team of deals experts always digs deep t… [+3308 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iMore"
    },
    "author": "stephen.warwick@futurenet.com (Stephen Warwick)",
    "title": "Friday Night Baseball: How to watch Chicago Cubs at San Francisco Giants on Apple TV Plus free",
    "description": "The Chicago Cubs at San Francisco Giants on Apple TV+ at 10 pm ET tonight. Here's how to watch.",
    "url": "https://www.imore.com/music-movies-tv/friday-night-baseball-how-to-watch-chicago-cubs-at-san-francisco-giants-on-apple-tv-plus-free",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/nQsZoJ8wxQ62n35w6GKjGj-1200-80.jpg",
    "publishedAt": "2022-07-30T00:00:00Z",
    "content": "The Chicago Cubs play the San Francisco Giants on Apple TV+ at 10 pm tonight. Here's how to watch.\r\nHow to watch the Chicago Cubs at San Francisco Giants game on Apple TV+\r\nYou can watch the Chicago … [+2706 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Rolling Stone"
    },
    "author": "Kat Bouza",
    "title": "Watch Billie Eilish Perform Intimate Acoustic Set at Amoeba Music",
    "description": "\"It's been the most amazing year,\" the 20-year-old singer told the audience during her performance at the celebrated record store",
    "url": "https://www.rollingstone.com/music/music-news/billie-eilish-amoeba-music-acoustic-set-1390267/",
    "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-30-at-3.31.50-PM.png",
    "publishedAt": "2022-07-30T06:53:50Z",
    "content": "Billie Eilish marked the one-year anniversary of the release of her sophomore album Happier Than Ever Friday with a surprise performance at Amoeba Music in Hollywood.\r\nThe Grammy Award-winning singer… [+1614 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "caschy",
    "title": "iOS 16 und Apple Mail: „Senden rückgängig machen“ einstellen",
    "description": "iOS 16 kommt mit einigen Neuerungen daher. Unter anderem wird der Mail-Client wichtige, neue Funktionen erhalten, die längst überfällig sind. Da lassen sich beispielsweise Mails zurückstellen oder zurückrufen. Wobei es eigentlich kein klassisches Zurückrufen …",
    "url": "https://stadt-bremerhaven.de/ios-16-und-apple-mail-senden-rueckgaengig-machen-einstellen/",
    "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/mail-apple-zeit_.jpg",
    "publishedAt": "2022-07-30T10:30:14Z",
    "content": "iOS 16 kommt mit einigen Neuerungen daher. Unter anderem wird der Mail-Client wichtige, neue Funktionen erhalten, die längst überfällig sind. Da lassen sich beispielsweise Mails zurückstellen oder zu… [+882 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "André Westphal",
    "title": "Smartphone-Markt bricht im zweiten Quartal 2022 international um 9 % ein",
    "description": "Die Analysten von Canalys haben sich den internationalen Smartphone-Markt im zweiten Quartal 2022 genauer angeschaut. Die sinkende Nachfrage, auch aufgrund der hohen Inflation, hat dabei zu einer Reduzierung der weltweiten Auslieferungsmengen um 9 % geführt. …",
    "url": "https://stadt-bremerhaven.de/smartphone-markt-bricht-im-zweiten-quartal-2022-international-um-9-ein/",
    "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2021/07/Smartphone-Mobile.jpg",
    "publishedAt": "2022-07-30T09:00:21Z",
    "content": "Die Analysten von Canalys haben sich den internationalen Smartphone-Markt im zweiten Quartal 2022 genauer angeschaut. Die sinkende Nachfrage, auch aufgrund der hohen Inflation, hat dabei zu einer Red… [+2887 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "caschy",
    "title": "Google Pixel 6 und 6 Pro bekommen Camouflage-Funktion im Magic Eraser",
    "description": "Mit dem Google Pixel 6a (hier unser Testbericht) stellte Google auch eine neue Funktion für das magische Radiergummi vor. Schon „damals“ teilte Google mit, dass die neue Funktion auch für das Pixel 6 und das Pixel 6 Pro erscheine. Nun...Zum Beitrag: Google Pi…",
    "url": "https://stadt-bremerhaven.de/google-pixel-6-und-6-pro-bekommen-camouflage-funktion-im-magic-eraser/",
    "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Bildschirmfoto-2022-07-30-um-09.06.05_.jpg",
    "publishedAt": "2022-07-30T07:10:11Z",
    "content": "Mit dem Google Pixel 6a (hier unser Testbericht) stellte Google auch eine neue Funktion für das magische Radiergummi vor. Schon „damals“ teilte Google mit, dass die neue Funktion auch für das Pixel 6… [+2080 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Cnbeta.com"
    },
    "author": "raymon725",
    "title": "DataHerald：COVID大流行导致苹果零售商店客流恢复艰难",
    "description": "DataHerald 数据显示，COVID-19 大流行对零售商店造成了沉重的打击。出于对疫病传播的顾虑，许多城市都曾宣布保持社交疏离和鼓励居家办公的政策，直接导致前往实体零售门店的客流量也出现了锐减。即使作为全球最有价值的企业之一，拥有极高品牌忠诚度的苹果公司，也难以迎来快速的恢复。 阅读全文",
    "url": "https://www.cnbeta.com/articles/tech/1298753.htm",
    "urlToImage": "https://static.cnbetacdn.com/article/2022/0730/25cf4ab35dffa40.jpg",
    "publishedAt": "2022-07-30T04:44:26Z",
    "content": "Apple Store\r\nSlashGear 272 \r\nApple Store \r\n Genius Bar iPhoneiPadMac Apple Camp \r\nDataHerald Apple Store 15000 ~ 22000 \r\n 2020 1 20000 22000 \r\nCOVID-19 2020 4 1000 \r\nApple Store 13000 2021 5000 1/3 \r… [+74 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Cnbeta.com"
    },
    "author": "ugmbbc",
    "title": "苹果猛烈抨击Android恶意软件现状 强烈反对iOS增加侧载功能",
    "description": "苹果公司正在继续反击美国国会即将有望出台的反垄断法修正，该法案可能给AppStore带来重大变化。在苹果公司发给参议院司法委员会的一封信中特别强调了苹果公司的反侧载立场：称与侧载有关的安全问题是&quot;毫无根据、虚情假意和不诚实&quot;的。",
    "url": "https://www.cnbeta.com/articles/tech/1298639.htm",
    "urlToImage": null,
    "publishedAt": "2022-07-30T00:00:28Z",
    "content": "33Timothy Powderly-Bruce Schneier1\r\n\"\"\"\"\r\nAndroid\r\nAndroidiOS50Android\r\n2021Android50.31%Windows23.1%macOS9.2%iOS\"\"App StoreApp Review\r\nPDF\r\nhttps://9to5mac.com/wp-content/uploads/sites/6/2022/07/App… [+26 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Touchlab.jp"
    },
    "author": "Nakimo",
    "title": "【15%OFF】3つの充電器を1つに「Anker PowerWave+ 3-in-1 stand with Watch Holder」がクーポンセール中",
    "description": "Amazonで、ワイヤレス充電器「Anker PowerWave+ 3-in-1 stand with Watch Holder」の15%OFFクーポンが配布されています。 このワイヤレス充電器の主な特徴は次のとおり： […]\nThe post 【15%OFF】3つの充電器を1つに「Anker PowerWave+ 3-in-1 stand with Watch Holder」がクーポンセール中 first appeared on Touch Lab - タッチ ラボ.©2019 \"Touch Lab - タッチ…",
    "url": "http://touchlab.jp/2022/07/anker_powerwave_3in1stand_watch_2022july30/",
    "urlToImage": "http://touchlab.jp/wp-content/uploads/2022/05/anker_powerwave3in1_15.jpg",
    "publishedAt": "2022-07-30T01:52:40Z",
    "content": "Amazonで、ワイヤレス充電器「Anker PowerWave+ 3-in-1 stand with Watch Holder」の15%OFFクーポンが配布されています。\nこのワイヤレス充電器の主な特徴は次のとおり：\n\niPhone・AirPods・Apple Watchをまとめて充電\n最長24ヶ月保証\n別途、純正Apple Watch用ケー… [+798 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Shiona McCallum - Technology reporter",
    "title": "WhatsApp: We won't lower security for any government",
    "description": "The tech giant's boss says he'd rather see the app blocked than weaken encryption under proposed laws.",
    "url": "https://finance.yahoo.com/news/whatsapp-wont-lower-security-government-004450718.html",
    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/NwxNQphUPR8AU8GCPCwfgQ--~B/aD01NDk7dz05NzY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/bbc_us_articles_995/115a3ae4d0752103c3cb37fb0e29945d",
    "publishedAt": "2022-07-30T00:44:50Z",
    "content": "The boss of WhatsApp says it will not \"lower the security\" of its messenger service.\r\nIf asked by the government to weaken encryption, it would be \"very foolish\" to accept, Will Cathcart told the BBC… [+4900 chars]"
    },
    {
    "source": {
    "id": "bloomberg",
    "name": "Bloomberg"
    },
    "author": "Victoria Cavaliere",
    "title": "Your Weekend Reading: Recession or No Recession Is the Question",
    "description": "Get caught up.",
    "url": "https://www.bloomberg.com/news/newsletters/2022-07-30/bloomberg-weekend-reading-recession-or-no-recession-is-the-question",
    "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i01nW293U6tU/v1/1200x800.jpg",
    "publishedAt": "2022-07-30T11:30:28Z",
    "content": "So is it a recession or not? The US economy \r\nshrank for a second straight quarter, which to some \r\ntechnically means a downturn. But \r\nthe obscure panel of economists actually in charge of declaring… [+1823 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Motley Fool"
    },
    "author": "newsfeedback@fool.com (Nicholas Rossolillo)",
    "title": "The Smartest Investors Know About This 1 Key Development at Qualcomm",
    "description": "Qualcomm is getting ready to bring some much-needed change to the computing status quo.",
    "url": "https://www.fool.com/investing/2022/07/30/the-smartest-investors-know-about-this-1-key-devel/",
    "urlToImage": "https://g.foolcdn.com/editorial/images/692701/high-end-computing-cloud-pc.jpg",
    "publishedAt": "2022-07-30T11:30:00Z",
    "content": "The smartphone boom of the 2010s is getting a second wind from the upgrade cycle to 5G. However, \"mobile computing\" is taking on new meaning, and big changes are coming for the PC world as a result. … [+4361 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Motley Fool"
    },
    "author": "newsfeedback@fool.com (Rich Duprey)",
    "title": "2 Leading Tech Stocks to Buy in 2022 and Beyond",
    "description": "The technology sector has been beaten down hard after a decades-long run higher.",
    "url": "https://www.fool.com/investing/2022/07/30/2-leading-tech-stocks-to-buy-in-2022-and-beyond/",
    "urlToImage": "https://g.foolcdn.com/editorial/images/692297/stock-charts-invest-getty.jpeg",
    "publishedAt": "2022-07-30T11:17:00Z",
    "content": "Technology stocks have gone from being the best-performing sector of the past decade to one of the worst this year. The tech-heavy Nasdaq 100 gained 4,000% over the past 30 years but is down 26% in 2… [+3674 chars]"
    }
    ]
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const updateNews = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${props.page}&pageSize=${props.pageSize}&apiKey=${apiKey}`;
    
    setLoading(true);
    let response = await fetch(article);
    let data = await response.json();
    console.log("data:",data)
    setArticles(data.article);
    setTotalResults(data.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${props.page}&pageSize=${props.pageSize}&apiKey=${apiKey}`;

    const url = article;

    setLoading(true);
    let response = await fetch(url);
    let data = await response.text();
    setArticles(article.concat(data.article));
    setTotalResults(data.totalResults);
  };

  return (
    <>
      <strong>News</strong>
      <hr />
    <div className="container my-3">

      <div className="row">
      {article.map((element)=> {
        return <div className="col-md-4">
        <Card
          title={element.title}
          description={element.description}
          imageUrl={element.urlToImage}
          author={element.author}
        />
      </div>
      })}
      </div>
    </div>
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};