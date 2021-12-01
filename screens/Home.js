import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Categories } from '../components/Categories';
import { HeaderTab } from '../components/HeaderTab';
import { SearchBar } from '../components/SearchBar';
import { RetaurantItem } from '../components/RetaurantItem';

export function Home () {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTab />
                <SearchBar />
            </View>
            <Categories />
            <RetaurantItem />
        </SafeAreaView>
    )
}