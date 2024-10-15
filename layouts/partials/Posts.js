"use client"
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";


const articlesList = [
    {
        "author": null,
        "title": "Nagarjuna To Pursue Another Rs 100 Cr Lawsuit Against Konda Surekha: 'Industry Won't Be Soft Target Anymore - News18",
        "description": "Nagarjuna To Pursue Another Rs 100 Cr Lawsuit Against Konda Surekha: 'Industry Won't Be Soft Target Anymore&nbsp;&nbsp;News18Telangana Minister Now Claims KTR Is Responsible For KCR's 'Disappearance'&nbsp;&nbsp;NDTVCan’t use our names for political gains: Nagarjuna to file Rs 100 crore defamation suit against Konda Surekha&nbsp;&nbsp;Deccan HeraldLinga Bhairavi Temple, Which Samantha Ruth Prabhu Visited, Has Women Priests; Shrine Set Up By Sadhguru Exp&nbsp;&nbsp;News18‘Rahul Gandhiji please…’: Nagarjuna's wife on Telangana minister's Naga-Samantha divorce remark&nbsp;&nbsp;Hindustan...",
        "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQQkJya0pCUnViSmRmVG5CYjBCME9kSWZzOGVCWVdnWkFrUFplTFVLckgzbXBtdE5kbVNNMlZMd2ZMNWlDemVwajlVVmM2Qm9qOFl3ZzJoeEpoQzV6LW9LTm1ldGJGelVXOUNVTm5uU2xzeW44d2FxN0wwbm5iWmRzaS1pNHNYMXNrdnlIR1MxWndlcm1TVWRILUhmR0pUTXR2QnBRaTV5Q3QzdERyNmJxQS1VNDBaU1ZJdUNQNFRCU3VFR3pkQWRpSldJUVFZVXFYei1tT1pFMlRBclAzcnU3NdIB5gFBVV95cUxPSUdKQXh2ajhtR0V4dVFBdGFoWGo1ZmZoYlliRUZHUHR6SFhEWmNRYmswNlJGUGxTMV9mMEV1d0w4VjlfV2ZpNnRCa0ZUdVBhYzQ4cHVsN2hqdkdrQjUzOUk4RUNCcndYNFpLXzYyeE50MFNrWHdfMHVwZTRQaUgxSVd6MFZrSWktTHRaU1U3T3JBRUhyeU5jZmRqcnd3SVloWXBsZG9qM0ZSVUxncjM5cHgtT1dLZlNOaEFQWVJHT19XRW9pRG9WQ2RJU2pXTkNxRk5RNXk0OEdMekVsb285aWUtSzhSZw?oc=5",
        "source": "Google News Entertainment IN",
        "image": null,
        "category": "entertainment",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-04T15:07:18+00:00"
    },
    {
        "author": null,
        "title": "Won't spare if Maratha quota issue is not resolved before poll code: Manoj Jarange warns govt.",
        "description": "He also urged the ruling as well as Opposition parties not to play politics with the Maratha community and instead focus on granting its ‘rightful inclusion’ in the OBC category",
        "url": "https://www.thehindu.com/news/national/maharashtra/wont-spare-if-maratha-quota-issue-is-not-resolved-before-poll-code-manoj-jarange-warns-govt/article68718190.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/smxdoy/article68718413.ece/alternates/LANDSCAPE_1200/20240220259L.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-04T13:56:50+00:00"
    },
    {
        "author": null,
        "title": "Former VP M. Venkaiah Naidu reacts to BJD’s criticism over his visit to Odisha Raj Bhawan",
        "description": "No political motives should be ascribed to this courtesy call and dragging the office of the former VP of India into a political controversy of this nature, is patently unfair, a statement reads",
        "url": "https://www.thehindu.com/news/national/odisha/former-vp-m-venkaiah-naidu-reacts-to-bjds-criticism-over-his-visit-to-odisha-raj-bhawan/article68718076.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/9mbdjj/article68718380.ece/alternates/LANDSCAPE_1200/IMG_BL17_STATES_VENKAIAH_5_1_8J82R69J.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-04T13:48:16+00:00"
    },
    {
        "author": null,
        "title": "Maharashtra Assembly Dy. Speaker, two others jump onto safety net at Mantralaya over tribal quota issue",
        "description": "None of the protesters were seriously injured in the incident",
        "url": "https://www.thehindu.com/news/national/maharashtra/maharashtra-assembly-dy-speaker-two-others-jump-onto-safety-net-at-mantralaya-over-tribal-quota-issue/article68717281.ece",
        "source": "The Hindu",
        "image": null,
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-04T09:03:20+00:00"
    },
    {
        "author": null,
        "title": "Rahul Gandhi to blow the poll bugle in Maharashtra; to unveil Chhatrapati Shivaji statue",
        "description": "Months after the collapse of a statue of Chhatrapati Shivaji Maharaj in Maharashtra, Rahul Gandhi will unveil an equestrian bronze statue of the warrior king",
        "url": "https://www.thehindu.com/news/national/maharashtra/rahul-gandhi-to-blow-the-poll-bugle-in-maharashtra-to-unveil-chhatrapati-shivaji-statue/article68714942.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/58s97y/article68715144.ece/alternates/LANDSCAPE_1200/PTI09_05_2024_000301A.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-03T17:14:22+00:00"
    },
    {
        "author": null,
        "title": "Poll campaign ends in Haryana amid slanging match between BJP, Congress",
        "description": "While PM Narendra Modi said that ‘Haryana would never accept the Congress’ divisive and negative politics’, Rahul Gandhi accused the BJP of crony capitalism and trying to destroy the Constitution",
        "url": "https://www.thehindu.com/news/national/haryana/poll-campaign-ends-in-haryana-amid-slanging-match-between-bjp-congress/article68713948.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/tlno4n/article68714377.ece/alternates/LANDSCAPE_1200/20241003154L.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-03T14:33:07+00:00"
    },
    {
        "author": null,
        "title": "Chalavadi lashes out at CM Siddaramaiah for making political speech on Dasara Utsav stage",
        "description": "The Leader of Opposition says people who fought for Kannada should be called for the Dasara Utsav from the next year instead",
        "url": "https://www.thehindu.com/news/national/karnataka/chalavadi-lashes-out-at-cm-siddaramaiah-for-making-political-speech-on-dasara-utsav-stage/article68713602.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/uertf8/article68714323.ece/alternates/LANDSCAPE_1200/Chalavadi%20Narayanaswamy_01.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-03T14:22:02+00:00"
    },
    {
        "author": "Arijit Kundu",
        "title": "‌Irani Trophy, WATCH | Juned Khan repays selectors' faith by outwitting Ruturaj Gaikwad on debut",
        "description": "Scouting is an important part of cricket tournaments and quite often it works with talents rising to the fore. Mumbai Cricket never falls short of talents with Mohammad Juned Khan being the latest addition as he outsmarted Maharashtra’s domestic captain Ruturaj Gaikwad as his maiden scalp.",
        "url": "https://sportscafe.in/cricket/articles/2024/oct/03/irani-trophy-watch-juned-khan-repays-selectors-faith-by-outwitting-ruturaj-gaikwad-on-debut?utm_medium=rss",
        "source": "Sportscafe",
        "image": "https://sportscafe.in/img/es3-cfill-w480-h240/articles/cricket-2023/Ruturaj-Gaikwad-700x365.scorimg.webp",
        "category": "sports",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-03T09:03:53+00:00"
    },
    {
        "author": null,
        "title": "Top news of the day: Israeli troops, Hezbollah clash inside Lebanon; Maharashtra appoints single member commission to probe Badlapur encounter, and more",
        "description": "The major news headlines of the day and more.",
        "url": "https://www.thehindu.com/news/top-news-of-the-day-october-02-2024-israeli-troops-hezbollah-clash-inside-lebanon-maharashtra-appoints-single-member-commission-to-probe-badlapur-encounter-and-more/article68710063.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/d0na4e/article68709932.ece/alternates/LANDSCAPE_1200/2024-10-02T132155Z_1681287786_RC2DCAAKM5W5_RTRMADP_3_ISRAEL-PALESTINIANS-LEBANON.JPG",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-02T13:57:32+00:00"
    },
    {
        "author": null,
        "title": "Flesh trade racket busted in Maharashtra; 15 Thailand women rescued",
        "description": "Police also seized more than ₹5 lakh in cash. Further probe is on",
        "url": "https://www.thehindu.com/news/national/maharashtra/flesh-trade-racket-busted-in-maharashtra-15-thailand-women-rescued/article68709489.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/news/national/telangana/n5461o/article24268231.ece/alternates/LANDSCAPE_1200/ftelugu%20flesh%20tradesf",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-02T11:49:17+00:00"
    },
    {
        "author": null,
        "title": "Badlapur accused encounter: Maharashtra Government sets up commission for probe into shooting",
        "description": "The government has formed a single-member commission of inquiry consisting of Dilip Bhosale, retired Chief Justice of Allahabad High Court",
        "url": "https://www.thehindu.com/news/national/maharashtra/badlapur-accused-encounter-maharashtra-government-sets-up-commission-for-probe-into-shooting/article68709092.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/wdqfw5/article68709087.ece/alternates/LANDSCAPE_1200/PTI09_24_2024_000287B.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-02T08:15:03+00:00"
    },
    {
        "author": null,
        "title": "Watch: MUDA crisis and the political implications for Siddaramaiah and Congress",
        "description": "We are joined by political scientist and analyst and the National Coordinator of the Lokniti network, Dr. Sandeep Shastri",
        "url": "https://www.thehindu.com/news/national/karnataka/watch-muda-crisis-and-the-political-implications-for-siddaramaiah-and-congress/article68709055.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/stysu4/article68709054.ece/alternates/LANDSCAPE_1200/Decode-Karnataka-ep-15---Political-implications-of-MUDA-case-video-thumbnail.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-02T07:52:51+00:00"
    },
    {
        "author": null,
        "title": "Karnataka High Court advises Vokkaligara Sangha to amend bye-law to prevent frequent no-confidence motions",
        "description": "“Voluntary organisations, which have philanthropy at the heart of their philosophy and service at the core of their existence, should shun dirty politics”",
        "url": "https://www.thehindu.com/news/national/karnataka/karnataka-high-court-advises-vokkaligara-sangha-to-amend-bye-law-to-prevent-frequent-no-confidence-motions/article68706845.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/mwt47v/article68708942.ece/alternates/LANDSCAPE_1200/IMG_BG_HIGH_COURT_2020_1_1_SRDD3IQV.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-02T07:06:46+00:00"
    },
    {
        "author": null,
        "title": "Popularity of PM Modi and BJP-led NDA govt. has decreased: Prashant Kishor",
        "description": "With the aim of contesting the Assembly election in Bihar in October-November 2025, Mr. Kishor is set to announce Jan Suraaj as a political party tomorrow (October 2)",
        "url": "https://www.thehindu.com/news/national/bihar/popularity-of-pm-modi-and-bjp-led-nda-govt-has-decreased-prashant-kishor/article68705855.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/vl0zf9/article68706636.ece/alternates/LANDSCAPE_1200/PTI09_29_2024_000065B.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-02T04:15:07+00:00"
    },
    {
        "author": null,
        "title": "Maharashtra CM orders probe into sexual harassment at Mumbai’s Nair Hospital",
        "description": "BMC Commissioner ordered to immediately transfer dean of the hospital Sudhir Medhekar for not taking timely action against the accused assistant professor despite getting complaints from students",
        "url": "https://www.thehindu.com/news/cities/mumbai/maharashtra-cm-orders-probe-into-sexual-harassment-at-mumbais-nair-hospital/article68706759.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/58o7ik/article68708452.ece/alternates/LANDSCAPE_1200/20240925377L.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-02T03:55:01+00:00"
    },
    {
        "author": null,
        "title": "77 years after migrating, jubilant West Pakistan refugees vote for first time in J&K Assembly poll",
        "description": "They had not political representation in J&K Assembly for the past 75 years",
        "url": "https://www.thehindu.com/elections/jammu-and-kashmir-assembly/77-years-after-migrating-jubilant-west-pakistan-refugees-vote-for-first-time-in-jk-assembly-poll/article68706984.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/1gzlsb/article68707103.ece/alternates/LANDSCAPE_1200/20241001397L.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-01T20:20:00+00:00"
    },
    {
        "author": null,
        "title": "Congress and land deals have become synonymous, alleges BJP",
        "description": "The involvement of political families in a ‘land grab movement’ disguised as trust activities is highly inappropriate and the BJP strongly condemns it, the Union Minister Ravi Shankar Prasad said",
        "url": "https://www.thehindu.com/news/national/congress-and-land-deals-have-become-synonymous-alleges-bjp/article68706051.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/news/national/83p75l/article66429480.ece/alternates/LANDSCAPE_1200/25_Ravi_Shankar_Prasad_02_01_Delhi.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-01T17:27:45+00:00"
    },
    {
        "author": null,
        "title": "38 children hospitalised after consuming mid-day meal at Thane school",
        "description": "38 children hospitalised for suspected food poisoning after mid-day meal at private school in Thane, Maharashtra; all stable",
        "url": "https://www.thehindu.com/news/national/maharashtra/several-children-hospitalised-after-consuming-mid-day-meal-at-thane-school/article68707108.ece",
        "source": "The Hindu",
        "image": null,
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-01T17:18:24+00:00"
    },
    {
        "author": null,
        "title": "Raghubar Das won’t return to mainstream politics of Jharkhand: BJP MP Nishikant Dubey",
        "description": "Ever since Assam Chief Minister Himanta Biswa Sarma, who is co-incharge of Jharkhand election, met Das, speculation has started over the former Jharkhand Chief Minister contesting the Assembly election",
        "url": "https://www.thehindu.com/news/national/jharkhand/raghubar-das-wont-return-to-mainstream-politics-of-jharkhand-bjp-mp-nishikant-dubey/article68705734.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/news/national/jharkhand/x7g7bh/article68706013.ece/alternates/LANDSCAPE_1200/20240725065L.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-01T13:38:10+00:00"
    },
    {
        "author": null,
        "title": "CPI(M) Kerala secretary Govindan slams P.V. Anvar’s public meetings, claims participation from SDPI and Jamaat workers",
        "description": "M.V. Govindan’s statements come during an event in Kannur to mark second death anniversary of former CPI(M) State secretary and polit bureau member Kodiyeri Balakrishnan",
        "url": "https://www.thehindu.com/news/national/kerala/cpim-kerala-secretary-govindan-slams-pv-anvars-public-meetings-claims-participation-from-sdpi-and-jamaat-workers/article68705141.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/i9048u/article68705149.ece/alternates/LANDSCAPE_1200/IMG_Govindan_2_1_DBDD0C8V.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-01T10:08:36+00:00"
    },
    {
        "author": "Arijit Kundu",
        "title": "Irani Trophy | Twitter reacts to Ruturaj loses calm with hesitating umpire over ball malfunctioning",
        "description": "There’s no substitute for calmness when it comes to making better decisions. Ruturaj Gaikwad is one of the best examples to exemplify a composed mind on a cricket field but the Maharashtra batter ended up losing his cool due to the umpire’s stubbornness over the ball’s shape in the Irani Trophy.",
        "url": "https://sportscafe.in/cricket/articles/2024/oct/01/irani-trophy-twitter-reacts-to-ruturaj-loses-calm-with-hesitating-umpire-over-ball-malfunctioning?utm_medium=rss",
        "source": "Sportscafe",
        "image": "https://sportscafe.in/img/es3-cfill-w480-h240/articles/cricket-2023/Ruturaj-Gaikwad-700x365-1000x1000.webp",
        "category": "sports",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-01T09:14:19+00:00"
    },
    {
        "author": null,
        "title": "MUDA row: BJP says too late for Karnataka Chief Minister Siddaramaiah to protect his seat and it is a question of time before he quits",
        "description": "BJP State President B. Y. Vijayendra terms return of all the 14 sites allotted by MUDA to CM’s wife as a ‘political drama’ to escape legal hurdles and to gain sympathy",
        "url": "https://www.thehindu.com/news/national/karnataka/muda-row-bjp-says-too-late-for-karnataka-chief-minister-siddaramaiah-to-protect-his-seat-and-it-is-a-question-of-time-before-he-quits/article68704642.ece",
        "source": "The Hindu",
        "image": "https://th-i.thgim.com/public/incoming/do9ors/article68704738.ece/alternates/LANDSCAPE_1200/PTI09_24_2024_000127B.jpg",
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-01T07:58:38+00:00"
    },
    {
        "author": null,
        "title": "Stocks in news: NTPC, Tata Power, IRCTC, Blue Dart, Andhra Cements &amp; Bank of Maharashtra",
        "description": "Stocks including NTPC, Tata Power, IRCTC, Blue Dart, Andhra Cements, Bank of Maharashtra, Piramal Pharma and more will be the spotlight on Tuesday, October 01.",
        "url": "https://www.businesstoday.in/markets/story/stocks-in-news-ntpc-tata-power-irctc-blue-dart-andhra-cements-bank-of-maharashtra-448238-2024-10-01?utm_source=rssfeed",
        "source": "businesstoday",
        "image": null,
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-10-01T02:27:55+00:00"
    },
    {
        "author": null,
        "title": "People will put an end to family politics in 2026 Assembly election, says Edappadi K. Palaniswami",
        "description": "People will put an end to family politics in 2026 Assembly election, says Edappadi K. Palaniswami",
        "url": "https://www.thehindu.com/news/cities/Coimbatore/people-will-put-an-end-to-family-politics-in-2026-assembly-election-says-edappadi-k-palaniswami/article68701276.ece",
        "source": "The Hindu",
        "image": null,
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-09-30T18:31:43+00:00"
    },
    {
        "author": null,
        "title": "Cauvery water issue should be resolved amicably between Tamil Nadu and Karnataka, says Union Minister Kumaraswamy",
        "description": "“Politics should not be mixed in the issue”",
        "url": "https://www.thehindu.com/news/cities/Tiruchirapalli/cauvery-water-issue-should-be-resolved-amicably-between-tamil-nadu-and-karnataka-says-union-minister-kumaraswamy/article68700670.ece",
        "source": "The Hindu",
        "image": null,
        "category": "general",
        "language": "en",
        "country": "in",
        "published_at": "2024-09-30T12:27:58+00:00"
    }
]

const BlogPage = () => {

    const [articles, setArticle] = useState(articlesList)
    
    useEffect(() => {
        fetchBlogs()
    },[])

    const fetchBlogs = async () => { 
        const {data} = await axios.get("https://api.mediastack.com/v1/news?access_key=77c1dc852afbdc9889a287154f625d3d&keywords=maharashtra,politics&countries=in")
        setArticle(data?.data)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img
                            src={article.image || "https://via.placeholder.com/400"}
                            alt={article.title || ""}
                            className="h-56 w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 truncate">{article.title}</h2>
                            <p className="text-gray-700 text-sm mb-4 line-clamp-3">{article.description}</p>
                            <p className="text-gray-700 text-sm mb-4 font-semibold">
                                {new Date(article.published_at).toLocaleString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                    day: 'numeric',
                                    month: 'long'
                                })}
                            </p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-800">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
