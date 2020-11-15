import React, { useEffect } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { onFetchSenate } from "../../redux/actions/VoterActions";
import SplashScreen from "../../components/Login/SplashScreen";

export default function SenatorsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onFetchSenate());
  }, []);

  const SenatorsData = useSelector(
    (state) => state.voterReducer.senators.results
  );

  function changeCase(data) {
    const tear = data.split("")[0].toLowerCase();
    return tear + data.substring(1);
  }

  function dateOfBirth(date) {
    return (
      date.split("-")[2] + "-" + date.split("-")[1] + "-" + date.split("-")[0]
    );
  }

  const SenatorsRender = () => (
    <Card>
      {SenatorsData[0].members &&
        SenatorsData[0].members.map((Senators) => (
          <Card
            key={uuidv4()}
            containerStyle={[
              Senators.party === "R"
                ? styles.cardContainerR
                : styles.cardContainerD,
            ]}
          >
            <Card.Title
              style={[
                Senators.party === "R" ? styles.textColorR : styles.textColorD,
              ]}
            >
              {Senators.short_title} {Senators.last_name} {Senators.first_name}{" "}
              ({Senators.party} - {Senators.state})
            </Card.Title>
            <Card.Divider
              style={[
                Senators.party === "R" ? styles.lineColorR : styles.lineColorD,
              ]}
            />
            <Text key={uuidv4()} style={styles.mainContainer}>
              <View style={styles.imgContainer}>
                {Senators.phone === "202-224-4124" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri: `https://www.congress.gov/img/member/115_sr_al_jones_doug_200.jpg`,
                    }}
                  />
                ) : (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri: `https://www.congress.gov/img/member/${changeCase(
                        Senators.id
                      )}_200.jpg`,
                    }}
                  />
                )}
              </View>
            </Text>
            {
              <View style={styles.dataContainer}>
                <TouchableOpacity style={styles.customBtnBG} disabled={true}>
                  <Text
                    style={styles.customBtnText}
                  >{`Date of Birth: ${dateOfBirth(
                    Senators.date_of_birth
                  )}`}</Text>
                </TouchableOpacity>
                {Senators.gender === "M" ? (
                  <TouchableOpacity style={styles.customBtnBG} disabled={true}>
                    <Text style={styles.customBtnText}>Gender : Male</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.customBtnBG} disabled={true}>
                    <Text style={styles.customBtnText}>Gender : Female</Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity style={styles.customBtnBG} disabled={true}>
                  <Text
                    style={styles.customBtnText}
                  >{`Next Election Due: ${Senators.next_election}`}</Text>
                </TouchableOpacity>

                {Senators.leadership_phone !== null ? (
                  <TouchableOpacity style={styles.customBtnBG} disabled={true}>
                    <Text
                      style={styles.customBtnText}
                    >{`Phone Number: ${Senators.phone}`}</Text>
                  </TouchableOpacity>
                ) : (
                  <></>
                )}

                <TouchableOpacity style={styles.customBtnBG} disabled={true}>
                  <Text
                    style={styles.customBtnText}
                  >{`Address: ${Senators.office}`}</Text>
                </TouchableOpacity>

                {Senators.leadership_role !== null ? (
                  <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                    <Text
                      style={styles.customBtnTextN}
                    >{`Role: ${Senators.leadership_role}`}</Text>
                  </TouchableOpacity>
                ) : (
                  <></>
                )}

                <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                  <Text
                    style={styles.customBtnTextN}
                  >{`Total Votes/Present Votes: ${Senators.total_votes} / ${Senators.total_present}`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                  <Text
                    style={styles.customBtnTextN}
                  >{`Missed Votes No/Pct: ${Senators.missed_votes} / ${Senators.missed_votes_pct}%`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                  <Text
                    style={styles.customBtnTextN}
                  >{`Votes Along/Against Party Line: ${Senators.votes_with_party_pct}% / ${Senators.votes_against_party_pct}%`}</Text>
                </TouchableOpacity>

                {Senators.twitter_facebook_account !== null ? (
                  <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                    <Text style={styles.customBtnTextN}>
                      {" "}
                      {`FB: ${Senators.twitter_account}.  Tw: ${Senators.facebook_account}`}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                    <Text style={styles.customBtnTextN}>
                      {`Twitter: ${Senators.twitter_account}`}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            }
          </Card>
        ))}
    </Card>
  );

  function SenatorsValidation() {
    if (SenatorsData === undefined) {
      return <SplashScreen />;
    } else {
      return <SenatorsRender />;
    }
  }

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", marginTop: 9 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>
          SENATORS
        </Text>
      </View>
      <ScrollView
        style={{ fontSize: 20, marginTop: 30, marginLeft: 15, marginRight: 15 }}
      >
        <SenatorsValidation />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  thisProfile: {
    width: 150,
    height: 150,
    borderRadius: wp("50%"),
    marginLeft: wp("30%"),
  },
  mainContainer: {
    alignSelf: "center",
    width: wp("95%"),
  },
  cardContainerR: {
    backgroundColor: "#FADBD8",
  },
  cardContainerD: {
    backgroundColor: "#D6EAF8",
  },
  dataContainer: {
    marginTop: 8,
  },
  customBtnText: {
    fontSize: 13,
    fontWeight: "100",
    color: "#0B5345",
    marginLeft: 5,
    fontStyle: "italic",
  },
  customBtnTextN: {
    fontSize: 11.5,
    fontWeight: "100",
    color: "#0B5345",
    marginLeft: 5,
    fontStyle: "italic",
  },
  customBtnBG: {
    borderRadius: 1,
    marginBottom: 1,
    backgroundColor: "#fff",
    height: wp("5%"),
    borderRadius: 5,
  },
  customBtnBGN: {
    borderRadius: 1,
    marginBottom: 1,
    backgroundColor: "#fff",
    height: wp("7%"),
    borderRadius: 5,
  },
  lineColorR: {
    backgroundColor: "#CB4335",
    height: 2,
  },
  lineColorD: {
    backgroundColor: "#0000FF",
    height: 2,
  },
  textColorD: {
    color: "#0000FF",
    fontSize: 16,
  },
  textColorR: {
    color: "#CB4335",
    fontSize: 16,
  },
});
