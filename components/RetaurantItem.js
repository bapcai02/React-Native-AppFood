import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function RetaurantItem () {
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

    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            { localRetaurants.map((item, index) => (
                <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}>
                    <RetaurantImage  image_url={item.image_url} />
                    <RetaurantInfo name={item.name} review={item.review} rating={item.rating} />
                </View>
            ))}
      </TouchableOpacity>
    )
}

const RetaurantImage = (props) => (
    <>
        <Image style={{ width: "100%", height: 180 }}
            source={{
                uri: props.image_url
            }} 
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size="25" color="#fff" />
        </TouchableOpacity>
    </>
)

const RetaurantInfo = (props) => (
    <View 
        style= {{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
        }}
    >
        <View >
            <Text style={{ fontSize: 15, fontWeight: "bold"}}>{ props.name }</Text>
            <Text style={{ fontSize: 13, color: "gray"}}>30 - 45 min</Text>
        </View>
        <View style={{ 
            backgroundColor: "white", 
            height: 30, 
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15
        }}>
            <Text>{ props.rating }</Text>
        </View>
    </View>
    
)