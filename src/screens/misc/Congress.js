import React, { useEffect } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Card } from "react-native-elements";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { onFetchCongress } from "../../redux/actions/VoterActions";
import SplashScreen from "../../components/Login/SplashScreen";

export default function CongressList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onFetchCongress());
  }, []);

  const CongressData = useSelector(
    (state) => state.voterReducer.congress.results
  );

  if (CongressData !== null) {
    console.log(CongressData[0].members.twitter_account);
  }
  function changeCase(data) {
    const tear = data.split("")[0].toLowerCase();
    return tear + data.substring(1);
  }

  function dateOfBirth(date) {
    return (
      date.split("-")[2] + "-" + date.split("-")[1] + "-" + date.split("-")[0]
    );
  }

  const CongressRender = () => (
    <Card>
      {CongressData[0].members &&
        CongressData[0].members.map((Congress) => (
          <Card
            key={uuidv4()}
            containerStyle={[
              Congress.party === "R"
                ? styles.cardContainerR
                : styles.cardContainerD,
            ]}
          >
            <Card.Title
              style={[
                Congress.party === "R" ? styles.textColorR : styles.textColorD,
              ]}
            >
              {Congress.short_title} {Congress.last_name} {Congress.first_name}{" "}
              ({Congress.party} - {Congress.state})
            </Card.Title>
            <Card.Divider
              style={[
                Congress.party === "R" ? styles.lineColorR : styles.lineColorD,
              ]}
            />
            <Text key={uuidv4()} style={styles.mainContainer}>
              <View style={styles.imgContainer}>
                {Congress.last_name === "Amash" &&
                Congress.first_name == "Justin" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_mi_3_amash_justin_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Arrington" &&
                  Congress.first_name == "Jodey" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_tx_19_arrington_jodey_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Bacon" &&
                  Congress.first_name == "Don" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_ne_2_bacon_don_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Balderson" &&
                  Congress.first_name == "Troy" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "data:image/jpeg;base64,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",
                    }}
                  />
                ) : Congress.last_name === "Bass" &&
                  Congress.first_name == "Karen" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_ca_37_bass_karen_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Bonamici" &&
                  Congress.first_name == "Suzanne" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_or_1_bonamici_suzanne_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Boyle" &&
                  Congress.first_name == "Brendan" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_pa_13_boyle_brendan_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Buck" &&
                  Congress.first_name == "Ken" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_co_4_buck_ken_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Bucshon" &&
                  Congress.first_name == "Larry" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_in_8_bucshon_larry_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Burgess" &&
                  Congress.first_name == "Michael" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_tx_26_burgess_michael_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Carbajal" &&
                  Congress.first_name == "Salud" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_ca_24_carbajal_salud_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Cartwright" &&
                  Congress.first_name == "Matt" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_pa_17_cartwright_matt_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Chabot" &&
                  Congress.first_name == "Steven" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_oh_1_chabot_steve_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Cicilline" &&
                  Congress.first_name == "David" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_ri_1_cicilline_david_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Cloud" &&
                  Congress.first_name == "Michael" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_tx_27_cloud_michael_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Clyburn" &&
                  Congress.first_name == "James" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_sc_6_clyburn_james_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Cooper" &&
                  Congress.first_name == "Jim" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_tn_5_cooper_jim_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Correa" &&
                  Congress.first_name == "J." ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_ca_46_correa_j_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "Davidson" &&
                  Congress.first_name == "Warren" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_oh_8_davidson_warren_200.jpg",
                    }}
                  />
                ) : Congress.last_name === "DeLauro" &&
                  Congress.first_name == "Rosa" ? (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri:
                        "https://www.congress.gov/img/member/115_rp_ct_3_delauro_rosa_200.jpg",
                    }}
                  />
                ) : (
                  <Image
                    style={styles.thisProfile}
                    source={{
                      uri: `https://www.congress.gov/img/member/${changeCase(
                        Congress.id
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
                    Congress.date_of_birth
                  )}`}</Text>
                </TouchableOpacity>
                {Congress.gender === "M" ? (
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
                  >{`Next Election Due: ${Congress.next_election}`}</Text>
                </TouchableOpacity>

                {Congress.phone !== null ? (
                  <TouchableOpacity style={styles.customBtnBG} disabled={true}>
                    <Text
                      style={styles.customBtnText}
                    >{`Phone Number: ${Congress.phone}`}</Text>
                  </TouchableOpacity>
                ) : (
                  <></>
                )}

                <TouchableOpacity style={styles.customBtnBG} disabled={true}>
                  <Text
                    style={styles.customBtnText}
                  >{`Address: ${Congress.office}`}</Text>
                </TouchableOpacity>

                {Congress.leadership_role !== null ? (
                  <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                    <Text
                      style={styles.customBtnTextN}
                    >{`Role: ${Congress.leadership_role}`}</Text>
                  </TouchableOpacity>
                ) : (
                  <></>
                )}

                <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                  <Text
                    style={styles.customBtnTextN}
                  >{`Total Votes/Present Votes: ${Congress.total_votes} / ${Congress.total_present}`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                  <Text
                    style={styles.customBtnTextN}
                  >{`Missed Votes No/Pct: ${Congress.missed_votes} / ${Congress.missed_votes_pct}%`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                  <Text
                    style={styles.customBtnTextN}
                  >{`Votes Along/Against Party Line: ${Congress.votes_with_party_pct}% / ${Congress.votes_against_party_pct}%`}</Text>
                </TouchableOpacity>

                {Congress.twitter_facebook_account !== null ? (
                  <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                    <Text style={styles.customBtnTextN}>
                      {" "}
                      {`FB: ${Congress.twitter_account}.  Tw: ${Congress.facebook_account}`}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.customBtnBGN} disabled={true}>
                    <Text style={styles.customBtnTextN}>
                      {`Twitter: ${Congress.twitter_account}`}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            }
          </Card>
        ))}
    </Card>
  );

  function CongressValidation() {
    if (CongressData === undefined) {
      return <SplashScreen />;
    } else {
      return <CongressRender />;
    }
  }

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", marginTop: 9 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>
          Congress
        </Text>
      </View>
      <ScrollView
        style={{ fontSize: 20, marginTop: 30, marginLeft: 15, marginRight: 15 }}
      >
        <CongressValidation />
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
