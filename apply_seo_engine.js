const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'f:\\Elephants';
const BASE_URL = 'https://thamara111.github.io/gaja-lanka';

// Canonical Pages Configuration
const CANONICAL_PAGES = {
  'index.html': {
    title: 'Gaja Lanka | Sri Lankan Elephant Sanctuary & Conservation Monograph',
    description: 'Empirical scientific monograph and observatory for the Sri Lankan Elephant (Elephas maximus maximus): 2,500 years of heritage, spatial telemetry, and coexistence.',
    canonical: `${BASE_URL}/`,
    ogImage: `${BASE_URL}/assets/images/hero-elephant.jpg`,
    ogImageAlt: 'Wild herd of Sri Lankan elephants moving along a tropical forest corridor',
    ogType: 'website',
    keywords: 'Sri Lankan elephant, Elephas maximus maximus, elephant conservation Sri Lanka, Asian elephant monograph, Minneriya elephant gathering, elephant telemetry, human elephant conflict Sri Lanka',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          "url": `${BASE_URL}/`,
          "name": "Gaja Lanka",
          "description": "The Sri Lankan Elephant Sanctuary & Conservation Monograph",
          "publisher": {
            "@id": `${BASE_URL}/#organization`
          },
          "inLanguage": "en-US"
        },
        {
          "@type": "Organization",
          "@id": `${BASE_URL}/#organization`,
          "name": "Gaja Lanka Conservation Initiative",
          "url": `${BASE_URL}/`,
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}/assets/images/favicon.svg`
          },
          "sameAs": [
            "https://github.com/Thamara111/gaja-lanka"
          ],
          "description": "Evidence-based scientific monograph, longitudinal telemetry observatory, and conservation platform dedicated to Elephas maximus maximus in Sri Lanka."
        },
        {
          "@type": "WebPage",
          "@id": `${BASE_URL}/#webpage`,
          "url": `${BASE_URL}/`,
          "name": "Gaja Lanka | Sri Lankan Elephant Sanctuary & Conservation Monograph",
          "isPartOf": {
            "@id": `${BASE_URL}/#website`
          },
          "about": {
            "@type": "Thing",
            "name": "Sri Lankan Elephant (Elephas maximus maximus)"
          },
          "description": "Empirical scientific monograph and observatory for the Sri Lankan Elephant (Elephas maximus maximus): 2,500 years of heritage, spatial telemetry, and coexistence."
        }
      ]
    }
  },

  'species-profile.html': {
    title: 'Sri Lankan Elephant (Elephas maximus maximus) Species Profile | Gaja Lanka',
    description: 'Taxonomic monograph of the Sri Lankan elephant: anatomy, depigmentation, rare tusk genetics, keystone ecological biology, and morphological distinctions.',
    canonical: `${BASE_URL}/species-profile.html`,
    ogImage: `${BASE_URL}/assets/images/sri-lanka-elephant-full-body-anatomy.jpg`,
    ogImageAlt: 'Taxonomic full body anatomy lateral profile of an adult Sri Lankan elephant bull',
    ogType: 'article',
    keywords: 'Elephas maximus maximus, Sri Lankan elephant taxonomy, elephant anatomy, elephant depigmentation, tusker genetics, keystone species Sri Lanka',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ScholarlyArticle",
          "@id": `${BASE_URL}/species-profile.html#article`,
          "headline": "Meet the Giants of Ceylon: Taxonomic Monograph (Elephas maximus maximus)",
          "description": "Taxonomic monograph of the Sri Lankan elephant: anatomy, depigmentation, rare tusk genetics, keystone ecological biology, and morphological distinctions.",
          "mainEntityOfPage": `${BASE_URL}/species-profile.html`,
          "image": `${BASE_URL}/assets/images/sri-lanka-elephant-full-body-anatomy.jpg`,
          "publisher": {
            "@type": "Organization",
            "name": "Gaja Lanka",
            "url": `${BASE_URL}/`
          },
          "about": {
            "@type": "Taxon",
            "name": "Elephas maximus maximus",
            "alternateName": ["Sri Lankan Elephant", "Ceylon Elephant", "Gaja"],
            "taxonRank": "Subspecies",
            "parentTaxon": "Elephas maximus"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/species-profile.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Species Profile", "item": `${BASE_URL}/species-profile.html` }
          ]
        }
      ]
    }
  },

  'heritage-and-culture.html': {
    title: 'Sri Lanka Elephant Cultural Heritage & Sacred Tuskers | Gaja Lanka',
    description: 'Explore 2,500 years of reverence for the Asian elephant in Sri Lankan culture, royal war chronicles, Kandy Esala Perahera relic caskets, and legendary tuskers.',
    canonical: `${BASE_URL}/heritage-and-culture.html`,
    ogImage: `${BASE_URL}/assets/images/sri-lanka-tusker-nadungamuwa-raja.jpg`,
    ogImageAlt: 'Historical revered Sri Lankan tusker elephant outside the Temple of the Sacred Tooth Relic',
    ogType: 'article',
    keywords: 'Sri Lanka sacred tuskers, Esala Perahera elephant, Kandy Tooth Relic tusker, Raja elephant, Ceylon royal elephant stables, elephant cultural history',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${BASE_URL}/heritage-and-culture.html#article`,
          "headline": "A Kingdom Shaped by Giants: 2,500 Years of Heritage & Reverence",
          "description": "Historical chronicle of the Asian elephant in Sri Lankan culture, royal war stables, Esala Perahera relic caskets, and legendary tusker lineages.",
          "image": `${BASE_URL}/assets/images/sri-lanka-tusker-nadungamuwa-raja.jpg`,
          "publisher": {
            "@type": "Organization",
            "name": "Gaja Lanka",
            "url": `${BASE_URL}/`
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/heritage-and-culture.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Heritage & Culture", "item": `${BASE_URL}/heritage-and-culture.html` }
          ]
        }
      ]
    }
  },

  'colonial-archive.html': {
    title: 'British Colonial Elephant Massacre & Montane Forest Loss | Gaja Lanka',
    description: 'Historical investigation into the 19th-century British bounty hunting era, Major Thomas Rogers, coffee clearing, and the highland extirpation of Ceylon elephants.',
    canonical: `${BASE_URL}/colonial-archive.html`,
    ogImage: `${BASE_URL}/assets/images/history-elephant.jpg`,
    ogImageAlt: 'Archival monochrome photograph of central Ceylon montane forests and colonial elephant hunting era',
    ogType: 'article',
    keywords: 'British colonial Ceylon elephant massacre, Major Thomas Rogers elephant bounty, Sri Lanka montane forest clearing, tea plantation deforestation, elephant extirpation',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${BASE_URL}/colonial-archive.html#article`,
          "headline": "The Cost of Colonial Expansion: Historical Investigation 1796–1948",
          "description": "Investigating the devastating structural transformation of Sri Lanka montane rain forests, British bounty systems, and highland wild herd extirpation.",
          "image": `${BASE_URL}/assets/images/history-elephant.jpg`,
          "publisher": {
            "@type": "Organization",
            "name": "Gaja Lanka",
            "url": `${BASE_URL}/`
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/colonial-archive.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Colonial Archive", "item": `${BASE_URL}/colonial-archive.html` }
          ]
        }
      ]
    }
  },

  'habitats-and-corridors.html': {
    title: 'Sri Lanka Elephant Habitats, Corridors & Minneriya Gathering | Gaja Lanka',
    description: 'Spatial telemetry tracking, migratory corridors, and national park guides for Minneriya, Kaudulla, Yala, Udawalawe, and the seasonal Minneriya Gathering.',
    canonical: `${BASE_URL}/habitats-and-corridors.html`,
    ogImage: `${BASE_URL}/assets/images/sri-lanka-minneriya-gathering.jpg`,
    ogImageAlt: 'The Great Minneriya Elephant Gathering on the tank bed during the dry season',
    ogType: 'article',
    keywords: 'Minneriya elephant gathering, Sri Lanka elephant corridors, Kaudulla national park, Yala national park elephants, Udawalawe wildlife, GPS elephant telemetry',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${BASE_URL}/habitats-and-corridors.html#article`,
          "headline": "A Landscape Without Borders: Habitats & Corridor Telemetry",
          "description": "Interactive spatial telemetry and migration dynamics across Minneriya, Kaudulla, Yala, Udawalawe, and critical elephant corridors in Sri Lanka.",
          "image": `${BASE_URL}/assets/images/sri-lanka-minneriya-gathering.jpg`,
          "publisher": {
            "@type": "Organization",
            "name": "Gaja Lanka",
            "url": `${BASE_URL}/`
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/habitats-and-corridors.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Habitats & Corridors", "item": `${BASE_URL}/habitats-and-corridors.html` }
          ]
        }
      ]
    }
  },

  'welfare-and-care.html': {
    title: 'Elephant Welfare in Sri Lanka: Wild Ethology vs Captive Care | Gaja Lanka',
    description: 'Evidence-based comparative analysis of wild megafaunal ethology versus managed captive care, working elephant welfare legislation, and ethical conservation.',
    canonical: `${BASE_URL}/welfare-and-care.html`,
    ogImage: `${BASE_URL}/assets/images/sri-lanka-elephant-mother-calf.jpg`,
    ogImageAlt: 'Wild mother elephant guiding calf through Udawalawe grasslands',
    ogType: 'article',
    keywords: 'elephant welfare Sri Lanka, captive elephant care, elephant ethology, wild vs domestic elephant, Sri Lanka animal protection laws, captive breeding ethics',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${BASE_URL}/welfare-and-care.html#article`,
          "headline": "Welfare Beyond Captivity: Wild Ethology vs Managed Care",
          "description": "Understanding the behavioral, physical, and ecological realities of free-ranging wild megafauna versus managed captive care and rehabilitation.",
          "image": `${BASE_URL}/assets/images/sri-lanka-elephant-mother-calf.jpg`,
          "publisher": {
            "@type": "Organization",
            "name": "Gaja Lanka",
            "url": `${BASE_URL}/`
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/welfare-and-care.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Welfare & Care", "item": `${BASE_URL}/welfare-and-care.html` }
          ]
        }
      ]
    }
  },

  'elephant-orphanages.html': {
    title: 'Elephant Orphanages & Rehabilitation Centers in Sri Lanka | Gaja Lanka',
    description: 'Comparing Sri Lanka elephant care institutions: captive sanctuary care at Pinnawala Orphanage vs wild rehabilitation and rewilding at Udawalawe Transit Home.',
    canonical: `${BASE_URL}/elephant-orphanages.html`,
    ogImage: `${BASE_URL}/assets/images/udawalawe-transit-home.jpg`,
    ogImageAlt: 'Wildlife ranger bottle-feeding an orphaned baby elephant calf at Udawalawe Transit Home',
    ogType: 'article',
    keywords: 'elephant orphanage Sri Lanka, Pinnawala vs Udawalawe, elephant transit home, baby elephant rescue Sri Lanka, elephant rewilding',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `${BASE_URL}/elephant-orphanages.html#webpage`,
          "name": "Elephant Orphanages & Rehabilitation Centers in Sri Lanka",
          "description": "Discover Sri Lanka's elephant care institutions: long-term care and captive breeding at Pinnawala, and wild calf rehabilitation and release at Udawalawe Transit Home.",
          "image": `${BASE_URL}/assets/images/udawalawe-transit-home.jpg`,
          "publisher": {
            "@type": "Organization",
            "name": "Gaja Lanka",
            "url": `${BASE_URL}/`
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/elephant-orphanages.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Elephant Orphanages", "item": `${BASE_URL}/elephant-orphanages.html` }
          ]
        }
      ]
    }
  },

  'pinnawala.html': {
    title: 'Pinnawala Elephant Orphanage Guide: River Bathing & History | Gaja Lanka',
    description: 'Complete guide to Pinnawala Elephant Orphanage: daily Ma Oya river bathing schedule, feeding times, admission rates, founding calves, and welfare standards.',
    canonical: `${BASE_URL}/pinnawala.html`,
    ogImage: `${BASE_URL}/assets/images/pinnawala-river-bathing.jpg`,
    ogImageAlt: 'Pinnawala herd bathing together in the rocky Ma Oya river',
    ogType: 'article',
    keywords: 'Pinnawala elephant orphanage, Ma Oya river bathing, Pinnawala elephant timetable, Pinnawala ticket prices, Pinnawala history, captive elephant breeding',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["TouristAttraction", "Zoo"],
          "@id": `${BASE_URL}/pinnawala.html#attraction`,
          "name": "Pinnawala Elephant Orphanage",
          "description": "Captive elephant breeding and conservation center established in 1975 along the Ma Oya river in Rambukkana, Sri Lanka.",
          "url": `${BASE_URL}/pinnawala.html`,
          "image": `${BASE_URL}/assets/images/pinnawala-river-bathing.jpg`,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 7.3006,
            "longitude": 80.3868
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pinnawala",
            "addressRegion": "Sabaragamuwa Province",
            "addressCountry": "LK"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/pinnawala.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Welfare & Care", "item": `${BASE_URL}/welfare-and-care.html` },
            { "@type": "ListItem", "position": 3, "name": "Pinnawala Orphanage", "item": `${BASE_URL}/pinnawala.html` }
          ]
        }
      ]
    }
  },

  'udawalawe.html': {
    title: 'Udawalawe Elephant Transit Home: Orphan Rehabilitation | Gaja Lanka',
    description: 'Discover Udawalawe Elephant Transit Home (ETH): orphaned wild calf milk feeding, Sandamali wild release milestone, radio telemetry, and return to nature.',
    canonical: `${BASE_URL}/udawalawe.html`,
    ogImage: `${BASE_URL}/assets/images/Sandamali.jpg`,
    ogImageAlt: 'Sandamali observed as a wild mother with her healthy calf after rehabilitation at Udawalawe ETH',
    ogType: 'article',
    keywords: 'Udawalawe Elephant Transit Home, ETH Sri Lanka, Sandamali elephant release, orphan calf rehabilitation, wild rewilding, radio collar elephant telemetry',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["TouristAttraction", "AnimalSanctuary"],
          "@id": `${BASE_URL}/udawalawe.html#sanctuary`,
          "name": "Udawalawe Elephant Transit Home (ETH)",
          "description": "Wild orphan rehabilitation center caring for injured and abandoned wild elephant calves before re-release into the wild with radio collar monitoring.",
          "url": `${BASE_URL}/udawalawe.html`,
          "image": `${BASE_URL}/assets/images/Sandamali.jpg`,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.4746,
            "longitude": 80.8986
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Udawalawe",
            "addressRegion": "Uva / Sabaragamuwa",
            "addressCountry": "LK"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/udawalawe.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Welfare & Care", "item": `${BASE_URL}/welfare-and-care.html` },
            { "@type": "ListItem", "position": 3, "name": "Udawalawe ETH", "item": `${BASE_URL}/udawalawe.html` }
          ]
        }
      ]
    }
  },

  'data-and-analytics.html': {
    title: 'Sri Lanka Elephant Population Statistics & Open Datasets | Gaja Lanka',
    description: 'Empirical census data from 1800 to 2026, annual HEC mortality diagnostics, spatial GIS layers, and downloadable CSV/JSON open conservation datasets.',
    canonical: `${BASE_URL}/data-and-analytics.html`,
    ogImage: `${BASE_URL}/assets/images/sri-lanka-minneriya-herd.jpg`,
    ogImageAlt: 'Empirical elephant census tracking and population metrics visualizer',
    ogType: 'article',
    keywords: 'Sri Lanka elephant population dataset, elephant census 1800-2026, elephant mortality statistics, HEC casualties, wildlife open data, data.json elephant stats',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Dataset",
          "@id": `${BASE_URL}/data-and-analytics.html#dataset`,
          "name": "Sri Lanka Elephant Population and Mortality Historical Dataset (1800-2026)",
          "description": "Empirical census records, mortality diagnostic classifications (gunshot, Hakka Patas, electrocution, train collisions), and longitudinal Human-Elephant Conflict metrics in Sri Lanka.",
          "url": `${BASE_URL}/data-and-analytics.html`,
          "keywords": ["Sri Lanka elephant population", "elephant census", "wildlife mortality", "HEC statistics", "Elephas maximus maximus"],
          "spatialCoverage": "Sri Lanka",
          "temporalCoverage": "1800/2026",
          "license": "https://creativecommons.org/licenses/by/4.0/",
          "creator": {
            "@type": "Organization",
            "name": "Gaja Lanka National Elephant Observatory"
          },
          "distribution": [
            {
              "@type": "DataDownload",
              "encodingFormat": "text/csv",
              "contentUrl": `${BASE_URL}/elephant_population_and_mortality_stats.csv`
            },
            {
              "@type": "DataDownload",
              "encodingFormat": "application/json",
              "contentUrl": `${BASE_URL}/data.json`
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/data-and-analytics.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Data & Analytics", "item": `${BASE_URL}/data-and-analytics.html` }
          ]
        }
      ]
    }
  },

  'human-elephant-conflict.html': {
    title: 'Human-Elephant Conflict (HEC) Solutions in Sri Lanka | Gaja Lanka',
    description: 'Empirical solutions to Human-Elephant Conflict: seasonal solar fences, village electric fencing, crop protection, Hakka Patas eradication, and early warning.',
    canonical: `${BASE_URL}/human-elephant-conflict.html`,
    ogImage: `${BASE_URL}/assets/images/sri-lanka-elephant-wild-herd.jpg`,
    ogImageAlt: 'Wild adult Asian elephant standing at dusk on the edge of a rural Sri Lankan paddy field',
    ogType: 'article',
    keywords: 'Human elephant conflict Sri Lanka, HEC mitigation, seasonal electric fencing, Hakka Patas, elephant crop raiding, peaceful coexistence Sri Lanka',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${BASE_URL}/human-elephant-conflict.html#article`,
          "headline": "Coexistence is the Way Forward: Human-Elephant Conflict Portal",
          "description": "Empirical solutions to Human-Elephant Conflict in Sri Lanka, community-managed seasonal electric fences, crop protection, and telemetry early warning.",
          "image": `${BASE_URL}/assets/images/sri-lanka-elephant-wild-herd.jpg`,
          "publisher": {
            "@type": "Organization",
            "name": "Gaja Lanka",
            "url": `${BASE_URL}/`
          }
        },
        {
          "@type": "FAQPage",
          "@id": `${BASE_URL}/human-elephant-conflict.html#faq`,
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the primary cause of Human-Elephant Conflict in Sri Lanka?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Over 70% of wild elephant range in Sri Lanka falls outside designated Department of Wildlife Conservation protected areas. Linear development, agricultural expansion into traditional migratory corridors, and habitat fragmentation compel elephants to forage in human settlements and paddy fields."
              }
            },
            {
              "@type": "Question",
              "name": "Why do administrative boundary electric fences fail?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fences constructed along arbitrary administrative boundaries rather than ecological home ranges enclose areas elephants have inhabited for generations, driving bulls to break fences to access ancestral grazing grounds and water reservoirs."
              }
            },
            {
              "@type": "Question",
              "name": "How do seasonal community-managed solar electric fences work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Community fences surround only cultivated crops during the crop season (4-5 months) and are taken down after harvest, permitting elephants to graze on residual stubble without causing economic loss to farmers."
              }
            },
            {
              "@type": "Question",
              "name": "What are Hakka Patas and why are they catastrophic?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hakka Patas are homemade bait explosives concealed in fodder. When bitten, they shatter the elephant's jaw and tongue, causing protracted death through starvation and infection over several weeks."
              }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/human-elephant-conflict.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "HEC Portal", "item": `${BASE_URL}/human-elephant-conflict.html` }
          ]
        }
      ]
    }
  },

  'famous-elephants.html': {
    title: 'Famous Elephants & Tuskers of Sri Lanka: Pantheon & Biometrics | Gaja Lanka',
    description: 'Biometric registers and historical monographs of 68 famous Sri Lankan elephants, including Nadungamuwa Raja, Kawanthissa, Agbo of Thirappane, and Indi Raja.',
    canonical: `${BASE_URL}/famous-elephants.html`,
    ogImage: `${BASE_URL}/assets/images/kavantissa-wild-tusker.jpg`,
    ogImageAlt: 'The fallen 11-foot wild giant tusker Kawanthissa of Sri Lanka',
    ogType: 'article',
    keywords: 'famous Sri Lankan elephants, Nadungamuwa Raja, Kawanthissa tusker, Agbo of Thirappane, Mahasen Minneriya, Millangoda Raja, sacred tuskers Ceylon',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `${BASE_URL}/famous-elephants.html#collection`,
          "name": "Most Famous Elephants & Tuskers of Sri Lanka",
          "description": "Dedicated monograph archives and biometric registers of Sri Lanka's 68 famous wild tuskers and sacred temple monarchs.",
          "image": `${BASE_URL}/assets/images/kavantissa-wild-tusker.jpg`,
          "publisher": {
            "@type": "Organization",
            "name": "Gaja Lanka",
            "url": `${BASE_URL}/`
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": "Sri Lanka Iconic Elephant Pantheon",
            "numberOfItems": 68,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Kawanthissa (Wild Tusker)" },
              { "@type": "ListItem", "position": 2, "name": "Agbo of Thirappane (Wild Tusker)" },
              { "@type": "ListItem", "position": 3, "name": "Nadungamuwa Raja (Sacred Sovereign)" },
              { "@type": "ListItem", "position": 4, "name": "Mahasen of Minneriya (Wild Tusker)" },
              { "@type": "ListItem", "position": 5, "name": "Millangoda Raja (Sacred Tusker)" }
            ]
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/famous-elephants.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Famous Elephants", "item": `${BASE_URL}/famous-elephants.html` }
          ]
        }
      ]
    }
  },

  'conservation-news.html': {
    title: 'Sri Lanka Elephant Conservation News & Field Dispatches | Gaja Lanka',
    description: 'Real-time conservation news, Department of Wildlife Conservation field dispatches, veterinary rescue reports, and coexistence research bulletins.',
    canonical: `${BASE_URL}/conservation-news.html`,
    ogImage: `${BASE_URL}/assets/images/hero-elephant.jpg`,
    ogImageAlt: 'Field dispatches and wildlife research telemetry on Sri Lankan elephants',
    ogType: 'article',
    keywords: 'Sri Lanka elephant news, wildlife conservation news, DWC field dispatches, elephant rescue Sri Lanka, HEC incident wire',
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `${BASE_URL}/conservation-news.html#webpage`,
          "name": "Sri Lanka Elephant Conservation News & Field Dispatches",
          "description": "Peer-reviewed research bulletins, Department of Wildlife Conservation field dispatches, veterinary rescue logs, and grassroots coexistence stories.",
          "image": `${BASE_URL}/assets/images/hero-elephant.jpg`,
          "publisher": {
            "@type": "NewsMediaOrganization",
            "name": "Gaja Lanka Dispatch",
            "url": `${BASE_URL}/`
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${BASE_URL}/conservation-news.html#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Conservation News", "item": `${BASE_URL}/conservation-news.html` }
          ]
        }
      ]
    }
  }
};

