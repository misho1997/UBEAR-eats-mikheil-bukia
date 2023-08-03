import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MainCard from "../organisms/MainCard";

import Screen from "../atoms/Screen";
import { FlatList, ActivityIndicator } from "react-native";
import CtgrBtn from "../atoms/CtgrBtn";
import * as ROUTES from "../../constants/routes";
import { Portal } from "react-native-portalize";
import BottomSheet from "../atoms/BottomSheet";
import Button from "../atoms/Button";
import { View, Text, ScrollView } from "react-native";
import CategoryCrd from "../atoms/CategoryCrd";

const ctgrListItems = [
  {
    id: 0,
    title: "Convinience",
    imgUrl: require("../images/pic-1.png"),
  },
  {
    id: 1,
    title: "Soup",
    imgUrl: require("../images/pic-2.png"),
  },
  {
    id: 3,
    title: "Cake",
    imgUrl: require("../images/pic-3.png"),
  },
  {
    id: 4,
    title: "More ...",
    imgUrl: require("../images/Rectangle 186.png"),
  },
];

const listToRender = [
  {
    id: 0,
    imgUrl: require("../images/HomeScreenImg/MainImage.png"),
    title: "Adenine Kitchen",
    price: "0.29",
    time: "15-25",
    rating: "4.4",
    promotion: true,
    promQuant: 5,
    promPrice: 8,
  },
  {
    id: 1,
    imgUrl: require("../images/HomeScreenImg/Picture2.png"),
    title: "Cardinal Chips",
    price: "1.29",
    time: "15-30",
    promotion: true,
    rating: "4.8",
  },
  {
    id: 2,
    imgUrl: require("../images/HomeScreenImg/Picture3.png"),
    title: "Ice Cream Bar",
    price: "2.35",
    time: "10-25",
    rating: "5.0",
  },
  {
    id: 3,
    imgUrl: require("../images/HomeScreenImg/Picture4.png"),
    title: "Round eatery",
    price: "0.29",
    time: "10-25",
    rating: "4.4",
  },
];

const delivery = [
  {
    id: 4,
    imgUrl: require("../images/HomeScreenImg/MainImage.png"),
    title: "Delivery",
    price: "0.29",
    time: "15-25",
    rating: "4.4",
    promotion: true,
    promQuant: 5,
    promPrice: 8,
  },
  {
    id: 5,
    imgUrl: require("../images/HomeScreenImg/Picture2.png"),
    title: "Delivery",
    price: "1.29",
    time: "15-30",
    promotion: true,
    rating: "4.8",
  },
  {
    id: 6,
    imgUrl: require("../images/HomeScreenImg/Picture3.png"),
    title: "Delivery",
    price: "2.35",
    time: "10-25",
    rating: "5.0",
  },
  {
    id: 20,
    imgUrl: require("../images/HomeScreenImg/Picture4.png"),
    title: "Round eatery",
    price: "0.29",
    time: "10-25",
    rating: "4.4",
  },
];

const pickup = [
  {
    id: 7,
    imgUrl: require("../images/HomeScreenImg/MainImage.png"),
    title: "Pickup",
    price: "0.29",
    time: "15-25",
    rating: "4.4",
    promotion: true,
    promQuant: 5,
    promPrice: 8,
    distance: 3.2,
  },
  {
    id: 8,
    imgUrl: require("../images/HomeScreenImg/Picture2.png"),
    title: "Pickup",
    price: "1.29",
    time: "15-30",
    rating: 4.8,
    distance: 5.2,
  },
  {
    id: 9,
    imgUrl: require("../images/HomeScreenImg/Picture3.png"),
    title: "Pickup",
    price: "2.35",
    time: "10-25",
    rating: "5.0",
    distance: 1.2,
  },
  {
    id: 15,
    imgUrl: require("../images/HomeScreenImg/Picture4.png"),
    title: "Pickup",
    price: "2.35",
    time: "10-25",
    rating: "5.0",
    distance: 1.2,
  },
];

