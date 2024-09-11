import React from 'react';
import ReactDOM from 'react-dom/client';

/*

Header
  - Logo
  - Nav Links

Body
  - Search
  - RestaurantContainer
  - RestaurantCard
    - Img,
    - Name of Res, Rating, Cuisine, Delivery time

Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://play-lh.googleusercontent.com/McWrS_uCmc8qVm0fCdJLCHye3QqQEQhRUsYMyCpT49WWo7CdkoNJTAZz2X_dROF93fsy"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  info: {
    id: '88694',
    name: 'Indian Chilly Square',
    cloudinaryImageId: 'xpbpi5wthfpe7utqkquz',
    locality: 'Geetanjali Colony',
    areaName: 'Shankar Nagar',
    costForTwo: '₹400 for two',
    cuisines: ['Biryani', 'North Indian', 'Snacks', 'Hyderabadi', 'Kebabs'],
    avgRating: 4,
    parentId: '106423',
    avgRatingString: '4.0',
    totalRatingsString: '23K+',
    sla: {
      deliveryTime: 31,
      lastMileTravel: 4.4,
      serviceability: 'SERVICEABLE',
      slaString: '30-35 mins',
      lastMileTravelString: '4.4 km',
      iconType: 'ICON_TYPE_EMPTY',
    },
    availability: {
      nextCloseTime: '2024-09-11 23:15:00',
      opened: true,
    },
  },
};

const resArrList = [
  {
    info: {
      id: '87256',
      name: 'Hotel Al-Taha',
      cloudinaryImageId: 'y3br6vk0mpp85risrm9z',
      locality: 'Mehbubia Chowk',
      areaName: 'Baijnathpara',
      costForTwo: '₹300 for two',
      cuisines: ['Biryani', 'North Indian', 'Snacks', 'Hyderabadi'],
      avgRating: 4,
      parentId: '8543',
      avgRatingString: '4.0',
      totalRatingsString: '30K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '2.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-12 03:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
            description: 'OnlyOnSwiggy',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'OnlyOnSwiggy',
                  imageId:
                    'v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/hotel-al-taha-mehbubia-chowk-baijnathpara-rest87256',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '85625',
      name: 'Hotel Hyderabadi',
      cloudinaryImageId: 'pgcx51etsencf45hifxb',
      locality: 'Bajinathpara',
      areaName: 'Baijnathpara',
      costForTwo: '₹250 for two',
      cuisines: ['Biryani', 'Hyderabadi', 'Indian'],
      avgRating: 4.1,
      parentId: '99358',
      avgRatingString: '4.1',
      totalRatingsString: '22K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '2.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-12 01:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/hotel-hyderabadi-bajinathpara-baijnathpara-rest85625',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '88694',
      name: 'Indian Chilly Square',
      cloudinaryImageId: 'xpbpi5wthfpe7utqkquz',
      locality: 'Geetanjali Colony',
      areaName: 'Shankar Nagar',
      costForTwo: '₹400 for two',
      cuisines: ['Biryani', 'North Indian', 'Snacks', 'Hyderabadi', 'Kebabs'],
      avgRating: 4,
      parentId: '106423',
      avgRatingString: '4.0',
      totalRatingsString: '23K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.4,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '4.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 23:15:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Chinese.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Chinese.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/indian-chilly-square-geetanjali-colony-shankar-nagar-rest88694',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '122038',
      name: 'Vrindavan Thali',
      cloudinaryImageId: 'e7zvelah6u489cz0o0i3',
      locality: 'Samta Colony',
      areaName: 'Jawahar Nagar',
      costForTwo: '₹250 for two',
      cuisines: ['Thalis', 'North Indian', 'Indian'],
      avgRating: 4.4,
      veg: true,
      parentId: '9030',
      avgRatingString: '4.4',
      totalRatingsString: '13K+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.5,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '0.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 22:15:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/vrindavan-thali-samta-colony-jawahar-nagar-rest122038',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '658648',
      name: 'Barbetos The cloud kitchen',
      cloudinaryImageId: 'e4264cc60f029e458f558b92b99785be',
      locality: 'Sadar Bazar Road',
      areaName: 'Sadar Bazar',
      costForTwo: '₹300 for two',
      cuisines: ['Chinese', 'Snacks'],
      avgRating: 4.4,
      veg: true,
      parentId: '395630',
      avgRatingString: '4.4',
      totalRatingsString: '995',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '1.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-12 00:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/barbetos-the-cloud-kitchen-road-sadar-bazar-rest658648',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '86931',
      name: 'Madrasi Restaurant',
      cloudinaryImageId: 'xcpppyigvjdv8moadmzq',
      locality: 'Malviya Main Road',
      areaName: 'Jawahar Nagar',
      costForTwo: '₹400 for two',
      cuisines: ['Biryani', 'North Indian', 'Snacks', 'Hyderabadi'],
      avgRating: 4.1,
      parentId: '128964',
      avgRatingString: '4.1',
      totalRatingsString: '7.3K+',
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.6,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '1.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 23:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/madrasi-restaurant-malviya-main-road-jawahar-nagar-rest86931',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '224950',
      name: 'Axis Juice- Devendra Nagar',
      cloudinaryImageId: 'y5ilvvqh79ma94mtpidd',
      locality: 'Sector 1',
      areaName: 'Devendra Nagar',
      costForTwo: '₹400 for two',
      cuisines: [
        'Juices',
        'North Indian',
        'South Indian',
        'Snacks',
        'Italian',
        'Tandoor',
        'Biryani',
        'Grill',
        'Street Food',
        'Chinese',
        'Desserts',
        'Beverages',
        'Fast Food',
        'Pizzas',
        'Healthy Food',
      ],
      avgRating: 4.4,
      veg: true,
      parentId: '38200',
      avgRatingString: '4.4',
      totalRatingsString: '13K+',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.5,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '2.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 22:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Paneer.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Rxawards/_CATEGORY-North%20Indian.png',
            description: 'Delivery!',
          },
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Paneer.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-North%20Indian.png',
                },
              },
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹40 OFF',
        subHeader: 'ABOVE ₹199',
        headerTypeV2: 'HEADER_TYPE_V2_TOP_UP',
        secondaryDiscountCallout: '+ EXTRA ₹40 OFF',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/axis-juice-devendra-nagar-sector-1-devendra-nagar-rest224950',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '108041',
      name: 'New Little Hut Family Restaurant',
      cloudinaryImageId: 'io9aqdo7o82mczdaykbj',
      locality: 'Samta Colony',
      areaName: 'Samta Colony',
      costForTwo: '₹300 for two',
      cuisines: ['North Indian', 'Chinese', 'South Indian'],
      avgRating: 4.2,
      parentId: '472805',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.9,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '1.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹50 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '3.9',
          ratingCount: '873',
        },
        source: 'GOOGLE',
        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/new-little-hut-family-restaurant-samta-colony-rest108041',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '89490',
      name: "Mario's",
      cloudinaryImageId: 'l0fj2qx8pny7b42k0uxz',
      locality: 'Station Road',
      areaName: 'Pandri',
      costForTwo: '₹400 for two',
      cuisines: ['rolls', 'Fast Food', 'Chinese'],
      avgRating: 4.3,
      parentId: '132656',
      avgRatingString: '4.3',
      totalRatingsString: '5.7K+',
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 23:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'FREE ITEM',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/marios-station-road-pandri-rest89490',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '85591',
      name: 'Girnar Restaurant',
      cloudinaryImageId: 'dcm7yompbkrdf8o8v5lo',
      locality: 'GE Road',
      areaName: 'Moudhapara',
      costForTwo: '₹300 for two',
      cuisines: ['North Indian', 'Biryani', 'Snacks'],
      avgRating: 4.2,
      parentId: '6491',
      avgRatingString: '4.2',
      totalRatingsString: '4.1K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹110',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/girnar-restaurant-ge-road-moudhapara-rest85591',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '86674',
      name: 'Manju Mamta Restaurant',
      cloudinaryImageId: 'nvlymkbshaq3hrua2jxw',
      locality: 'Ramsagar Para',
      areaName: 'Jawahar Nagar',
      costForTwo: '₹350 for two',
      cuisines: ['South Indian', 'Snacks', 'North Indian'],
      avgRating: 4.4,
      veg: true,
      parentId: '131961',
      avgRatingString: '4.4',
      totalRatingsString: '12K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '1.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-12 00:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Dosa.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Rxawards/_CATEGORY-South%20Indian.png',
            description: 'Delivery!',
          },
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId:
                    'Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Dosa.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-South%20Indian.png',
                },
              },
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/manju-mamta-restaurant-ramsagar-para-jawahar-nagar-rest86674',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '85985',
      name: 'Suruchi Thali Restaurant',
      cloudinaryImageId: 'xoemruaitmo5vnl1jbme',
      locality: 'Jaistambh Chowk',
      areaName: 'Nayapara',
      costForTwo: '₹250 for two',
      cuisines: ['Indian', 'Rajasthani', 'Thalis'],
      avgRating: 4.2,
      veg: true,
      parentId: '197951',
      avgRatingString: '4.2',
      totalRatingsString: '4.9K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.2,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png',
            description: 'Delivery!',
          },
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png',
                },
              },
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹50 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/suruchi-thali-restaurant-jaistambh-chowk-nayapara-rest85985',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '482749',
      name: 'Hotel Noorjaha',
      cloudinaryImageId: '5c5580984d48ff9bd83fd5417f883702',
      locality: 'Anand Nagar',
      areaName: 'Civil Lines',
      costForTwo: '₹350 for two',
      cuisines: ['Biryani', 'Tandoor', 'North Indian', 'Chinese'],
      avgRating: 4.3,
      parentId: '100831',
      avgRatingString: '4.3',
      totalRatingsString: '1.4K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3.7,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '3.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹40 OFF',
        subHeader: 'ABOVE ₹199',
        headerTypeV2: 'HEADER_TYPE_V2_TOP_UP',
        secondaryDiscountCallout: '+ EXTRA ₹40 OFF',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/hotel-noorjaha-anand-nagar-civil-lines-rest482749',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '229672',
      name: 'Annapurna Thali',
      cloudinaryImageId: 'tliarbpcsrevit373uuo',
      locality: 'Ramsagar Para',
      areaName: 'Jawahar Nagar',
      costForTwo: '₹350 for two',
      cuisines: ['Thalis', 'Indian', 'North Indian'],
      avgRating: 4.3,
      veg: true,
      parentId: '34161',
      avgRatingString: '4.3',
      totalRatingsString: '4.4K+',
      sla: {
        deliveryTime: 24,
        lastMileTravel: 0.5,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '0.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 22:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/annapurna-thali-ramsagar-para-jawahar-nagar-rest229672',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '768958',
      name: 'Goila Butter Chicken',
      cloudinaryImageId: '2acf0681a049dea7dac7271cf7ccc560',
      locality: 'DEVENDRA NAGAR',
      areaName: 'CITY CENTRE',
      costForTwo: '₹600 for two',
      cuisines: ['North Indian', 'Biryani', 'Kebabs'],
      avgRating: 3.9,
      parentId: '322587',
      avgRatingString: '3.9',
      totalRatingsString: '174',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.7,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '2.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-12 02:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/goila-butter-chicken-devendra-nagar-city-centre-rest768958',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '493173',
      name: 'Grameen Kulfi',
      cloudinaryImageId: 'cbp11dcq0c4pva5llzom',
      locality: 'Shyam Square',
      areaName: 'Pandri',
      costForTwo: '₹120 for two',
      cuisines: ['Ice Cream', 'Desserts'],
      avgRating: 4.7,
      veg: true,
      parentId: '12175',
      avgRatingString: '4.7',
      totalRatingsString: '423',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/grameen-kulfi-shyam-square-pandri-rest493173',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '579717',
      name: 'GetAWay-Ice Creams & Desserts',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/9/5/0351f284-4424-4131-ae1b-f6ae9eb22e89_579717.jpg',
      locality: 'City Centre Mall',
      areaName: 'Devendra Nagar',
      costForTwo: '₹200 for two',
      cuisines: ['Ice Cream', 'Desserts', 'Healthy Food', 'Sweets'],
      avgRating: 4.5,
      veg: true,
      parentId: '354819',
      avgRatingString: '4.5',
      totalRatingsString: '242',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.7,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '2.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-12 02:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹69',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/getaway-ice-creams-and-desserts-city-centre-mall-devendra-nagar-rest579717',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '96305',
      name: 'Rasoi Thali',
      cloudinaryImageId: 'klhqxstwbmlaqhvaud3b',
      locality: 'Katora Talab',
      areaName: 'Civil Lines',
      costForTwo: '₹200 for two',
      cuisines: ['Thalis', 'Rajasthani', 'North Indian', 'Indian'],
      avgRating: 3.9,
      veg: true,
      parentId: '167336',
      avgRatingString: '3.9',
      totalRatingsString: '4.2K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.9,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-12 00:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹150 OFF',
        subHeader: 'ABOVE ₹299',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/rasoi-thali-katora-talab-civil-lines-rest96305',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '181811',
      name: 'Amritsari Restaurant',
      cloudinaryImageId: 'niesls5gnqwbjkntxgpn',
      locality: 'Ghadi Chowk',
      areaName: 'Moudhapara',
      costForTwo: '₹350 for two',
      cuisines: [
        'North Indian',
        'South Indian',
        'Biryani',
        'Snacks',
        'Punjabi',
        'Thalis',
        'Indian',
      ],
      avgRating: 4.2,
      parentId: '32193',
      avgRatingString: '4.2',
      totalRatingsString: '7.4K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.1,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '2.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-11 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId:
                    'Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/amritsari-restaurant-ghadi-chowk-moudhapara-rest181811',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '84718',
      name: 'Pizza Hut',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/5fb5e4f8-a286-4803-a7d9-296a23e1d410_84718.jpg',
      locality: 'jail road',
      areaName: 'Devendra Nagar',
      costForTwo: '₹350 for two',
      cuisines: ['Pizzas'],
      avgRating: 4.3,
      parentId: '721',
      avgRatingString: '4.3',
      totalRatingsString: '7.8K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '2.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-12 03:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png',
            description: 'Delivery!',
          },
          {
            imageId: 'Rxawards/_CATEGORY-Pizza.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png',
                },
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Pizza.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹189',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/raipur/pizza-hut-jail-road-devendra-nagar-rest84718',
      type: 'WEBLINK',
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props; //Destructuring

  const { avgRatingString, costForTwo } = resData.info; //Destructuring
  // console.log(resData);
  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
        alt=""
      />
      <h3>{props.resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(', ')}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

// not using keys(not acceptable) <<<<<<<<<< index as a key (use only if you dont have unique id) <<<<<<<<<<<< unique id (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Box</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resObj} /> */}
        {/* <RestaurantCard resData={resArrList[18]} /> */}
        {resArrList.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.info.id || index}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