// Alias / Duplicate Files Mapping
const ALIAS_PAGES = {
  'overview.html': 'species-profile.html',
  'history.html': 'heritage-and-culture.html',
  'massacre.html': 'colonial-archive.html',
  'habitats.html': 'habitats-and-corridors.html',
  'wild-domestic.html': 'welfare-and-care.html',
  'statistics.html': 'data-and-analytics.html',
  'hec.html': 'human-elephant-conflict.html',
  'news.html': 'conservation-news.html',
  'pinnawala-elephant-orphanage.html': 'pinnawala.html',
  'udawalawe-transit-home.html': 'udawalawe.html',
  'dossier.html': 'famous-elephants.html'
};

function generateSeoHeadSnippet(cfg) {
  const jsonLdStr = JSON.stringify(cfg.jsonLd, null, 2);

  return `
  <!-- Primary Meta Tags -->
  <title>${cfg.title}</title>
  <meta name="title" content="${cfg.title}"/>
  <meta name="description" content="${cfg.description}"/>
  <meta name="keywords" content="${cfg.keywords}"/>
  <meta name="author" content="Gaja Lanka Conservation Initiative"/>
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
  <link rel="canonical" href="${cfg.canonical}"/>
  <meta name="theme-color" content="#0b160c"/>
  <link rel="manifest" href="site.webmanifest"/>

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="${cfg.ogType}"/>
  <meta property="og:site_name" content="Gaja Lanka"/>
  <meta property="og:url" content="${cfg.canonical}"/>
  <meta property="og:title" content="${cfg.title}"/>
  <meta property="og:description" content="${cfg.description}"/>
  <meta property="og:image" content="${cfg.ogImage}"/>
  <meta property="og:image:alt" content="${cfg.ogImageAlt}"/>
  <meta property="og:locale" content="en_US"/>

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:url" content="${cfg.canonical}"/>
  <meta name="twitter:title" content="${cfg.title}"/>
  <meta name="twitter:description" content="${cfg.description}"/>
  <meta name="twitter:image" content="${cfg.ogImage}"/>
  <meta name="twitter:image:alt" content="${cfg.ogImageAlt}"/>

  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
${jsonLdStr}
  </script>`;
}