const dineIn = [
  {
    id: 10,
    imgUrl: require("../images/HomeScreenImg/MainImage.png"),
    title: "dineIn",
    price: "0.29",
    time: "15-25",
    rating: "4.4",
    promotion: true,
    promQuant: 5,
    promPrice: 8,
  },
  {
    id: 11,
    imgUrl: require("../images/HomeScreenImg/Picture2.png"),
    title: "dineIn",
    price: "5",
    time: "15-30",
    rating: "4.8",
  },
  {
    id: 12,
    imgUrl: require("../images/HomeScreenImg/Picture4.png"),
    title: "dineIn",
    price: "2.35",
    time: "10-25",
    rating: "5.0",
  },
];

const Container = styled.ScrollView``;

// const Container = styled(Screen)`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   background-color: #f6f6f6;
// `;

const Items = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SortConatinaer = styled.View``;

const SortTopContainer = styled.View`
  margin: 0 auto;
  width: 300px;
  flex-direction: row;
`;

const CategoryBtn = styled(CtgrBtn)`
  margin: 10px 0;
  border-radius: 25px;
  padding: 0 22px;
`;

const SortBottom = styled.View`
  width: 270px;
  height: 25px;
  margin: 5px auto;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Location = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
`;

const LoadingSnipper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = ({ navigation }) => {
  const [ctgr, setCtgr] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const categorySheetRef = useRef();

  const fetchData = () => {
    if (ctgr === 0) {
      setData(delivery);
    } else if (ctgr === 1) {
      setData(pickup);
    } else {
      setData(dineIn);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchData();
      setIsLoading(false);
    }, 500);
  }, []);

  const handlePress = (value) => {
    setCtgr(value);
  };

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  return (
    <Container>
      {loading && <ActivityIndicator size="large" color="green" />}
      <LoadingSnipper style={{ display: loading ? "none" : "flex" }}>
        <SortConatinaer>
          <SortTopContainer>
            {btns.map((item) => {
              return (
                <CategoryBtn
                  title={item.title}
                  onPress={() => handlePress(item.value)}
                  key={item.value}
                  light={item.value === ctgr ? true : false}
                />
              );
            })}
          </SortTopContainer>
          <Items>
            {ctgrListItems.map((item) => {
              return (
                <CategoryCrd
                  title={item.title}
                  imgUrl={item.imgUrl}
                  key={item.id}
                />
              );
            })}
          </Items>

          <SortBottom>
            <Location style={{ fontFamily: "UberMove" }}>
              Now • London Hall
            </Location>
          </SortBottom>

          {/* <CategoryCrd
            title={ctgrListItems[0].title}
            imgUrl={ctgrListItems[0].imgUrl}
          />
          <CategoryCrd
            title={ctgrListItems[1].title}
            imgUrl={ctgrListItems[1].imgUrl}
          />
          <CategoryCrd
            title={ctgrListItems[2].title}
            imgUrl={ctgrListItems[2].imgUrl}
          />
          <CategoryCrd
            title="More"
            imgUrl={require("")}
            onPress={() => categorySheetRef.current.open()}
          /> */}
        </SortConatinaer>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <MainCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={ctgr === 0 ? item.price : ""}
              distance={ctgr === 1 ? item.distance : ""}
              time={item.time}
              rating={item.rating}
              promotion={ctgr === 0 ? item.promotion : ""}
              promQuant={item.promQuant}
              promPrice={item.promPrice}
              onPress={() => navigation.navigate(ROUTES.REST_DETAILS)}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </LoadingSnipper>
      <Portal>
        <BottomSheet bottomSheetRef={categorySheetRef}>
          <Button
            title="Press me"
            onPress={() => categorySheetRef.current.close()}
          />
          <Text>hello there</Text>
        </BottomSheet>
      </Portal>
    </Container>
  );
};

export default Home;
