import React, { useState,useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Categories } from '../components/Categories';
import { HeaderTab } from '../components/HeaderTab';
import { SearchBar } from '../components/SearchBar';
import { RetaurantItem } from '../components/RetaurantItem';
import { ButtomTab } from '../components/ButtomTab';

const localRetaurants = [
    {
        name: "Farmhouse kitchen VietNam Cuisine",
        image_url: "http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/hanoi/dining/allParagraphs/BucketComponent/ListingContainer/011110/image/home-hanoi-restaurant-vietnam.jpg",
        categories: ["Cafe", "Bar"],
        price: "100$",
        review: 1332,
        rating: 4.56
    },
    {
        name: "Farmhouse kitchen VietNam Cuisine",
        image_url: "http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/hanoi/dining/allParagraphs/BucketComponent/ListingContainer/011110/image/home-hanoi-restaurant-vietnam.jpg",
        categories: ["Cafe", "Bar"],
        price: "100$",
        review: 1332,
        rating: 4.56
    },
    {
        name: "Farmhouse kitchen VietNam Cuisine",
        image_url: "http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/hanoi/dining/allParagraphs/BucketComponent/ListingContainer/011110/image/home-hanoi-restaurant-vietnam.jpg",
        categories: ["Cafe", "Bar"],
        price: "100$",
        review: 1332,
        rating: 4.56
    },
    {
        name: "Farmhouse kitchen VietNam Cuisine",
        image_url: "http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/hanoi/dining/allParagraphs/BucketComponent/ListingContainer/011110/image/home-hanoi-restaurant-vietnam.jpg",
        categories: ["Cafe", "Bar"],
        price: "100$",
        review: 1332,
        rating: 4.56
    },
    {
        name: "Farmhouse kitchen VietNam Cuisine",
        image_url: "http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/hanoi/dining/allParagraphs/BucketComponent/ListingContainer/011110/image/home-hanoi-restaurant-vietnam.jpg",
        categories: ["Cafe", "Bar"],
        price: "100$",
        review: 1332,
        rating: 4.56
    }
];
const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
  
export function Home () {
    
    const [retaurantData, setRestaurantData] = useState(localRetaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  
      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      };
  
       fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
            setRestaurantData(
                json.businesses.filter((business) =>
                business.transactions.includes(activeTab.toLowerCase())
                )
            )
        );
    };
  
    useEffect(() => {
      getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RetaurantItem
                    retaurantData={retaurantData}
                />
            </ScrollView>
            <Divider width={1} />
            <ButtomTab />
        </SafeAreaView>
    );
}