function processCanonicalFile(filename, cfg) {
  const filePath = path.join(ROOT_DIR, filename);
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Remove existing titles and meta descriptions, robots, canonicals, og/twitter tags, and existing jsonld
  html = html.replace(/<title>[\s\S]*?<\/title>/gi, '');
  html = html.replace(/<meta\s+[^>]*name=["']title["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+[^>]*name=["']description["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+[^>]*name=["']keywords["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+[^>]*name=["']author["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+[^>]*name=["']robots["'][^>]*>/gi, '');
  html = html.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+[^>]*name=["']theme-color["'][^>]*>/gi, '');
  html = html.replace(/<link\s+[^>]*rel=["']manifest["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+[^>]*property=["']og:[^"']*["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+[^>]*name=["']twitter:[^"']*["'][^>]*>/gi, '');
  html = html.replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, '');

  // 2. Inject new SEO tags into <head>
  const seoSnippet = generateSeoHeadSnippet(cfg);
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${seoSnippet}\n</head>`);
  } else {
    html = `<head>${seoSnippet}</head>` + html;
  }

  // 3. Fix images: alt, data-alt, loading="lazy", decoding="async"
  let imgIndex = 0;
  html = html.replace(/<img\s+([^>]+)>/gi, (match, attrs) => {
    imgIndex++;
    let newAttrs = attrs;

    // Check data-alt
    const dataAltMatch = /data-alt=["']([^"']*)["']/i.exec(newAttrs);
    const altMatch = /alt=["']([^"']*)["']/i.exec(newAttrs);

    if (dataAltMatch && (!altMatch || !altMatch[1].trim())) {
      const dataAltVal = dataAltMatch[1].replace(/"/g, '&quot;');
      if (altMatch) {
        newAttrs = newAttrs.replace(/alt=["'][^"']*["']/i, `alt="${dataAltVal}"`);
      } else {
        newAttrs = `alt="${dataAltVal}" ` + newAttrs;
      }
    } else if (altMatch && !altMatch[1].trim()) {
      // empty alt, replace with descriptive default
      newAttrs = newAttrs.replace(/alt=["'][^"']*["']/i, `alt="Sri Lankan Elephant Conservation Infographic"`);
    } else if (!altMatch) {
      newAttrs = `alt="Sri Lankan Elephant Documentary Monograph Asset" ` + newAttrs;
    }

    // Lazy loading: images after the first 1-2 images should be lazy loaded
    if (!/loading=["']/i.test(newAttrs)) {
      if (imgIndex <= 2) {
        newAttrs += ' fetchpriority="high"';
      } else {
        newAttrs += ' loading="lazy" decoding="async"';
      }
    }

    return `<img ${newAttrs}>`;
  });

  // 4. Special heading fix for famous-elephants.html if needed
  if (filename === 'famous-elephants.html') {
    if (!html.includes('<h2')) {
      html = html.replace(
        '<!-- Interactive Pantheon Section -->\n    <section class="space-y-6">',
        `<!-- Interactive Pantheon Section -->\n    <section class="space-y-6">\n      <div class="sr-only">\n        <h2>Pantheon Register of Iconic Sri Lankan Wild & Sacred Tuskers</h2>\n      </div>`
      );
    }
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`[OK] Updated canonical file: ${filename}`);
}

function processAliasFile(aliasFilename, targetCanonicalFile) {
  const filePath = path.join(ROOT_DIR, aliasFilename);
  const targetCfg = CANONICAL_PAGES[targetCanonicalFile];
  const targetUrl = targetCfg.canonical;

  const html = `<!DOCTYPE html>
<html class="dark" lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Redirecting to ${targetCfg.title}</title>
  
  <!-- SEO Duplicate Elimination: Noindex & Canonical Pointer -->
  <meta name="robots" content="noindex, follow"/>
  <link rel="canonical" href="${targetUrl}"/>
  
  <!-- Instant Client Redirect -->
  <meta http-equiv="refresh" content="0; url=${targetCanonicalFile}"/>
  <script>
    (function() {
      const search = window.location.search || '';
      const hash = window.location.hash || '';
      window.location.replace('${targetCanonicalFile}' + search + hash);
    })();
  </script>
  
  <style>
    body {
      background-color: #0b160c;
      color: #d9e6d5;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      text-align: center;
      padding: 1.5rem;
    }
    .card {
      max-width: 520px;
      padding: 2.5rem;
      background: #172218;
      border-radius: 1.25rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    h1 { font-size: 1.25rem; color: #ffffff; margin-bottom: 0.75rem; }
    p { font-size: 0.95rem; color: #c6c8b8; line-height: 1.6; margin-bottom: 1.5rem; }
    a {
      display: inline-block;
      background: #acd37c;
      color: #102000;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border-radius: 0.75rem;
      text-decoration: none;
      transition: background 0.2s;
    }
    a:hover { background: #c7ef95; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Redirecting to Official Monograph...</h1>
    <p>This legacy URL has been permanently canonicalized to our official resource: <strong>${targetCfg.title}</strong>.</p>
    <a href="${targetCanonicalFile}">Click here if not redirected automatically</a>
  </div>
</body>
</html>`;

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`[OK] Updated alias file with 301-equivalent redirect: ${aliasFilename} -> ${targetCanonicalFile}`);
}

function generateRobotsTxt() {
  const robotsContent = `# Robots.txt for Gaja Lanka - The Sri Lankan Elephant Sanctuary & Conservation Monograph
# Production URL: ${BASE_URL}/

User-agent: *
Allow: /
Allow: /assets/
Allow: /data.json
Allow: /elephant_population_and_mortality_stats.csv
Allow: /famous-elephants.json
Allow: /gaja-lanka-elephants-merged-researched.json

# Disallow internal scratch and build artifacts
Disallow: /build.js
Disallow: /sync_navigation.js
Disallow: /*_seo_*.js
Disallow: /scratch_*.js

# XML Sitemap
Sitemap: ${BASE_URL}/sitemap.xml
`;

  fs.writeFileSync(path.join(ROOT_DIR, 'robots.txt'), robotsContent, 'utf8');
  console.log('[OK] Created robots.txt');
}

function generateSitemapXml() {
  const pagesList = [
    { file: '', priority: '1.0', changefreq: 'weekly', title: 'Gaja Lanka Sanctuary Monograph', img: 'assets/images/hero-elephant.jpg' },
    { file: 'species-profile.html', priority: '0.9', changefreq: 'monthly', title: 'Species Profile & Taxonomy (Elephas maximus maximus)', img: 'assets/images/sri-lanka-elephant-full-body-anatomy.jpg' },
    { file: 'famous-elephants.html', priority: '0.9', changefreq: 'weekly', title: 'Famous Elephants of Sri Lanka: Pantheon & Biometrics', img: 'assets/images/kavantissa-wild-tusker.jpg' },
    { file: 'data-and-analytics.html', priority: '0.9', changefreq: 'weekly', title: 'Empirical Wildlife Telemetry & Population Datasets', img: 'assets/images/sri-lanka-minneriya-herd.jpg' },
    { file: 'habitats-and-corridors.html', priority: '0.9', changefreq: 'monthly', title: 'Habitats, Corridors & Minneriya Gathering', img: 'assets/images/sri-lanka-minneriya-gathering.jpg' },
    { file: 'human-elephant-conflict.html', priority: '0.9', changefreq: 'weekly', title: 'Human-Elephant Conflict Solutions Portal', img: 'assets/images/sri-lanka-elephant-wild-herd.jpg' },
    { file: 'pinnawala.html', priority: '0.8', changefreq: 'monthly', title: 'Pinnawala Elephant Orphanage Guide & Schedule', img: 'assets/images/pinnawala-river-bathing.jpg' },
    { file: 'udawalawe.html', priority: '0.8', changefreq: 'monthly', title: 'Udawalawe Elephant Transit Home (ETH) Rehabilitation', img: 'assets/images/Sandamali.jpg' },
    { file: 'elephant-orphanages.html', priority: '0.8', changefreq: 'monthly', title: 'Sri Lanka Elephant Care & Orphanage Hub', img: 'assets/images/udawalawe-transit-home.jpg' },
    { file: 'welfare-and-care.html', priority: '0.8', changefreq: 'monthly', title: 'Elephant Welfare: Wild Ethology vs Captive Care', img: 'assets/images/sri-lanka-elephant-mother-calf.jpg' },
    { file: 'heritage-and-culture.html', priority: '0.8', changefreq: 'monthly', title: 'Sacred Tusker Cultural Heritage of Sri Lanka', img: 'assets/images/sri-lanka-tusker-nadungamuwa-raja.jpg' },
    { file: 'colonial-archive.html', priority: '0.8', changefreq: 'monthly', title: 'Colonial Era Elephant Eradication Ledger (1796-1948)', img: 'assets/images/history-elephant.jpg' },
    { file: 'conservation-news.html', priority: '0.9', changefreq: 'daily', title: 'Conservation News Wire & Field Dispatches', img: 'assets/images/hero-elephant.jpg' }
  ];

  const today = '2026-10-21';

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  for (const p of pagesList) {
    const loc = p.file ? `${BASE_URL}/${p.file}` : `${BASE_URL}/`;
    const imgUrl = `${BASE_URL}/${p.img}`;

    sitemapContent += `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <image:image>
      <image:loc>${imgUrl}</image:loc>
      <image:title>${p.title.replace(/&/g, '&amp;')}</image:title>
      <image:caption>Authentic photographic monograph documentation courtesy of Gaja Lanka Digital Conservation Initiative</image:caption>
    </image:image>
  </url>
`;
  }

  sitemapContent += `</urlset>`;

  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapContent, 'utf8');
  console.log('[OK] Created sitemap.xml');
}

function generateWebManifest() {
  const manifest = {
    "name": "Gaja Lanka | The Sri Lankan Elephant Sanctuary",
    "short_name": "Gaja Lanka",
    "description": "Scientific monograph and empirical observatory for the Sri Lankan Elephant (Elephas maximus maximus).",
    "start_url": "./index.html",
    "display": "standalone",
    "background_color": "#0b160c",
    "theme_color": "#0b160c",
    "icons": [
      {
        "src": "assets/images/favicon.svg",
        "sizes": "any",
        "type": "image/svg+xml",
        "purpose": "any maskable"
      }
    ]
  };

  fs.writeFileSync(path.join(ROOT_DIR, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');
  console.log('[OK] Created site.webmanifest');
}

// Execute
console.log('--- EXECUTING COMPLETE TECHNICAL SEO ENGINE ---');

// 1. Process Canonical Pages
for (const [filename, cfg] of Object.entries(CANONICAL_PAGES)) {
  processCanonicalFile(filename, cfg);
}

// 2. Process Alias Pages
for (const [aliasFile, canonicalTarget] of Object.entries(ALIAS_PAGES)) {
  processAliasFile(aliasFile, canonicalTarget);
}

// 3. Generate Infrastructure files
generateRobotsTxt();
generateSitemapXml();
generateWebManifest();

console.log('--- TECHNICAL SEO ENGINE COMPLETE ---');
